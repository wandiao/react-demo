import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/user';


class Header extends Component {
  logout = () => {
    const { dispatch, history } = this.props;
    dispatch(logout());
    history.push('/login');
  }
  render() {
    const { count, user } = this.props;
    return (
      <div className="header">
        <span>{count}</span>
        <span>{user ? <div>{ user.name }, <span onClick={this.logout}>退出</span></div> : '未登录'}</span>
      </div>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(connect(state => state)(Header));