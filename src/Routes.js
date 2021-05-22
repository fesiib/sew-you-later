import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import App from "./App";
import Signin from "./pages/Signin";
import FAQ from "./pages/FAQ";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/faq" component={FAQ}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;