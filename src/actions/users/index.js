/* eslint-disable import/prefer-default-export */
import {getUsers} from '../../model/services/users/';

export const REQUEST_USERS = 'REQUEST_USERS'
function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}


export const RECEIVE_USERS = 'RECEIVE_USERS'
function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users: json.users,
      receivedAt: Date.now()
    }
  }
}

export function fetchUsers() {
  return (dispatch, getState, {graphqlRequest}) => {
    dispatch(requestUsers());
    return getUsers(graphqlRequest).then(users => {
      return dispatch(receiveUsers(users));
    });
  }
}
