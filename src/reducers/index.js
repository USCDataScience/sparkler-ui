import { combineReducers } from 'redux';
import rootReducer from './test';

export default combineReducers({
    timereducer: rootReducer
});