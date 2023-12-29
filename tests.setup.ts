import { afterEach, beforeAll, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

beforeAll(() => {
  Range.prototype.getClientRects = () => ({
    item: () => null,
    length: 0,
    [Symbol.iterator]: vi.fn(),
  });
});

beforeEach(() => {
  vi.mock('./src/api/graphqlApi', async () => ({
    ...(await vi.importActual('./src/api/graphqlApi')),
    useGetSchemaQuery: vi.fn().mockReturnValue({ data: {} }),
  }));
});

afterEach(() => {
  vi.restoreAllMocks();
  cleanup();
});
