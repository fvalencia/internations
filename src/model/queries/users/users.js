import { GraphQLList as List, GraphQLInt as IntType } from 'graphql';
import fetch from 'isomorphic-fetch';
import UserDto from '../../dtos/UserDto';

/*
  Here you would configurate the API call
*/

let items = [];

const users = {
  type: new List(UserDto),
  async resolve() {
    /*
      Here you would configurate the fetch()
    */

    let result = [
        {
          id: 1,
          name: 'Felipe Valencia',
          picture: 'https://placeimg.com/300/300/animals?1',
          groups: [
            {
              id: 1,
              name: 'Movies'
            },
            {
              id: 2,
              name: 'Hangout'
            },
          ]
        },
        {
          id: 2,
          name: 'Peter Griffin',
          picture: 'https://placeimg.com/300/300/animals?2',
          groups: [
            {
              id: 3,
              name: 'Food'
            },
            {
              id: 2,
              name: 'Hangout'
            },
          ]
        },
        {
          id: 3,
          name: 'Harry Potter',
          picture: 'https://placeimg.com/300/300/animals?3',
          groups: [
            {
              id: 4,
              name: 'Wizards'
            },
            {
              id: 3,
              name: 'Food'
            },
          ]
        },
      ];

    return result;

  },
};

export default users;
