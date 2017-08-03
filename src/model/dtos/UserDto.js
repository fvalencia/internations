
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLList as List
} from 'graphql';

import GroupDto from './GroupDto';

const UserDto = new ObjectType({
  name: 'UserItem',
  fields: {
    id: { type: new NonNull(IntType)},
    name: { type: new NonNull(StringType) },
    picture:  { type: StringType },
    groups: {
        type: new List(GroupDto),
    }
  },
});

export default UserDto;
