import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLList as List
} from 'graphql';

import NewDto from './NewDto';

const NewsList = new ObjectType({
  name: 'NewsList',
  fields: {
    data: { type: new List(NewDto) },
  },
});

export default NewsList;
