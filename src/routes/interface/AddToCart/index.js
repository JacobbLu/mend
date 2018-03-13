import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import Component from './component';
import {
  updatePreCart,
  addToCartRequest,
 } from '../../../store/actions/cart'


function mapStateToProps (state) {
  return {
    preCart: state.getIn(['cart', 'preCart']).toJS(),
    board: state.get('board').toJS().board,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updatePreCart,
    addToCartRequest,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
