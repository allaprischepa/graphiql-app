import {
  isInterfaceType,
  isObjectType,
  isEnumType,
  isInputObjectType,
  GraphQLNamedType,
} from 'graphql';
import getObjectFields from './getObjectFields';
import getInterfaceInpObjFields from './getInterfaceInpObjFields';
import getEnumFields from './getEnumFields';

const getDocFields = (type: GraphQLNamedType) => {
  if (isObjectType(type)) return getObjectFields(type);

  if (isInterfaceType(type) || isInputObjectType(type))
    return getInterfaceInpObjFields(type);

  if (isEnumType(type)) return getEnumFields(type);
};

export default getDocFields;
