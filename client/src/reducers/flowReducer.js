import { UPDATE_FLOW , GET_FLOWS , INITIALIZE_FLOW } from "../actions/types.js";
import { chartSimple } from '../components/flows/DefaultChart';

const initialState={
    flow_name: null,
    flow_id: null,
    flow_body: chartSimple
}

export default function ( state = initialState , action ) {
    switch (action.type) {
        case UPDATE_FLOW:
            return {
                ...state,
                // flow_name:action.payload.flow_name,
                // flow_id:action.payload.flow_id,
                //flow_body:action.payload.flow_body
            };
        case INITIALIZE_FLOW:
            return {
                ...state,
                flow_name:action.payload.flow_name,
                flow_id:action.payload.flow_id
            }
        default:
            return state;
    }
} 