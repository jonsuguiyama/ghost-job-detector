import { describe, it, expect } from 'vitest';
import { itemWeights, itemIds, maxWeight, bucketFor, analyzeText } from './scoring';

describe('itemWeights / itemIds', () => {
  it('have the same length', () => {
    expect(itemWeights).toHaveLength(itemIds.length);
  });

  it('maxWeight is the sum of all weights', () => {
    const sum = itemWeights.reduce((a, b) => a + b, 0);
    expect(maxWeight).toBe(sum);
  });
});

describe('bucketFor', () => {
  it('returns low below 0.35', () => {
    expect(bucketFor(0)).toBe('low');
    expect(bucketFor(0.34)).toBe('low');
  });

  it('returns medium between 0.35 and 0.65', () => {
    expect(bucketFor(0.35)).toBe('medium');
    expect(bucketFor(0.64)).toBe('medium');
  });

  it('returns high at 0.65 and above', () => {
    expect(bucketFor(0.65)).toBe('high');
    expect(bucketFor(1)).toBe('high');
  });
});

describe('analyzeText - empty input', () => {
  it('flags nothing for empty or whitespace-only text', () => {
    expect(analyzeText('')).toEqual({ salaryAbsent: false, isGeneric: false });
    expect(analyzeText('   ')).toEqual({ salaryAbsent: false, isGeneric: false });
  });
});

describe('analyzeText - salary detection', () => {
  const longEnoughPrefix = 'A'.repeat(410); // pushes text past the "too short = generic" threshold

  it('detects a currency symbol followed by a digit', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} Salary: $120,000 per year`);
    expect(salaryAbsent).toBe(false);
  });

  it('detects "R$" (Brazilian reais)', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} Faixa salarial R$8.000`);
    expect(salaryAbsent).toBe(false);
  });

  it('detects "80k" shorthand', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} pays around 80k a year`);
    expect(salaryAbsent).toBe(false);
  });

  it('detects "8 mil" shorthand', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} salario de 8 mil reais`);
    expect(salaryAbsent).toBe(false);
  });

  it('detects the word "salary" with no number nearby', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} competitive salary and benefits`);
    expect(salaryAbsent).toBe(false);
  });

  it('flags salaryAbsent when nothing salary-related appears', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} great team, great mission, no numbers here`);
    expect(salaryAbsent).toBe(true);
  });

  it('does not treat an unrelated word ending in "k" as a salary figure', () => {
    const { salaryAbsent } = analyzeText(`${longEnoughPrefix} looking for a rockstar developer`);
    expect(salaryAbsent).toBe(true);
  });
});

describe('analyzeText - genericness detection', () => {
  it('flags very short descriptions as generic regardless of wording', () => {
    const { isGeneric } = analyzeText('Great opportunity, apply now, salary $100k.');
    expect(isGeneric).toBe(true);
  });

  it('flags a long description that still contains buzzwords', () => {
    const text = `${'A'.repeat(410)} this is a fast-paced environment where you wear many hats`;
    expect(analyzeText(text).isGeneric).toBe(true);
  });

  it('does not flag a long, buzzword-free description as generic', () => {
    const text = 'We are hiring a backend engineer to own our payments service end to end. '
      + 'You will work directly with our CTO, Maria Silva, and the two other engineers '
      + 'already on the Payments Platform team, using Node.js, PostgreSQL and AWS. '
      + 'The salary range for this role is R$12.000 to R$16.000 per month, and includes '
      + 'on-call rotation, code review duties, and direct communication with our three '
      + 'largest enterprise customers.';
    expect(text.length).toBeGreaterThan(400);
    expect(analyzeText(text).isGeneric).toBe(false);
  });
});
