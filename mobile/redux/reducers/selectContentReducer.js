import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function selectContentReducer(
  state = initialState.selectedContent,
  action,
) {
  switch (action.type) {
    case actionTypes.SELECT_CONTENT:
      return action.payload;
    default:
      return state;
  }
}
