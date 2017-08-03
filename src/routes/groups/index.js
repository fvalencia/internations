
import React from 'react';
import Groups from './Groups';
import Layout from '../../components/Layout';
import {fetchGroups} from '../../actions/groups/';

export default {

  path: '/groups',

  async action({ store }) {
    store.dispatch(fetchGroups());

    return {
      title: 'React Starter Kit',
      component: <Layout><Groups /></Layout>,
    };
  },

};
