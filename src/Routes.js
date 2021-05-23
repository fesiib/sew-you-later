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

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/order_reports" component={OrderReportsPage}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/discussion-search" component={DiscussionSearchPage}/>
                    <Route exact path="/discussion-notes" component={DiscussionNotesPage}/>
                    <Route exact path="/new-orders" component={NewOrdersPage}/>
                    <Route exact path="/current-orders" component={CurrentOrderspage}/>
                    <Route exact path="/test/new-orders" component={TestNewOrdersPage}/>
                    <Route exact path="/test/current-orders" component={TestCurrentOrdersPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;