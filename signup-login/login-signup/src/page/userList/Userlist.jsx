import './userlist.css'
// import Admin from '../../Assets/admin.jpg';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRows } from '../../dummydata'
import admin from '../../Components/Assets/admin.jpg'

export default function Userlist() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'Admin', headerName: 'Admin', width: 200, renderCell: (params) => {
        return (
          <div className='adminlistadmin'>
            <img src={admin} alt="" className='adminlistimg' />
            {params.row.Username}
          </div>
        )
      }
    },


    { field: 'email', headerName: 'Email', width: 230 },
  
    {
      field: 'phone',
      headerName: 'Contact Number',
      width: 200,
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/Admin/' + params.row.id}>
              <button className='adminlistedit'>Edit</button>
            </Link>
            <div className='adminlistdelete' onClick={() => handleDelete(params.row.id)}><DeleteOutlineIcon /></div>
          </>
        )
      }
    },
  ];

  const rows = [
    { id: 1, Username: 'Zainab Hafeez', Avatar: 'admin', email: 'zainab@gmail.com', phone: '+92 3496883040', status: 'active' },
    { id: 2, Username: 'Zainab Hafeez', Avatar: 'https://logodix.com/logo/1707097.png', email: 'zainab@gmail.com', phone: '+92 3496883040', status: 'active' },
    { id: 3, Username: 'Zainab Hafeez', Avatar: 'https://logodix.com/logo/1707097.png', email: 'zainab@gmail.com',  phone: '+92 3496883040', status: 'active' },
    { id: 4, Username: 'Zainab Hafeez', Avatar: 'https://logodix.com/logo/1707097.png', email: 'zainab@gmail.com', phone: '+92 3496883040', status: 'active' },
    { id: 5, Username: 'Zainab Hafeez', Avatar: 'https://logodix.com/logo/1707097.png', email: 'zainab@gmail.com',  phone: '+92 3496883040', status: 'active' },

  ];
  return (
    <div>
      <div className="adminlist">
        <div className="admintitlecontainer">
          <h1 className='admintitle'>Admin</h1>
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
          className='tablefont' />
      </div>
    </div>
  )
}
