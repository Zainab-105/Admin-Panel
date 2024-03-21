import './msg.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRows } from '../../dummydata'
import admin from '../../Components/Assets/admin.jpg'

export default function Messages() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username', headerName: 'User', width:150, renderCell: (params) => {
        return (
          <div className='adminlistadmin'>
            <img src={admin} alt="" className='adminlistimg' />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'message', headerName: 'messages', width: 500, renderCell: (params) => {
        return (
          <div className='adminlistadmin'>
            {params.row.message}
          </div>
        )
      }
    },
   



    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/Admin/' + params.row.id}>
              <button className='adminlistedit'>View</button>
            </Link>
            <div className='adminlistdelete' onClick={() => handleDelete(params.row.id)}><DeleteOutlineIcon /></div>
          </>
        )
      }
    },
  ];

  const rows = [
    { id: 1, username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
    { id: 2, username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
    { id: 3,username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
    { id: 4,username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
    { id: 5,username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
    { id: 6,username:'Zainab',message:'Hey Admin! I have used your website. Its very helpful for me . it helped me for Authentication of Hadiths. ' },
  ];
  return (
    <div>
      <div className="adminlist">
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
          className='tablefont' />
      </div>
    </div>
  )
}
