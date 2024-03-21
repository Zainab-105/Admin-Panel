import React from 'react'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import Chart from '../../Components/chart/Chart'
import { userData } from '../../dummydata'
import './index.css'
import Widgetsm from '../../Components/widgetSm/Widgetsm'
import Widgetlg from '../../Components/widgetLg/Widgetlg'
const Index = () => {
  return (
    <div>
     <FeaturedInfo/>
     <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
    
     {/* <div className="homeWidgets">
<Widgetsm/>
<Widgetlg/>
     </div> */}
    </div>
  )
}

export default Index
