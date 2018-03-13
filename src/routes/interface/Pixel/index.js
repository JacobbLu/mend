import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { updatePixel } from '../../../store/actions/board'
import Component from './component';

function mapStateToProps (state) {
  return {
    //
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updatePixel
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
