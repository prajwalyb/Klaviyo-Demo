import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import flowReducer from './flowReducer';

export default combineReducers({
    auth:authReducer,
    error:errorReducer,
    flow:flowReducer
})
