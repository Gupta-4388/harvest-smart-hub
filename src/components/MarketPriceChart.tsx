
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface MarketData {
  crop: string;
  price: number;
  change: number;
  demand: string;
  unit: string;
}

interface MarketPriceChartProps {
  data: MarketData[];
}

const MarketPriceChart = ({ data }: MarketPriceChartProps) => {
  // Mock historical data for trend chart
  const trendData = [
    { month: 'Jan', wheat: 2000, rice: 1800, cotton: 5200 },
    { month: 'Feb', wheat: 2050, rice: 1850, cotton: 5400 },
    { month: 'Mar', wheat: 2100, rice: 1900, cotton: 5600 },
    { month: 'Apr', wheat: 2080, rice: 1880, cotton: 5500 },
    { month: 'May', wheat: 2120, rice: 1920, cotton: 5700 },
    { month: 'Jun', wheat: 2150, rice: 1890, cotton: 5800 }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Price Trends (Last 6 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, 'Price per quintal']} />
              <Line type="monotone" dataKey="wheat" stroke="#16a34a" strokeWidth={2} name="Wheat" />
              <Line type="monotone" dataKey="rice" stroke="#0ea5e9" strokeWidth={2} name="Rice" />
              <Line type="monotone" dataKey="cotton" stroke="#a3681f" strokeWidth={2} name="Cotton" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Market Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="crop" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, 'Current Price']} />
              <Bar dataKey="price" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketPriceChart;
