import React from 'react'
import Chart from '../../Components/chart/Chart';
import { reportData } from '../../dummydata';
export default function Report() {
  return (
    <div>
      <div className="hadithtopleft">
      <Chart data={reportData} title='User Annual Report ' grid dataKey='users'/>
          </div>
    </div>
  )
}
