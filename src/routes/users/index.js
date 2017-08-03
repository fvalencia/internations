
import React from 'react';
import Users from './Users';
import Layout from '../../components/Layout';
import {fetchUsers} from '../../actions/users/';

export default {

  path: '/users',

  async action({ store }) {
    store.dispatch(fetchUsers());

    return {
      title: 'React Starter Kit',
      component: <Layout><Users /></Layout>,
    };
  },

};
