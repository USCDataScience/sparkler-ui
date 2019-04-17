import {combineReducers} from 'redux';
import rootReducer from './test';
import searchReducer from "./search";

export default combineReducers({
    timereducer: rootReducer,
    searchreducer: searchReducer
});