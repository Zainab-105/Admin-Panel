import "./widgetsm.css"
import Admin from '../Assets/admin.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">Newly added Admins</span>
      <ul className="swidgetsmalllist">
        <li className="widgetsmalllistitem">
            <img src={Admin} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetusername">Hania Sabir</span>
            </div>
            <button className="widgetsmbutton">
<VisibilityIcon className="widgetsmicon"/>
Display
            </button>
        </li>
        <li className="widgetsmalllistitem">
            <img src={Admin} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetusername">Zainab Hafeez</span>
            </div>
            <button className="widgetsmbutton">
<VisibilityIcon className="widgetsmicon"/>
Display
            </button>
        </li>
        <li className="widgetsmalllistitem">
            <img src={Admin} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetusername">Hira Khizar</span>
            </div>
            <button className="widgetsmbutton">
<VisibilityIcon className="widgetsmicon"/>
Display
            </button>
        </li>
      </ul>
    </div>
  )
}
