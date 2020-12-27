import * as actionTypes from './actionTypes';

export function getCommentSuccess(comment) {
    return { type: actionTypes.GET_COMMENT_SUCCESS, payload: comment };
  }
  
export function getComment(contentId) {
  return function (dispatch) {
    let url = "host";
    return fetch(url, {
        method: 'POST',
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            contentId
        })
    })
      .then((response) => response.json())
      .then((result) => dispatch(getCommentSuccess(result)));
  };
}
