'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './component';

// import {
   // navToHome
// } from '../../../store/actions/navigation';

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    // navToHome
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
