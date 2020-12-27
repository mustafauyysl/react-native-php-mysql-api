import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function commentListReducer(state=initialState.comment,action) {
    switch (action.type) {
        case actionTypes.GET_COMMENT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}