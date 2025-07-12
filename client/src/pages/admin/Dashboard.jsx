import React from 'react'
import { Card,CardHeader,CardTitle } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4'>
        <Card>
            <CardHeader>
                <CardTitle>
                    Total Sales
                </CardTitle>
            </CardHeader>
        </Card>
    </div>
  )
}

export default Dashboard