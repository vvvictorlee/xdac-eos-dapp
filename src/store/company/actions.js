import {
    COMPANY_SET,
} from "./types";


import {
    getTransfers
} from "../transfer/actions"

import {backendUrl, getEos} from '../../common/eos';
import axios from "axios/index";


export function setCompany(payload) {
    return {
        type: COMPANY_SET,
        payload
    }
}

export function getCompanySummaryInfo() {
    return async dispatch => {
        console.log('getCompanySummaryInfo');

        // let {eos, wallet, sactterAccount} = await getEos();

        let wallet = 'l3xfjxup';
        dispatch(getTransfers(wallet));

    }
}

