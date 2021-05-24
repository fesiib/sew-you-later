import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import newOrdersList from './NewOrdersList';
import curOrdersList from './CurrentOrdersList';

const appReducer = combineReducers({
    counter: counter,
    newOrdersList: newOrdersList,
    curOrdersList: curOrdersList,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;