import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import { getUser } from './redux/actions/user';

class App extends Component {
  componentDidMount() {
    if (localStorage.user) {
      this.props.dispatch(getUser(JSON.parse(localStorage.user)));
    }
  }
  render() {
    return (
      <div className="container">
        <Header />
        <h1>hello react!</h1>
        <div className="links">
          <Link style={{ marginRight: '20px' }} to="/">home</Link>
          <Link to="/product">product</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(App));