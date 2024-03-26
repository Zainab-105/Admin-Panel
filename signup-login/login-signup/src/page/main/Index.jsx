import React from 'react'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import Chart from '../../Components/chart/Chart'
import { userData } from '../../dummydata'
import './index.css'
const Index = () => {
  return (
    <div>
     <FeaturedInfo/>
     <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
    
    
    </div>
  )
}

export default Index
