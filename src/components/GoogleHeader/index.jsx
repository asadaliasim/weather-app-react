import React from 'react';
import './style.css';
import hamburger from './hamburger.png';
import profile from './profile.jpg';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';

function GoogleHeader() {
  return (
    <>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `${isActive ? 'active' : 'menu'}`;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cards" className="menu">
                Cards
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <div className="section-two">
            <div className="text">
              <span>
                <a href="https:gmail.com">Gmail</a>
              </span>
              <span className="image-text">
                <a href="/">Images</a>
              </span>
            </div>
            <div className="images">
              {' '}
              <svg height="24px" viewBox="0 -960 960 960" width="24px">
                <path
                  d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"
                  style={{ fill: '#5f6368' }}
                ></path>{' '}
              </svg>
              <img
                className="hamburger"
                height="24px"
                width="24px"
                src={hamburger}
                alt="Hamburger"
              />
              <Avatar size="sm" name="profile" src={profile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleHeader;
