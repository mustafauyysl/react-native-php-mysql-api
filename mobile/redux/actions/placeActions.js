import * as actionTypes from './actionTypes';

export function getPlaceSuccess(places) {
    return { type: actionTypes.GET_PLACE_SUCCESS, payload: places };
  }
  
export function getPlace() {
  return function (dispatch) {
    let url = "host";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPlaceSuccess(result)));
  };
}

export function selectPlace(place) {
  return { type: actionTypes.SELECT_PLACE, payload: place };
}