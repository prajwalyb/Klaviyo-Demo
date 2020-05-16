import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popUpReducer from './popUpReducer';
import flowReducer from './flowReducer';

export default combineReducers({
    auth:authReducer,
    popUp:popUpReducer,
    flow:flowReducer
})
