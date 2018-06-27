import Config from '../config/config';
const env = process.env.NODE_ENV || "development";
const config = Config[env];
const Eos = require('eosjs');

const network = config.network;

const requiredFields = {
    accounts:[ network ],
};

export async function getEos(){
    const urlParams = new URLSearchParams(window.location.search);
    const wallet = urlParams.get('token');
    const info = await window.scatter.eos( network, Eos).getInfo({});
    const eos = window.scatter.eos( network, Eos, {chainId: info.chain_id} );
    await window.scatter.suggestNetwork(network);
    const identity = await window.scatter.getIdentity(requiredFields);
    const sactterAccount = await identity.accounts.find(account => account.blockchain === 'eos');
    return {eos, wallet, sactterAccount}
}

export const backendUrl = config.backendUrl;
export const currency = config.currency;


