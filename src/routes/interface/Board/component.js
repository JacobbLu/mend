import React, { Component } from 'react';
import Pixel from '../Pixel';
import {Motion, spring, presets} from 'react-motion';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: this.props.length,
      width: window.innerWidth >= 600 ? 350 : window.innerWidth * 0.8,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getPixels = this.getPixels.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  updateDimensions() {
    console.log('here');
    this.setState({width: window.innerWidth >= 600 ? 350 : window.innerWidth * 0.8});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  getPixels(){
    var pixels = [];
    for(var i = 0; i < this.state.length; i++) {
      for(var j = 0; j < this.state.length; j++) {
        var className = 'pixel' + i.toString() + '-' + j.toString()
        pixels.push(
          <Pixel
            x={j}
            y={i}
            color={this.props.board[i][j]}
            className = {className}
            key = {className}
            count={this.state.length}
            getColor={this.getColor}
            completed={this.props.completed}
          />
        );
      }
    }
    return pixels;
  }

  getColor(){
    return this.props.getColor();
  }

  handleChangeComplete(newColor){
    this.setState({color: newColor.hex});
  }

  render() {
    if(this.props.firstRender){
      return (
        <div
          className = "pixel-board"
          style = {{
              boxShadow: "0px 0px 30px rgba(200, 200, 200, 0.8)",
              width: this.state.width,
              height: this.state.width,
              margin: "0 auto",
              marginTop: "20px",
              borderStyle: 'solid',
              borderWidth: '0px',
          }}
        >
          {this.getPixels()}
        </div>
      );
    }
    return (
      <div>
      {this.props.completed ?
        <Motion
          defaultStyle={{
            height: this.state.width,
            width: this.state.width,
          }}
          style={{
            height: spring(window.innerWidth <= 600 ? window.innerWidth * 0.13 : 70, presets.gentle),
            width: spring(window.innerWidth <= 600 ? window.innerWidth * 0.13 : 70, presets.gentle),
          }}
        >
          {interpolatingStyle =>
          <div
            className = "pixel-board"
            style = {{
                width: interpolatingStyle.width,
                height: interpolatingStyle.height,
                margin: "0 auto",
                marginTop: window.innerWidth < 600 ? 54 + 56 * ((window.innerWidth * 0.9) / 500) : 110
            }}
            onClick = {this.props.editBoard}
          >
            {this.getPixels()}
          </div>}
        </Motion>
        :
        <Motion
          defaultStyle={{
            height: window.innerWidth <= 600 ? window.innerWidth * 0.13 : 70,
            width: window.innerWidth <= 600 ? window.innerWidth * 0.13 : 70,
          }}
          style={{
            height: spring(this.state.width, presets.gentle),
            width: spring(this.state.width, presets.gentle),
          }}
        >
          {interpolatingStyle =>
          <div
            className = "pixel-board"
            style = {{
                boxShadow: "0px 0px 30px rgba(200, 200, 200, 0.8)",
                width: interpolatingStyle.width,
                height: interpolatingStyle.height,
                margin: "0 auto",
                marginTop: 20,
                borderStyle: 'solid',
                borderWidth: '0px',
            }}
          >
            {this.getPixels()}
          </div>}
        </Motion>
      }
    </div>
    );
  }

}


export default Board;
