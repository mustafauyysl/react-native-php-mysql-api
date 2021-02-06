import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function selectPlaceReducer(
  state = initialState.selectedPlace,
  action,
) {
  switch (action.type) {
    case actionTypes.SELECT_PLACE:
      return action.payload;
    default:
      return state;
  }
}
