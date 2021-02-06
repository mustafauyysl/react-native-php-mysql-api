import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function placesListReducer(state = initialState.places, action) {
  switch (action.type) {
    case actionTypes.GET_PLACE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
