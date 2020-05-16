import { UPDATE_EMAIL , INITIALIZE_EMAIL , LOAD_ALL_EMAILS , LOAD_SELECTED_EMAIL , NO_EMAILS , DELETE_EMAIL } from './types.js'

import axios from 'axios';
import { returnErrors , clearErrors } from './popUpActions';
import { tokenConfig } from './authActions';
import { API_URL } from '../helpers/utils.js';

export const initializeEmail = (newEmail) => dispatch =>{
    dispatch({
        type:INITIALIZE_EMAIL,
        payload:newEmail
    })
}

export const saveEmail = ( email_body ) => ( dispatch , getState ) =>{
    axios.post(`${API_URL}/emails/save`,{
        user:getState().auth.user,
        email:{
            email_id:getState().email.email_id,
            email_name:getState().email.email_name,
            email_body:email_body
        }
    } , tokenConfig(getState) )
    .then(res=>{
        dispatch({
            type:UPDATE_EMAIL,
            payload:email_body
        })
        console.log(res.data)
    })
    .catch(err=>{
        dispatch(returnErrors(err.data,err.status,"EMAIL_NOT_SAVED"))
        console.log(err)
    })
}

export const loadEmailList = () => {
    return async ( dispatch , getState ) => {
        console.log("object")
        await axios.get(`${API_URL}/emails/loadAll/${getState().auth.user._id} `,tokenConfig(getState))
        .then(item=>{
            console.log(item.data);
            // (item.data) ? dispatch({
            //     type:LOAD_ALL_FLOWS,
            //     payload: item.data
            // }) : dispatch({
            //     type:NO_FLOWS
            // })
            //No Flows ka alert dalna hai
        })
    }
}