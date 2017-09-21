import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null,
    };
  }

  async componentDidMount() {
    const { default: mod } = await this.props.load();
    this.setState({
      mod: mod.default || mod,
    });
  }

  render() {
    if (this.state.mod) {
      return typeof this.props.children === 'function' ? this.props.children(this.state.mod) : this.props.children;
    }
    return null;
  }
}

Bundle.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};


/* eslint-disable react/prop-types */
const ExtendRoute = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      <Bundle load={route.component}>
        {(props.location.pathname === '/login' || window.localStorage.user) ? ((Comp) => <Comp {...props} routes={route.routes} />) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )}
      </Bundle>
    )}
  />
);
export default ExtendRoute;