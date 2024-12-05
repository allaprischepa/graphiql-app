import { describe, it, expect } from 'vitest';
import {
  GraphQLBoolean,
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
        descr: GraphQLString.description,
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
        descr: GraphQLBoolean.description,
        fields: null,
      },
    ]);
  });
});
