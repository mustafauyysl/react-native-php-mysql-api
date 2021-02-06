import * as actionTypes from './actionTypes';

export function getContentSuccess(content) {
  return {type: actionTypes.GET_CONTENT_SUCCESS, payload: content};
}

export function getContent(category, placeId) {
  return function (dispatch) {
    let url = 'host';
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
        placeId,
      }),
    })
      .then((response) => response.json())
      .then((result) => dispatch(getContentSuccess(result)));
  };
}

export function selectContentSuccess(content) {
  return {type: actionTypes.SELECT_CONTENT, payload: content};
}

export function selectContent(contentId) {
  return function (dispatch) {
    let url = 'host';
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contentId,
      }),
    })
      .then((response) => response.json())
      .then((result) => dispatch(selectContentSuccess(result[0])));
  };
}
