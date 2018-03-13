import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import Component from './component';

function mapStateToProps (state) {
  return {
    board: state.get('board').toJS().board,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    //
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
