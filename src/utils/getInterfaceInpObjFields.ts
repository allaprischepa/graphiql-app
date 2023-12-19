import { GraphQLInterfaceType, GraphQLInputObjectType } from 'graphql';

const getInterfaceInpObjFields = (
  type: GraphQLInterfaceType | GraphQLInputObjectType
) => {
  const fields = type.getFields();

  return Object.keys(fields).map((key) => {
    const { name, type, description } = fields[key];

    return {
      name: name,
      type: type.toString(),
      args: [],
      descr: description || '',
    };
  });
};

export default getInterfaceInpObjFields;
