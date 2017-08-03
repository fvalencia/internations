import {
  REQUEST_USERS, RECEIVE_USERS
} from '../../actions/users';


export default function users(state = {}, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        data: null
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.users,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
