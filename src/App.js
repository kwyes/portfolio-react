import React, {Component, useState, useEffect} from 'react';
import { BsHouseDoorFill,BsFillHeartFill,BsFillPersonFill,BsThreeDots } from 'react-icons/bs';
import { RiFileSearchFill } from 'react-icons/ri';
import { AiFillCamera } from 'react-icons/ai';

import './App.scss';
import "98.css";


export default class App extends React.Component {
  state = {
    date: ""
  };
 
  componentDidMount() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 30000);

  }

  getTime = () => {
    let time = new Date();    
    this.setState({
      date: time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })
    });
  };
  

  render() {
    return (
      <div id="desktop">
    <div className="desktop-icons">
      <div className="desktop-icon my-computer" title="My Computer">
        My Computer
      </div>
      <div className="desktop-icon my-documents" title="My Documents">
        My Documents
      </div>
      <div className="desktop-icon network" title="Network Neighborhood">
        Network
      </div>
      <div className="desktop-icon trash-empty" title="Recycle Bin">
        Recycle Bin
      </div>
    </div>

    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Portfolio.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="title-semi-menu">
        <span className="title-text">
          <span className="title-text-underline">
            F
          </span>
          ile
        </span>
        <span className="title-text">
        <span className="title-text-underline">
          E
        </span>
          dit
        </span>
        <span className="title-text">
        <span className="title-text-underline">
        V
        </span>

          iew
        </span>
        <span className="title-text">
        <span className="title-text-underline">
          O
        </span>
         ptions
        </span>
        <span className="title-text">
        <span className="title-text-underline">
          H
          </span>
          elp
        </span>

        <div className="btn-container">
          <div class='item'><button>Back</button></div>
          <div class='item highlight-text'>Projects</div>
          <div class='item'><button>Reload</button></div>
        </div>
      </div>
      <div className="window-body">
        <div className='card'>
          <div className='card-header'>
            <div className='card-icon'><BsFillHeartFill/></div>
            <div className='card-name'>chanolee</div>
            <div className='card-btn'><button><BsThreeDots/></button></div>
          </div>
          <div className='card-body'></div>
          <div className='card-footer'></div>
        </div>
        
      </div>

      <div class="status-bar">
        <button><BsHouseDoorFill /></button>
        <button><RiFileSearchFill /></button>
        <button><AiFillCamera/></button>
        <button><BsFillHeartFill/></button>
        <button><BsFillPersonFill/></button>
      </div>
    </div>

    
    <div id="toolbar">
      <div className="toolbar-start-menu">
        <button className="start-button">
          Start
        </button>
        <div className="start-menu-wrapper">
          <div className="start-menu-title">
            <span><strong>Windows</strong>98</span>
          </div>
          <div className="start-menu">
            {/* <button className="start-menu-link">
              Shut down
            </button> */}
          </div>
        </div>
      </div>
      <div className="toolbar-separator" />
      <div className="toolbar-left">
        <button className="toolbar-icon ie" />
        <button className="toolbar-icon outlook" />
        <button className="toolbar-icon desktop" />
        <button className="toolbar-icon channels" />
      </div>
      <div className="toolbar-separator" />
      <div className="toolbar-right">
        <div className="time">{this.state.date}</div>
      </div>
    </div>
  </div>
    );
  }
};


