import { GraphQLList as List, GraphQLInt as IntType } from 'graphql';
import fetch from 'isomorphic-fetch';
import GroupDto from '../../dtos/GroupDto';

/*
  Here you would configurate the API call
*/

let items = [];

const groups = {
  type: new List(GroupDto),
  async resolve() {
    /*
      Here you would configurate the fetch()
    */

    let result = [
        {
          id: 1,
          name: 'Movies',
          users: [
            {
              id: 1,
              name: 'Felipe Valencia',
              picture: 'https://placeimg.com/300/300/animals?1',
            }
          ]
        },
        {
          id: 2,
          name: 'Hangout',
          users: [
            {
              id: 1,
              name: 'Felipe Valencia',
              picture: 'https://placeimg.com/300/300/animals?1',
            },
            {
              id: 2,
              name: 'Peter Griffin',
              picture: 'https://placeimg.com/300/300/animals?2',
            }
          ]
        },
        {
          id: 3,
          name: 'Food',
          users: [
            {
              id: 2,
              name: 'Peter Griffin',
              picture: 'https://placeimg.com/300/300/animals?2',
            },
            {
              id: 3,
              name: 'Harry Potter',
              picture: 'https://placeimg.com/300/300/animals?3',
            }
          ]
        },
        {
          id: 4,
          name: 'Wizards',
          users: [
            {
              id: 3,
              name: 'Harry Potter',
              picture: 'https://placeimg.com/300/300/animals?3',
            },
          ]
        },
      ];

    return result;

  },
};

export default groups;
