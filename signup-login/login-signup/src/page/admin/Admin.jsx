import React from 'react'
import './admin.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PublishIcon from '@mui/icons-material/Publish';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import admin from '../../Components/Assets/admin.jpg'
import { Link } from 'react-router-dom';
export default function Admin() {
  return (
    <div className='admin'>
      <div className="admintitlecontainer">
          <h1 className='admintitle'>Edit Admin</h1>
          <Link to='/newAdmin'>
            <button className='adminaddbutton'>Create</button>
          </Link>

        </div>
    <div className="admincontainer">
        <div className="adminshow">
            <div className="adminshowtop">
                <img src={admin} alt="" className='adminshowimg' />
                <div className="adminshowtoptitle">
                    <span className="adminshowusername">Zainab Hafeez</span>
                </div>
            </div>
            <div className="adminshowbottom">
                <span className="adminshowtitle">Contact Details</span>
              <div className="adminshowinfo">
                <PhoneIcon className='adminshowicon'/>
                <span className="adminshowinfotitle">+92 3496883030</span>
              </div>
              <div className="adminshowinfo">
                <MailOutlineIcon className='adminshowicon'/>
                <span className="adminshowinfotitle">zainabhafeez@gmail.com</span>
              </div>
              <div className="adminshowinfo">
                < LockIcon className='adminshowicon'/>
                <span className="adminshowinfotitle">Pakistan2002.</span>
              </div>
              <div className="adminshowinfo">
                < LockIcon className='adminshowicon'/>
                <span className="adminshowinfotitle">Active</span>
              </div>
              <div className="adminshowinfo">
                <LocationOnIcon className='adminshowicon'/>
                <span className="adminshowinfotitle">Sargodha | Pakistan</span>
              </div>
            </div>
        </div>
        <div className="adminupdate">
            <span className="adminupdatetitle">Edit</span>
            <form method='post' className="adminupdateform">
<div className="adminupdateleft">
    <div className="adminupdateitem">
        <label >Username</label>
        <input type="text" placeholder='Zainab Hafeez' className='adminupdateinput'/>
    </div>
    <div className="adminupdateitem">
        <label >Email</label>
        <input type="email" placeholder='zainabhafeez@gmail.com' className='adminupdateinput' />
    </div>
    <div className="adminupdateitem">
            <label >Password</label>
            <input type="password" placeholder='Pakistan2002.' className='adminupdateinput' />
        </div>
    <div className="adminupdateitem">
        <label >Contact Number</label>
        <input type="text" placeholder='+92 3496883030' className='adminupdateinput' />
    </div>
    <div className="adminupdateitem">
        <label >Address</label>
        <input type="text" placeholder='Sargodha | Pakistan' className='adminupdateinput' />
    </div>
</div>
<div className="adminupdateright">
    <div className="adminupdateupload">
        <img src={admin} alt="" className='adminupdateimg'/>
        <label htmlFor="file"><PublishIcon/></label>
        <input type="file" className='file' id='file' style={{display: 'none'}} />
       
    </div>
    <button className='adminupdatebutton'>Update</button>
</div>
            </form>
        </div>
    </div>
    </div>
  )
}
