import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar__content">
        <span className="topbar__text">
          <b>SwiftShip Pro is now live redefining speed, reliability,</b> and global reach in shipping logistics.
        </span>
        <button className="topbar__button"><b>Try It Out!</b></button>
      </div>
    </div>
  );
};

export default TopBar;
