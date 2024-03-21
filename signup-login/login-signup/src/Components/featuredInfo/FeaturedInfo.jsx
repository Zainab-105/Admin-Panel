import './featuredInfo.css'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EmailIcon from '@mui/icons-material/Email';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Link } from 'react-router-dom';
const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featureditem">
            <span className="featuresub">Can Manage Account</span>
                <div className='featuredcontainer'>
                    <Link to='/Admin' className='link'>
                    <span className='featuredadminrate'><SupervisorAccountIcon /></span>
                <span className="featuredtitle">Admin</span>
                </Link>
                </div>
                <span className="featuredadmin">3</span>
            </div>
            <div className="featureditem">
            <span className="featuresub">Teachings of PBUH</span>
                <div className='featuredcontainer'>
                    <Link to='/hadithlist' className='link'>
                <span className='featuredadminrate'><TableRowsIcon /></span>
                <span className="featuredtitle">Hadith</span>
                </Link>
                </div>
                <span className="featuredadmin">800</span>
            </div>
            <div className="featureditem">
            <span className="featuresub">5 Unread Messages</span>
                <div className='featuredcontainer'>
                    <Link to='/messages' className='link'>
                <span className='featuredadminrate'><EmailIcon /></span>
                <span className="featuredtitle">Messages</span>
                </Link>
                </div>
                <span className="featuredadmin">50</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
