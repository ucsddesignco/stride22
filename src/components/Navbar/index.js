import React from 'react'
import StrideLogo from '../../assets/images/stride-logo.svg';
import { NavLink } from 'react-router-dom';

import './style.css'

function Navbar() {
  return (
      <nav>
          <NavLink to ="/"><img src={StrideLogo} alt="Stride Logo"/></NavLink>
          <ul>
              <li>
                <NavLink to="/" >
                    <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" >
                    <p>About</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/companies" >
                    <p>Companies</p>
                </NavLink>
              </li>
              <li>
                  <a href="https://docs.google.com/presentation/d/159kEktP6bRSRWa0fG8Jxyl-CeiORcMJOUuwuvou8oZY/edit?usp=sharing" target="_blank">Prepping for Stride</a>
              </li>
              <li>
                  <a href="https://forms.gle/d93Fwtk5bCEfZdcp9" id="contact-button" target="_blank">REGISTER</a>
              </li>
          </ul>
      </nav>
    
  );
}

export default Navbar;
