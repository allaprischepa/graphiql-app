import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

beforeEach(() => {
  Range.prototype.getClientRects = () => ({
    item: () => null,
    length: 0,
    [Symbol.iterator]: vi.fn(),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  cleanup();
});
