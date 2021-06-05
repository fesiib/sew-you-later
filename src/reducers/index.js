import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import measurementsReducer from './measurements';
import orderReports from "./orderReports";
import reportImages from "./reportImages";
import imageNotes from "./imageNotes";
import newOrdersList from './newOrdersList';
import curOrdersList from './curOrdersList';
import newOrdersId from './newOrdersId';
import newRefImages from './newRefImages';
import curOrdersId from './curOrdersId';
import curRefImages from './curRefImages';
import discussionImages from './discussionImages';
import discussionImageNotes from './discussionImageNotes';
import langReducer from './language';

const RESET_APP = "RESET_APP";

const appReducer = combineReducers({
    counter: counter,
    orderReports: orderReports,
    reportImages: reportImages,
    imageNotes: imageNotes,
    newOrdersList: newOrdersList,
    curOrdersList: curOrdersList,
    measurementsReducer,
    newOrdersId: newOrdersId,
    newRefImages: newRefImages,
    curOrdersId: curOrdersId,
    curRefImages: curRefImages,
    discussionImages: discussionImages,
    discussionImageNotes: discussionImageNotes,
    langReducer: langReducer,
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