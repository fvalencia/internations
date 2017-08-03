import {
  REQUEST_NEWS, RECEIVE_NEWS
} from '../../actions/home';

export default function news(state = { data: [] }, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isFetching: true,
        data: []
      });
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state
  }
}
