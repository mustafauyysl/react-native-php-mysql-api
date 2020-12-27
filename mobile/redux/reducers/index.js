import {combineReducers} from 'redux';
import selectCategoryReducer from './selectCategoryReducer';
import placesListReducer from './place/placesListReducer';
import selectPlaceReducer from './place/selectPlaceReducer';
import contentListReducer from './contentListReducer';
import selectContentReducer from './selectContentReducer';
import commentListReducer from './commentListReducer';
import topsListReducer from './topsListReducer';

const rootReducer = combineReducers({
    selectCategoryReducer,
    placesListReducer,
    selectPlaceReducer,
    contentListReducer,
    selectContentReducer,
    commentListReducer,
    topsListReducer
})

export default rootReducer;