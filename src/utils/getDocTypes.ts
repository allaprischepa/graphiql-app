import { GraphQLSchema } from 'graphql';
import getDocFields from './getDocFields';
import { DocTypes } from '../types/types';

const getDocTypes = (schema: GraphQLSchema): DocTypes[] => {
  const typeMap = schema.getTypeMap();

  return Object.keys(typeMap)
    .filter((key) => !key.startsWith('__'))
    .map((key) => {
      const type = typeMap[key];
      const { name, description } = type;

      return {
        name: name,
        descr: description as string,
        fields: getDocFields(type) || null,
      };
    });
};

export default getDocTypes;
