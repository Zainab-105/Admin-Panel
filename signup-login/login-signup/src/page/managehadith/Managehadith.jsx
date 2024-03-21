import React from 'react'
import './managehadith.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRows } from '../../dummydata';

export default function Managehadith() {
    const [data, setData] = useState(userRows);
    
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 90 },
        { field: 'content', headerName: 'Hadith', width: 150, renderCell: (params) => {
          return (
            <div className='hadithlistcontnt'>
              {params.row.content}
            </div>
          )
        } },
        { field: 'translation', headerName: 'Translation', width: 150, renderCell: (params) => {
          return (
            <div className='hadithlisttrans'>
              {params.row.translation}
            </div>
          )
        } },
        { field: 'narrator', headerName: 'Narrators', width: 90 },
        { field: 'source', headerName: 'Source', width: 90 },
        { field: 'category', headerName: 'Category', width: 90 },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/hadithlist/' + params.row.id}>
                            <button className='adminlistedit'>Edit</button>
                        </Link>
                        <div className='adminlistdelete' onClick={() => handleDelete(params.row.id)}>
                            <DeleteOutlineIcon />
                        </div>
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
    <div className='managehadith'>
           <div className="hadithtitlecontainer">
          <h1 className='admintitle'>Manage Hadiths</h1>
          <Link to='/newAdmin'>
            <button className='adminaddbutton'>Create</button>
          </Link>

        </div>
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
  )
}
