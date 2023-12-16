import { GraphQLEnumType } from 'graphql';

const getEnumFields = (type: GraphQLEnumType) => {
  return type.getValues().map(({ name, value, description }) => {
    return {
      name: name,
      type: value,
      args: [],
      descr: description || '',
    };
  });
};

export default getEnumFields;
