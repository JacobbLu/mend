'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './component';

import {
   loadCartRequest
} from '../../../store/actions/cart';

function mapStateToProps (state) {
  return {
    cartData: state.getIn(['cart', 'cart']).toJS(),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    loadCartRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
