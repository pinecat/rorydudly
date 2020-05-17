import React, { Component } from 'react';
import './Desktop.css';
import me from './me-crop-sq.png';

class Desktop extends Component {
  render() {
    return (
      <div>
        <a name="home"></a>
        <div class="parallax">
          <img class="me" src={me}></img>
          <div class="navbar">
            Rory Dudley
            <a style={{ marginLeft: "20px" }} href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#education">Education</a>
          </div>
        </div>
        <div class="content1"></div>
      </div>
    );
  }
}

const style = {
  height: 1000,
  backgroundColor: "#ffffff",
  fontSize: 36,
  position: "absolute"
}

export default Desktop;