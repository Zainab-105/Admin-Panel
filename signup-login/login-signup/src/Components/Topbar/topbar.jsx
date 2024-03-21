import React from 'react'
import "./topbar.css";

import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import userIcon from '../Assets/user-icon.png';
import logo from '../Assets/logo.jpg';
function topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo"><img src={logo} alt="" />Ilm-Al Hadith</span>
        </div>
        <div className="topright">
          <div className="topbariconscontainer">
            <NotificationsIcon/>
            <span className="topiconbag">2</span>
          </div>
          <div className="topbariconscontainer">
            <LanguageIcon/>
          </div>
          <div className="topbariconscontainer">
            <SettingsIcon/>
          
          </div>
        <div className="topavatar"><img src={userIcon} alt="" /></div>
        </div>
      </div>

    </div>
  )
}

export default topbar
