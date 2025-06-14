
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, Thermometer, Droplets, Wind, Sun, CloudSnow } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  forecast: string;
}

interface WeatherWidgetProps {
  data: WeatherData | null;
  location: string;
}

const WeatherWidget = ({ data, location }: WeatherWidgetProps) => {
  if (!data) {
    return (
      <Card>
        <CardContent className="p-6">
          <p>Loading weather data...</p>
        </CardContent>
      </Card>
    );
  }

  const weeklyForecast = [
    { day: 'Today', temp: 28, condition: 'Partly Cloudy', icon: CloudRain },
    { day: 'Tomorrow', temp: 30, condition: 'Sunny', icon: Sun },
    { day: 'Wed', temp: 26, condition: 'Rainy', icon: CloudRain },
    { day: 'Thu', temp: 29, condition: 'Sunny', icon: Sun },
    { day: 'Fri', temp: 27, condition: 'Cloudy', icon: CloudSnow },
    { day: 'Sat', temp: 31, condition: 'Sunny', icon: Sun },
    { day: 'Sun', temp: 28, condition: 'Partly Cloudy', icon: CloudRain }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Temperature</p>
                <p className="text-3xl font-bold">{data.temperature}°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100">Humidity</p>
                <p className="text-3xl font-bold">{data.humidity}%</p>
              </div>
              <Droplets className="h-8 w-8 text-cyan-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Rainfall</p>
                <p className="text-3xl font-bold">{data.rainfall}mm</p>
              </div>
              <CloudRain className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-500 to-gray-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-100">Wind Speed</p>
                <p className="text-3xl font-bold">{data.windSpeed} km/h</p>
              </div>
              <Wind className="h-8 w-8 text-gray-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>7-Day Forecast for {location}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {weeklyForecast.map((day, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">{day.day}</p>
                <day.icon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{day.temp}°</p>
                <p className="text-xs text-gray-600 mt-1">{day.condition}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-blue-800">Agricultural Weather Advisory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Current Conditions</h4>
              <p className="text-gray-700">{data.forecast}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Farming Recommendations</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Good conditions for irrigation in the morning</li>
                <li>• Avoid pesticide spraying during afternoon heat</li>
                <li>• Consider covering sensitive crops if rain expected</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherWidget;
