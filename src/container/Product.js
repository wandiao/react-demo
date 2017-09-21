import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as countActions from '../redux/actions/count';


class Product extends Component {
  render() {
    const { actions } = this.props;
    return (
      <div className="product">
        <button onClick={actions.increase}>增加</button>
        <button onClick={actions.decrease}>减少</button>
        <button onClick={actions.reset}>重置</button>
      </div>
    );
  }
}

Product.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(undefined, dispatch => {
  return {
    actions: bindActionCreators(countActions, dispatch),
  };
})(Product);