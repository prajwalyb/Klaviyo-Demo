import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popUpReducer from './popUpReducer';
import flowReducer from './flowReducer';
import emailReducer from './emailReducer';

export default combineReducers({
    auth:authReducer,
    popUp:popUpReducer,
    flow:flowReducer,
    email:emailReducer
})
