// Hadithlist.jsx

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './hadithlist.css';
import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom';


export default function Hadithlist() {
 
    
   

    const columns = [
        { field: 'id', headerName: 'ID', },
        { field: 'title', headerName: 'Title',},
        { field: 'content', headerName: 'Hadith', renderCell: (params) => {
          return (
            <div className='hadithlistcontnt'>
              {params.row.content}
            </div>
          )
        } },
        { field: 'translation', headerName: 'Translation',  renderCell: (params) => {
          return (
            <div className='hadithlisttrans'>
              {params.row.translation}
            </div>
          )
        } },
        { field: 'narrator', headerName: 'Narrators'},
        { field: 'source', headerName: 'Source' },
        { field: 'category', headerName: 'Category'},
        {
            field: 'action',
            headerName: 'Action',
           
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/hadithlist/' + params.row.id}>
                            <button className='adminlistedit'>View</button>
                        </Link>
                       
                    </>
                );
            },
        },
      
    ];

    const rows = [
        { id: 1, title: 'Prayers', content: 'حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ ', translation: 'None of you should offer prayer in a single garment that does not cover the shoulders.', narrator: 'Abu Huraira', source: 'Sahih Al-Bukhari', category: 'Sahih' },
        { id: 2, title: 'Prayers', content: 'حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ ', translation: 'None of you should offer prayer in a single garment that does not cover the shoulders.', narrator: 'Abu Huraira', source: 'Sahih Al-Bukhari', category: 'Sahih' },
        { id: 3, title: 'Prayers', content: 'حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ ', translation: 'None of you should offer prayer in a single garment that does not cover the shoulders.', narrator: 'Abu Huraira', source: 'Sahih Al-Bukhari', category: 'Sahih' },
        { id: 4, title: 'Prayers', content: 'حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ ', translation: 'None of you should offer prayer in a single garment that does not cover the shoulders.', narrator: 'Abu Huraira', source: 'Sahih Al-Bukhari', category: 'Sahih' },
        { id: 5, title: 'Prayers', content: 'حَدَّثَنَا أَبُو عَاصِمٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنْ عَبْدِ الرَّحْمَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم لاَ يُصَلِّي أَحَدُكُمْ فِي الثَّوْبِ الْوَاحِدِ، لَيْسَ عَلَى عَاتِقَيْهِ شَىْءٌ ', translation: 'None of you should offer prayer in a single garment that does not cover the shoulders.', narrator: 'Abu Huraira', source: 'Sahih Al-Bukhari', category: 'Sahih' },
    ];

    return (
        <div className='hadithlist'>
          <div className="searchcontainer">
            <input type="text" placeholder='Search' className='searchinput'/>
          <SearchIcon className='searchicon'/>
          </div>
            <div className="hadithlisttitle">Hadiths</div>
            <DataGrid
          rows={rows}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          className='tablefont MuiDataGrid-cell' />
        </div>
    );
}
