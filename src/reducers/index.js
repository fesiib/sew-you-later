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
import discussionImages from './discussionImages';
import discussionImageNotes from './discussionImageNotes';

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
    discussionImages: discussionImages,
    discussionImageNotes: discussionImageNotes,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;