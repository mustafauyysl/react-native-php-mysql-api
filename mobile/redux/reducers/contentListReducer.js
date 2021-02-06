import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function contentListReducer(
  state = initialState.content,
  action,
) {
  switch (action.type) {
    case actionTypes.GET_CONTENT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
