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
import TestNewOrdersPage from './pages/TestNewOrdersPage';
import TestCurrentOrdersPage from './pages/TestCurrentOrdersPage';

import OrderDetailsPage from './pages/OrderDetailsPage';
import OrderMeasurementsPage from './pages/OrderMeasurementsPage';
import TestOrderDetailsPage from './pages/TestOrderDetailsPage';

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
                    <Route exact path="/test/new-orders" component={TestNewOrdersPage}/>
                    <Route exact path="/test/current-orders" component={TestCurrentOrdersPage}/>
                    <Route exact path="/test/order-details" component={TestOrderDetailsPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;