import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import App from "./App";
import Signin from "./pages/Signin";
import OrderReportsPage from "./pages/OrderReportsPage";
import FAQ from "./pages/FAQ";
import DiscussionSearchPage from './pages/DiscussionSearchPage';
import DiscussionNotesPage from './pages/DiscussionNotesPage';
import NewOrdersPage from './pages/NewOrdersPage';
import CurrentOrderspage from './pages/CurrentOrdersPage';

import OrderDetailsPage from './pages/OrderDetailsPage';
import OrderMeasurementsPage from './pages/OrderMeasurementsPage';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/order-reports" component={OrderReportsPage}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/discussion-search" component={DiscussionSearchPage}/>
                    <Route exact path="/discussion-notes" component={DiscussionNotesPage}/>
                    <Route exact path="/new-orders" component={NewOrdersPage}/>
                    <Route exact path="/current-orders" component={CurrentOrderspage}/>

                    <Route exact path="/order-details" component={OrderDetailsPage}/>
                    <Route exact path="/order-measurements" component={OrderMeasurementsPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;