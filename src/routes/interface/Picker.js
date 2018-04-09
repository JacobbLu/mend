import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
class Picker extends Component {

  render() {
    if(this.props.firstRender){
      return (
        <div className='picker'>
          <SwatchesPicker height='200px' width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
        </div>
      );
    }
    return (
      <div className='picker'>
        {this.props.open ?
            <SwatchesPicker height='200px' width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
          :
            null
        }
      </div>
    );
  }

}


export default Picker;
