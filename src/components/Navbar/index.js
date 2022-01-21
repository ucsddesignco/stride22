import React from 'react'
import StrideLogo from '../../assets/images/stride-logo.svg';

import './style.css'

function Navbar() {
  return (
      <nav>
          <img src={StrideLogo} alt="Stride Logo"/>
          <ul>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/about">About</a>
              </li>
              <li>
                  <a href="/companies">Companies</a>
              </li>
              <li>
                  <a href="https://docs.google.com/presentation/d/159kEktP6bRSRWa0fG8Jxyl-CeiORcMJOUuwuvou8oZY/edit?usp=sharing" target="_blank">Prepping for Stride</a>
              </li>
              {/* <li>
                  <a href="/companies" id="contact-button">CONTACT US</a>
              </li> */}
          </ul>
      </nav>
    
  );
}

export default Navbar;
