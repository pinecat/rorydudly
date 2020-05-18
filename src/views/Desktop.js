import React, { Component } from 'react';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Desktop.css';
import me from '../res/me-crop-sq.png';
import cv from '../res/rdudley_resume.pdf';

class Desktop extends Component {
  render() {
    return (
      <div>
        { /* eslint-disable-next-line */ }
        <a name="home"/>
        <div class="parallax">
          <div class="navbar">
            Rory Dudley
            <a style={{ marginLeft: "20px" }} href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <img class="me" alt="rory" src={me}></img>

          <div class="links">
            <a href="https://www.github.com/pinecat" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/rory-dudley" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a style={{ fontWeight: "bold" }} href={cv} rel="noopener noreferrer" target="_blank">CV</a>
          </div>

          <div class="content1"></div>
        </div>
        
      </div>
    );
  }
}

export default Desktop;