import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from 'react-redux'
import * as actions from './actions/authActions'

import { Role } from "./utils/constants"

// components
import Layout from "./layout/Layout";

// pages
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import SkillsHome from "./pages/skillsHome/skillsHome"
import SkillDetails from './pages/skillDetails/SkillDetails'
import Applications from './pages/applications/Applications'
import Profile from './pages/Profile/Profile'
import Feed from './pages/feed/Feed'
import JobDetail from './pages/jobDetail/jobDetail'

import { isAuthenticated } from './utils/token'


class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={SkillsHome} />
          <Route path="/skill/:id" component={SkillDetails} />
          <Route exact path="/jobs" component={Feed} />
          <Route exact path="/jobs/:id" component={JobDetail} />

          <PrivateRoute userRole={this.props.auth.role} path="/applications" roles={[Role.Employee]} component={Applications} />

          <PrivateRoute userRole={this.props.auth.role} roles={[Role.Employee,Role.Employer]} path="/profile" component={Profile} />

          <PrivateRoute userRole={this.props.auth.role} path="/app" roles={[Role.Employer]} component={Layout} />

          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps,actions)(App);

function PrivateRoute({ component: Component, roles, userRole, ...rest }) {
  return (
    <Route
    {...rest}
    render={props => {
        if (!isAuthenticated()) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
        if (roles && roles.indexOf(userRole)===-1 ) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: '/error'}} />
        }
        // authorised so return component
        return <Component {...props} />
      }}
    />
  );
}

