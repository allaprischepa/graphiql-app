import { GraphQLSchema } from 'graphql';
import { DocTypes } from '../components/Documentation/Documentation';
import getDocFields from './getDocFields';

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
