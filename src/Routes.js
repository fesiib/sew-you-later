import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import App from "./App";
import Signin from "./pages/Signin";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/signin" component={Signin}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;