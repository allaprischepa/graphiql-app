import { GraphQLObjectType } from 'graphql';

const getObjectFields = (type: GraphQLObjectType) => {
  const fields = type.getFields();

  return Object.keys(fields).map((key) => {
    const { name, type, args, description } = fields[key];

    return {
      name: name,
      type: type.toString(),
      args:
        args.map(({ name, type }) => {
          return {
            name: name,
            type: type.toString(),
          };
        }) || [],
      descr: description || '',
    };
  });
};

export default getObjectFields;
