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
