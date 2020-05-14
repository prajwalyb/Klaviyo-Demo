import { UPDATE_FLOW , GET_FLOWS , INITIALIZE_FLOW} from "./types.js";

import axios from 'axios';
import { returnErrors , clearErrors } from './errorActions';
import { API_URL } from '../helpers/utils.js';

export const initializeFlow = (newFlow) => dispatch =>{
    dispatch({
        type:INITIALIZE_FLOW,
        payload:newFlow
    })
}

export const saveFlow = () => ( dispatch , getState ) =>{
    const token=getState().auth.token;
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }
    if(token){
        config.headers['x-auth-token'] = token
    }
    ( getState().flow.flow_name && getState().flow.flow_id ) ? 
        axios.post( `${API_URL}/flows/save` , {
            user:getState().auth.user,
            flow:getState().flow
        } , config )
        .then(res=>{
            dispatch({
                type:UPDATE_FLOW
            })
            console.log(res.data)
        })
        .catch(err=>{
            dispatch(returnErrors(err.data, err.status,'FLOW_NOT_SAVED'))
            console.log(err)
        }) : 
        dispatch(returnErrors('Flow Can Not Be Saved',408,'FLOW_NOT_SAVED'))
}