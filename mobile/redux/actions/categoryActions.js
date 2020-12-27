import * as actionTypes from './actionTypes';

export function selectCategory(category) {
  return { type: actionTypes.SELECT_CATEGORY, payload: category };
}
