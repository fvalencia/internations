/* eslint-disable import/prefer-default-export */
import {getGroups} from '../../model/services/groups/';

export const REQUEST_GROUPS = 'REQUEST_GROUPS'
function requestGroups() {
  return {
    type: REQUEST_GROUPS
  }
}

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS'
function receiveGroups(json) {
  return {
    type: RECEIVE_GROUPS,
    payload: {
    	data: json.groups,
    	receivedAt: Date.now()
    }
  }
}

export function fetchGroups(page) {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestGroups());
    return getGroups(graphqlRequest).then(groups => {
      return dispatch(receiveGroups(groups));
    });
  }
}
