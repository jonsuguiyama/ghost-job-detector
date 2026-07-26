export const itemIds = [
  'days-30-45', 'no-salary', 'generic-description', 'aggregator-only',
  'evergreen', 'silence-after-apply', 'hiring-freeze', 'generic-form', 'duplicate-postings'
];
export const itemWeights = [2, 1, 2, 2, 2, 1, 1, 1, 1];
export const maxWeight = itemWeights.reduce((a, b) => a + b, 0);

export function bucketFor(ratio) {
  if (ratio < 0.35) return 'low';
  if (ratio < 0.65) return 'medium';
  return 'high';
}

const salaryKeywords = [
  'usd', 'brl', 'eur', 'salary', 'salário', 'salario', 'sueldo',
  'faixa salarial', 'remuneração', 'remuneracion', 'pay range', 'compensation'
];
const salaryCurrencyRegex = /[$€£]\s?\d/;
const salaryReaisRegex = /r\$\s?\d/i;

function isNumericToken(tok) {
  if (!tok) return false;
  const value = Number.parseFloat(tok.replace(',', '.'));
  return !Number.isNaN(value);
}

function hasThousandNotation(lower) {
  const tokens = lower.split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.endsWith('k') && isNumericToken(tok.slice(0, -1))) return true;
    if (tok === 'mil' && i > 0 && isNumericToken(tokens[i - 1])) return true;
  }
  return false;
}

function hasSalaryMention(text) {
  const lower = text.toLowerCase();
  if (salaryCurrencyRegex.test(text)) return true;
  if (salaryReaisRegex.test(text)) return true;
  if (hasThousandNotation(lower)) return true;
  return salaryKeywords.some((k) => lower.includes(k));
}

const genericBuzzwords = [
  'rockstar', 'ninja', 'fast-paced', 'fast paced', 'wear many hats', 'like a family', 'dynamic environment',
  'self-starter', 'hit the ground running', 'other duties as assigned', 'competitive salary', 'great opportunity',
  'cultura de dono', 'ambiente dinâmico', 'múltiplas funções', 'vestir a camisa', 'autogerenciável',
  'proativo e dinâmico', 'ambiente acelerado', 'gran oportunidad', 'cultura dinámica', 'ritmo acelerado',
  'como una familia', 'multitarea', 'ambiente de rápido crecimiento'
];

export function analyzeText(text) {
  const lower = text.toLowerCase();
  const buzzHits = genericBuzzwords.filter((b) => lower.includes(b)).length;
  const isGeneric = buzzHits >= 1 || text.trim().length < 400;
  const hasContent = text.trim().length > 0;
  return {
    salaryAbsent: hasContent && !hasSalaryMention(text),
    isGeneric: hasContent && isGeneric
  };
}
