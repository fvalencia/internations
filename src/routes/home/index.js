
import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import {fetchNews} from '../../actions/home/';

export default {

  path: '/',

  async action({ store }) {
    store.dispatch(fetchNews());

    return {
      title: 'React Starter Kit',
      component: <Layout><Home /></Layout>,
    };
  },

};
