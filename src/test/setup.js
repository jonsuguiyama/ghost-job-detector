import '@testing-library/jest-dom/vitest';

// jsdom has no IntersectionObserver; the Dados page's infinite scroll needs a stub.
// Tests that need to simulate scrolling can grab the latest instance and call
// `.trigger()` to fire the callback as if the sentinel entered the viewport.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }
  observe() { /* no-op in tests */ }
  unobserve() { /* no-op in tests */ }
  disconnect() { /* no-op in tests */ }
  trigger() {
    this.callback([{ isIntersecting: true }]);
  }
}
MockIntersectionObserver.instances = [];
globalThis.IntersectionObserver = MockIntersectionObserver;

// jsdom has no matchMedia; default to "no preference" so existing motion-based
// tests keep behaving as before. Tests exercising prefers-reduced-motion can
// override window.matchMedia per-test.
window.matchMedia = window.matchMedia || function matchMedia(query) {
  return {
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {}
  };
};
