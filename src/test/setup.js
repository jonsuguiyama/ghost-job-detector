import '@testing-library/jest-dom/vitest';

// jsdom has no IntersectionObserver; the Dados page's infinite scroll needs a stub.
class MockIntersectionObserver {
  observe() { /* no-op in tests */ }
  unobserve() { /* no-op in tests */ }
  disconnect() { /* no-op in tests */ }
}
globalThis.IntersectionObserver = MockIntersectionObserver;
