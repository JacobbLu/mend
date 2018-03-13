import React, { Component } from 'react';

export default class Pixel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      realColor: this.props.color,
    };
    this.getPixelStyles = this.getPixelStyles.bind(this);
  }

  getPixelStyles() {
    var length = ((1 / this.props.count) * 100).toString() + '%'
    var style = {
      'backgroundColor': this.state.color,
      'width': length,
      'height': length,
      'display': 'inline-block',
      'float': 'left',
    };
    return style;
  }

  render() {
    return (
      <div className = {this.props.className}
        style = {this.getPixelStyles()}
        onClick = {
          this.props.completed ?
          null
          :
          (e) => {
            e.preventDefault();
            var newColor = this.props.getColor();
            this.setState({realColor: newColor});
            this.setState({color: newColor});
            this.props.updatePixel({
              x: this.props.x,
              y: this.props.y,
              newColor: newColor
            });
          }
        }
        onMouseEnter = {
          this.props.completed ?
          null
          :
          (e) => {
            e.preventDefault();
            var newColor = this.props.getColor();
            this.setState({realColor: this.state.color});
            this.setState({color: newColor});
          }
        }
        onMouseLeave = {
          this.props.completed ?
          null
          :
          (e) => {
            e.preventDefault();
            if(this.state.realColor){
                this.setState({color: this.state.realColor});
            }
          }
        }
      >
      </div>
    );
  }
}
