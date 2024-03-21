import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {
   
      
  return (
    <div className="chart">
     <h3 className="charttitle">{title}</h3>
     <ResponsiveContainer width='100%' aspect={4/1} >
<LineChart data={data}>
<XAxis dataKey='name' stroke="#4A8963"></XAxis>
<Line type='monotone' dataKey={dataKey} stroke="#4A8963"></Line>
<Tooltip></Tooltip>
{grid && <CartesianGrid strokeDasharray="5 5"></CartesianGrid>}
</LineChart>
     </ResponsiveContainer>
    </div>
  )
}

