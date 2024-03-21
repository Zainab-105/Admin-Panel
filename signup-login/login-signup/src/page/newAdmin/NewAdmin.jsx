import React from 'react'
import './newadmin.css'

export default function NewAdmin() {
  return (
    <div className='newAdmin'>
    <h1 className="newusertitle">New Admin</h1>
    <form method='post' className="newadminform">
        <div className="newadminitem">
            <label >Username</label>
            <input type="text" placeholder='Name' />
        </div>
        <div className="newadminitem">
            <label >Email</label>
            <input type="email" placeholder='Email' />
        </div>
        <div className="newadminitem">
            <label >Password</label>
            <input type="password" placeholder='Password' />
        </div>
        <div className="newadminitem">
            <label >Phone</label>
            <input type="text" placeholder='Contact Number' />
        </div>
        <div className="newadminitem">
            <label >Address</label>
            <input type="text" placeholder='Adress' />
        </div>
        <div className="newadminitem">
            <label >Image</label>
            <input type="file" placeholder='file' />
        </div>
        <div className="newadminitem">
            <label >Active</label>
            <select name="status" id="active" className='newAdminSelect'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className='newadminbutton'>Submit</button>
    </form>
    </div>
  )
}
