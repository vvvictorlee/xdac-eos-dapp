import {
    REQUEST_TRANSFER,
    GET_TRANSFERS,
    APPROVE_TRANSFER,
    REFUND_TRANSFER
} from "./types";

import {backendUrl, getEos} from '../../common/eos';
import axios from "axios/index";

export function getTransfers(wallet) {

    return async dispatch => {

        return axios.get(`${backendUrl}${wallet}/info?table=transfers`).then( response => {
            return response.data.data.rows;
        }).then( data => {
            return dispatch({
                type: GET_TRANSFERS,
                payload: data
            });
        });

    }
}

export function approve(id) {

    return async dispatch => {

        let {eos, wallet, sactterAccount} = await getEos();
        let actions = await eos.contract(wallet);
        await actions.approvetrns(sactterAccount.name, id, {authorization: sactterAccount.name});
        return dispatch(getTransfers(wallet));
    }

}

export function refund(id) {

    return async dispatch => {
        let {eos, wallet, sactterAccount} = await getEos();
        let actions = await eos.contract(wallet);
        await actions.refundtrns(sactterAccount.name, id, {authorization: sactterAccount.name});
        return dispatch(getTransfers(wallet));
    }

}