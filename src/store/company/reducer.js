import {COMPANY_SET} from "./types";
import transfers from "../transfer/reducer";

let initialState = {};

const Company = (state = initialState, {type, payload = null}) => {
    switch(type){
        case COMPANY_SET:
            state = {...state, ...payload};
            return state;
        default:
            return state;
    }
};

export default Company;