import React from 'react'
import './edithadith.css'
import Chart from '../../Components/chart/Chart';
import { Link } from 'react-router-dom';
import { hadithData } from '../../dummydata';


export default function Edithadith() {
  return (
    <div>
      <div className='hadith'>
        <div className="hadithtitlecontainer">
          <h1 className='hadithtitle'>Edit Hadith</h1>
          <Link to='/newhadith'>
            <button className='hadithaddbutton'>Create</button>
          </Link>

        </div>
       
        <div className="hadithcontainer">
          <div className="hadithshow">
            <div className="hadithshowbottom">
              <span className="hadithshowtitle">Hadith Details</span>
              <div className="hadithshowinfo">
                <div className='hadithinfotitle'>Title</div>
                <div className="hadithshowinfotitle">Prayers</div>
              </div>
              <div className="hadithshowinfo">
                <label className='hadithinfotitle' >Hadith</label>
                <div className="hadithshowinfotitle hadithshowinfotitlefont">حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ </div>
              </div>
              <div className="hadithshowinfo">
                <label className='hadithinfotitle'>Translation</label>
                <div className="hadithshowinfotitle">None of you should offer prayer in a single garment that does not cover the shoulders.</div>
              </div>
              <div className="hadithshowinfo">
                <label className='hadithinfotitle'>Narrators</label>
                <div className="hadithshowinfotitle">Abu Huraira</div>
              </div>
              <div className="hadithshowinfo">
                <label className='hadithinfotitle'>Source</label>
                <div className="hadithshowinfotitle">Sahih Al-Bukhari</div>
              </div>
              <div className="hadithshowinfo">
                <label className='hadithinfotitle'>Catagorey</label>
                <div className="hadithshowinfotitle">Sahih</div>
              </div>
            </div>
          </div>
          <div className="hadithupdate">
            <span className="hadithupdatetitle">Edit</span>
            <form method='post' className="hadithupdateform">
              <div className="hadithupdateleft">
                <div className="hadithupdateitem">
                  <label >Title</label>
                  <input type="text" placeholder='Prayers' className='hadithupdateinput' />
                </div>
                <div className="hadithupdateitem">
                  <label >Hadith</label>
                  <input type="email" placeholder='Hadith' className='hadithupdateinput hadithshowinfotitlefont' />
                </div>
                <div className="hadithupdateitem">
                  <label >Translation</label>
                  <input type="password" placeholder='None of you should offer prayer in a single garment that does not cover the shoulders.' className='hadithupdateinput' />
                </div>
                <div className="hadithupdateitem">
                  <label >Narrators</label>
                  <input type="text" placeholder='Abu Hurair' className='hadithupdateinput' />
                </div>
                <div className="hadithupdateitem">
                  <label >Source</label>
                  <input type="text" placeholder='Sahih Al-Bukhari' className='hadithupdateinput' />
                </div>
                <div className="hadithupdateitem">
                  <label >Catagorey</label>
                  <input type="text" placeholder='Sahih' className='hadithupdateinput' />
                </div>
                <button className='hadithupdatebutton'>Update</button>
              </div>

            </form>
          </div>
        </div>
        <div className="hadithtop">
          <Chart data={hadithData } dataKey='Ratings' grid title='Hadith Ratings' /> 
        </div>
      </div>
    </div>
  )
}
