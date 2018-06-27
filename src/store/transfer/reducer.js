import {
    REQUEST_TRANSFER,
    GET_TRANSFERS,
    APPROVE_TRANSFER,
    REFUND_TRANSFER
} from "./types";

const Transfers = (state = [], {type, payload = null}) => {
    switch(type) {
        case GET_TRANSFERS:
            state = payload;
            return state;
        default:
            return state;
    }
};

export default Transfers;


