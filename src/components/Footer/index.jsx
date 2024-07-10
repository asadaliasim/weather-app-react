import React from 'react';
import './style.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="location">Pakistan</div>
        <div className="info-section">
          <div className="sub-section-one">
            <a href="/">About</a>
            <a href="/">Advertising</a>
            <a href="/">Business</a>
            <a href="/">How Serach Works</a>
          </div>

          <div className="sub-section-two">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
