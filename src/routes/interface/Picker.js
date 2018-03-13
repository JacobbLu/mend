import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {Motion, spring, presets} from 'react-motion';

class Picker extends Component {

  render() {
    if(this.props.firstRender){
      return (
        <div style={pickerContainerStyle}>
          <SwatchesPicker height='200px' width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
        </div>
      );
    }
    return (
      <div style={pickerContainerStyle}>
        {this.props.open ?
            <SwatchesPicker height='200px' width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
          :
            null
        }
      </div>
    );
  }

}

const pickerContainerStyle = {
  width: '50%',
  margin: 'auto',
  marginTop: '20px',
  left: '25%',
  top: '460px',
  boxShadow: '-10px 10px 20px rgba(200, 200, 200, 0.8)'
};

export default Picker;
