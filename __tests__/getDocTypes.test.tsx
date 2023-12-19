import { describe, it, expect } from 'vitest';
import {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import getDocTypes from '../src/utils/getDocTypes';

describe('Function getObjectFields', () => {
  it('', async () => {
    const characterInterface = new GraphQLInterfaceType({
      name: 'Character',
      fields: {
        name: { type: GraphQLString },
      },
    });

    const PersonType = new GraphQLObjectType({
      name: 'Person',
      fields: () => ({
        name: { type: GraphQLString },
      }),
    });

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          hero: { type: characterInterface },
        },
      }),

      types: [PersonType],
    });

    const result = getDocTypes(schema);

    expect(result).toEqual([
      {
        name: 'Person',
        descr: undefined,
        fields: [
          {
            args: [],
            descr: '',
            name: 'name',
            type: 'String',
          },
        ],
      },
      {
        name: 'String',
        descr:
          'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
        fields: null,
      },
      {
        name: 'Query',
        descr: undefined,
        fields: [
          {
            args: [],
            descr: '',
            name: 'hero',
            type: 'Character',
          },
        ],
      },
      {
        name: 'Character',
        descr: undefined,
        fields: [
          {
            args: [],
            descr: '',
            name: 'name',
            type: 'String',
          },
        ],
      },
      {
        name: 'Boolean',
        descr: 'The `Boolean` scalar type represents `true` or `false`.',
        fields: null,
      },
    ]);
  });
});
