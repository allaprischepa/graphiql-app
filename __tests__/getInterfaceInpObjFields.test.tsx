import { describe, it, expect } from 'vitest';
import { GraphQLInterfaceType, GraphQLString } from 'graphql';
import getInterfaceInpObjFields from '../src/utils/getInterfaceInpObjFields';

describe('Function getInterfaceInpObjFields', () => {
  it('', async () => {
    const EntityType = new GraphQLInterfaceType({
      name: 'Entity',
      fields: {
        name: { type: GraphQLString },
      },
    });

    const result = getInterfaceInpObjFields(EntityType);

    expect(result).toEqual([
      { name: 'name', type: 'String', args: [], descr: '' },
    ]);
  });
});
