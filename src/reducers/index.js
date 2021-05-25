import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import orderReports from "./orderReports";
import reportImages from "./reportImages";
import imageNotes from "./imageNotes";
import newOrdersList from './newOrdersList';
import curOrdersList from './curOrdersList';
import newOrdersId from './newOrdersId';
import newRefImages from './newRefImages';
import curOrdersId from './curOrdersId';
import curRefImages from './curRefImages';

const RESET_APP = "RESET_APP";

const appReducer = combineReducers({
    counter: counter,
    orderReports: orderReports,
    reportImages: reportImages,
    imageNotes: imageNotes,
    newOrdersList: newOrdersList,
    curOrdersList: curOrdersList,
    newOrdersId: newOrdersId,
    newRefImages: newRefImages,
    curOrdersId: curOrdersId,
    curRefImages: curRefImages,
});

export const resetApp = () => ({
    type: RESET_APP,
});

const rootReducer = (state, action) => {
    if (action.type == RESET_APP) {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

export default rootReducer;