import React from 'react'
import './addhadith.css'
export default function Addhadith() {
  return (
    <div className='newhadith'>
        
    <div className="hadithtitel">Add New Hadith</div>
    <form method='post' className="newadminform">
        <div className="newadminitem">
            <label >Title</label>
            <input type="text" placeholder='Title' />
        </div>
        <div className="newadminitem">
            <label >Hadith</label>
            <input type="text" placeholder='Hadith' />
        </div>
        <div className="newadminitem">
            <label >Translation</label>
            <input type="text" placeholder='Translation' />
        </div>
        <div className="newadminitem">
            <label >Narrators</label>
            <input type="text" placeholder='Narrators' />
        </div>
        <div className="newadminitem">
            <label >Source</label>
            <input type="text" placeholder='Source' />
        </div>
        <div className="newadminitem">
            <label >Catagorey</label>
            <input type="text" placeholder='Catagore' />
        </div>
        <button className='newadminbutton'>Submit</button>
    </form>
    </div>
   
  )
}
