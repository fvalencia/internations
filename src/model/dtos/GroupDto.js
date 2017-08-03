
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLList as List
} from 'graphql';

import UserDto from './UserDto';

const GroupDto = new ObjectType({
  name: 'GroupItem',
  fields: {
    id: { type: new NonNull(IntType)},
    name: { type: new NonNull(StringType) },
    users: {
        type: new List(new ObjectType({
          name: 'UserItemGroup',
          fields: {
            id: { type: new NonNull(IntType)},
            name: { type: new NonNull(StringType) },
            picture:  { type: StringType },
          }
        })),
    }
  },
});

export default GroupDto;
