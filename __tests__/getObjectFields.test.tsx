import { describe, it, expect } from 'vitest';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import getObjectFields from '../src/utils/getObjectFields';

describe('Function getObjectFields', () => {
  it('', async () => {
    const AddressType = new GraphQLObjectType({
      name: 'Address',
      fields: {
        street: { type: GraphQLString },
        number: { type: GraphQLInt },
        formatted: {
          type: GraphQLString,
          resolve(obj) {
            return obj.number + ' ' + obj.street;
          },
        },
      },
    });

    const result = getObjectFields(AddressType);

    expect(result).toEqual([
      { name: 'street', type: 'String', args: [], descr: '' },
      { name: 'number', type: 'Int', args: [], descr: '' },
      { name: 'formatted', type: 'String', args: [], descr: '' },
    ]);
  });
});
