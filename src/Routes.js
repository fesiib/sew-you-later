import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import App from "./App";
import Signin from "./pages/Signin";
import OrderReportsPage from "./pages/OrderReportsPage";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/order_reports" component={OrderReportsPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;