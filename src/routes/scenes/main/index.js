'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './component';

import {
   submitOrder
} from '../../../store/actions/order';

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
