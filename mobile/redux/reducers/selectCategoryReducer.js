import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function selectCategoryReducer(state=initialState.selectedCategory,action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return action.payload
        default:
            return state;
    }
}