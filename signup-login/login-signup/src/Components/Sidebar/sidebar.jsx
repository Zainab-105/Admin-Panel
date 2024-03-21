import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddCardIcon from '@mui/icons-material/AddCard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EmailIcon from '@mui/icons-material/Email';
import AssessmentIcon from '@mui/icons-material/Assessment';
export default function sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">Dashboard</h3>
                        <ul className="sidebarlist">
                            <Link to='/' className='link'>
                            <li className="sidebarlistitem active">
                                <LineStyleIcon className='sidebaricon' /> Home
                            </li>
                            </Link>
                            <Link className='link' to='/recent'>
                            <li className="sidebarlistitem">
                                <AccessTimeIcon  className='sidebaricon'/>Recently Searched
                            </li>
                            </Link >
                            <Link to='/Admin' className='link'>
                            <li className="sidebarlistitem">
                                <SupervisorAccountIcon className='sidebaricon' /> Admin
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">Quick Access</h3>
                        <ul className="sidebarlist">
                           <Link className='link' to='/hadithlist'>
                            <li className="sidebarlistitem">
                                <TableRowsIcon className='sidebaricon' /> Hadith
                            </li>
                            </Link>
                            <Link className='link' to='/newhadith'>
                            <li className="sidebarlistitem">
                                <AddCardIcon className='sidebaricon' /> Add Hadith
                            </li>
                            </Link>
                            <Link className='link' to='managehadith'>
                            <li className="sidebarlistitem">
                                <EditNoteIcon className='sidebaricon' /> Manage  Hadith
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">Notifications</h3>
                        <ul className="sidebarlist">
                        <Link className='link' to='/feedback'>
                            <li className="sidebarlistitem">
                                <FeedbackIcon className='sidebaricon' /> Feedback
                            </li>
                            </Link>
                            <Link className='link'  to='/messages'>
                            <li className="sidebarlistitem">
                                <EmailIcon className='sidebaricon' /> Messages
                            </li>
                            </Link>
                            <Link to='/report' className='link'>
                            <li className="sidebarlistitem">
                                <AssessmentIcon className='sidebaricon' /> Report
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
