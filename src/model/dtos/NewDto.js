
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const NewDto = new ObjectType({
  name: 'NewItem',
  fields: {
    headline: { type: new NonNull(StringType) },
    text: { type: new NonNull(StringType) },
    date: { type: StringType },
    picture: { type: StringType }
  },
});

export default NewDto;
