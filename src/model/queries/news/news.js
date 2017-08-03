import { GraphQLList as List, GraphQLInt as IntType, } from 'graphql';
import fetch from 'isomorphic-fetch';
import NewsList from '../../dtos/NewsList';

/*
  Here you would configurate the API call
*/

let items = [];

const news = {
  type: NewsList,
  async resolve() {
    /*
      Here you would configurate the fetch()
    */
    let result = {
      data:[
        {
          headline: 'First New',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '01/01/2017',
          picture: 'https://placeimg.com/400/400/nature?1'
        },
        {
          headline: 'Second New',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '02/01/2017',
          picture: 'https://placeimg.com/400/400/nature?2'
        },
        {
          headline: 'Third New',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '03/01/2017',
          picture: 'https://placeimg.com/400/400/nature?3'
        }
      ]
    };

    return result;

  },
};

export default news;
