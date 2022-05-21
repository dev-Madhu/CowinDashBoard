// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {sevenDaysData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="bar-container">
      <h1 className="bar-title">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={sevenDaysData}
          margin={{
            top: 5,
          }}
          width={900}
          height={400}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            fill="#5a8dee"
            radius={[10, 10, 0, 0]}
            barSize="20%"
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            fill=" #f54394"
            radius={[10, 10, 0, 0]}
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
