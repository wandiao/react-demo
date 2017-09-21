import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    return (
      <div className="home">我是主页</div>
    );
  }
}

export default connect(state => state)(Home);