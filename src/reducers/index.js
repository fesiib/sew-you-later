import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import newOrdersList from './NewOrdersList';

const appReducer = combineReducers({
    counter: counter,
    newOrdersList,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;