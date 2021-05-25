import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import orderReports from "./orderReports";
import reportImages from "./reportImages";
import imageNotes from "./imageNotes";
import newOrdersList from './NewOrdersList';
import curOrdersList from './CurrentOrdersList';

const appReducer = combineReducers({
    counter: counter,
    orderReports: orderReports,
    reportImages: reportImages,
    imageNotes: imageNotes,
    newOrdersList: newOrdersList,
    curOrdersList: curOrdersList,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;