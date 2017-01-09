import React from 'react';
import ReactRouter from 'react-router';
import {Router, Route, IndexRoute , hashHistory} from 'react-router';
 
import Main from '../components/Main'
import Home from '../components/Home';
import Logincontainer from '../containers/Logincontainer';

import CreateContainer from '../containers/CreateContainer';
import ProfileContainer from '../containers/ProfileContainer';
 
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route name="login" path="/login" component={Logincontainer}/>
            <Route name="createaccount" path="/create-account" component={CreateContainer}/>
            <Route name="profile" path="/profile" component={ProfileContainer}/>
        </Route>
    </Router>
)


export default routes;
