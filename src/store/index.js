import {applyMiddleware,createStore,compose, combineReducers} from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { persistStore } from 'redux-persist'

import { default as company }  from './company/reducer';
import transfers from './transfer/reducer';



const appReducers = combineReducers({
    company,
    transfers
});

const store = createStore(
    appReducers,
    compose(
        applyMiddleware(ReduxThunk, ReduxPromise, logger)
    )
);

persistStore(store);
export default store;