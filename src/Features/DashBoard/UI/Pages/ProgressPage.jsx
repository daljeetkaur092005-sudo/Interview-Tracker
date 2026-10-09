import React, { useContext } from 'react'
import { MyStore } from '../../State/useContext'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
const ProgressPage = () => {
    const {formdata} = useContext(MyStore)
const chartData = [
  {
    category: "DSA",
    count: formdata.filter((val) => val.category === "DSA").length
  },
  {
    category: "Git",
    count: formdata.filter((val) => val.category === "Git").length
  },
  {
    category: "Technical",
    count: formdata.filter((val) => val.category === "Technical").length
  }
]
  return (
    
<div className="bg-[#101318]">
      <div className="bg-[#101318] border border-[#252A31]  p-6 mb-8">
      <div className="mb-5">
        <p className="text-[#C9B458] text-sm font-medium">
          OVERVIEW
        </p>
    
        <h2 className="text-xl font-semibold mt-1 text-[#C9B458]">
          Questions by Category
        </h2>
    
        <p className="text-[#777E88] text-sm mt-1">
          See how your questions are distributed.
        </p>
      </div>
    
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#252A31"
          />
    
          <XAxis
            dataKey="category"
            tick={{ fill: "#9CA2AB" }}
            axisLine={{ stroke: "#252A31" }}
            tickLine={false}
          />
    
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#9CA2AB" }}
            axisLine={{ stroke: "#252A31" }}
            tickLine={false}
          />
    
          <Tooltip
            contentStyle={{
              backgroundColor: "#161A20",
              border: "1px solid #C9B458",
              borderRadius: "12px",
              color: "#fff"
            }}
          />
    
          <Bar
            dataKey="count"
            fill="#C9B458"
            radius={[8, 8, 0, 0]}
            barSize={55}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
</div>
  )
}

export default ProgressPage