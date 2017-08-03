import {
  REQUEST_GROUPS, RECEIVE_GROUPS
} from '../../actions/groups';


export default function groups(state = {}, action) {
  switch (action.type) {
    case REQUEST_GROUPS:
      return Object.assign({}, state, {
        isFetching: true,
        data: null
      });
    case RECEIVE_GROUPS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
