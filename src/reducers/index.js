import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";
import orderReports from "./orderReports";
import reportImages from "./reportImages";
import imageNotes from "./imageNotes";

const appReducer = combineReducers({
    counter: counter,
    orderReports: orderReports,
    reportImages: reportImages,
    imageNotes: imageNotes,
});

const rootReducer = (state, action) => {
    // state = undefined;
    return appReducer(state, action);
}

export default rootReducer;