import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as userAction from '../redux/actions/user';


class Login extends Component {
  login = () => {
    console.log(this.props);
    const { dispatch, history, location } = this.props;
    dispatch(userAction.login()).then(() => {
      if (location.state) {
        history.push(location.state.from);
      } else {
        history.push('/');
      }
    });
  }
  render() {
    return (
      <div className="login-page">
        <button onClick={this.login}>登录</button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect()(Login);