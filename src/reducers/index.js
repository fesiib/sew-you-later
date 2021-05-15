import {combineReducers} from 'redux';
//import user from "./user";

import counter from "./counter";

const appReducer = combineReducers({
    counter: counter,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;