import { describe, it, expect } from 'vitest';
import { GraphQLEnumType } from 'graphql';
import getEnumFields from '../src/utils/getEnumFields';

describe('Function getEnumFields', () => {
  it('', async () => {
    const RGBType = new GraphQLEnumType({
      name: 'RGB',
      values: {
        RED: { value: 0 },
        GREEN: { value: 1 },
        BLUE: { value: 2 },
      },
    });

    const result = getEnumFields(RGBType);

    expect(result).toEqual([
      { name: 'RED', type: 0, args: [], descr: '' },
      { name: 'GREEN', type: 1, args: [], descr: '' },
      { name: 'BLUE', type: 2, args: [], descr: '' },
    ]);
  });
});
