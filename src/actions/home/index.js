/* eslint-disable import/prefer-default-export */
import {getNews} from '../../model/services/news/';

export const REQUEST_NEWS = 'REQUEST_NEWS'
function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
function receiveNews(json) {
  return {
    type: RECEIVE_NEWS,
    payload: {
    	data: json.news.data,
    	receivedAt: Date.now()
    }
  }
}

export function fetchNews(page) {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestNews());
    return getNews(graphqlRequest).then(news => {
      return dispatch(receiveNews(news));
    });
  }
}
