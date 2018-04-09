'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './component';

import {
   loadGalleryRequest
} from '../../../store/actions/gallery';

function mapStateToProps (state) {
  return {
    galleryData: state.getIn(['gallery', 'gallery']).toJS(),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    loadGalleryRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
