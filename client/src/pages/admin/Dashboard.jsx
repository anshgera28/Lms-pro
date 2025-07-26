import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import CourseTable from './course/CourseTable'

// Mock stats for demonstration
const stats = [
  { label: 'Total Courses', value: 8 },
  { label: 'Total Sales', value: 124 },
  { label: 'Total Students', value: 88 },
  { label: 'Total Revenue', value: '₹24,800' },
]

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-gradient-to-br from-indigo-100 to-indigo-300 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-indigo-900">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-indigo-800">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Courses Table */}
      <div>
        <CourseTable />
      </div>
    </div>
  )
}

export default Dashboard