
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MarketPriceChart from "@/components/MarketPriceChart";
import WeatherWidget from "@/components/WeatherWidget";
import CropRecommendation from "@/components/CropRecommendation";
import CommunityForum from "@/components/CommunityForum";
import ProblemSolver from "@/components/ProblemSolver";
import { Leaf, TrendingUp, CloudRain, Users, MessageCircle, BarChart3, Sprout, AlertTriangle } from 'lucide-react';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState('Maharashtra');
  const [marketData, setMarketData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  // Mock market data
  useEffect(() => {
    const mockMarketData = [
      { crop: 'Wheat', price: 2150, change: +5.2, demand: 'High', unit: '₹/quintal' },
      { crop: 'Rice', price: 1890, change: -2.1, demand: 'Medium', unit: '₹/quintal' },
      { crop: 'Cotton', price: 5800, change: +8.7, demand: 'High', unit: '₹/quintal' },
      { crop: 'Sugarcane', price: 320, change: +1.5, demand: 'Medium', unit: '₹/quintal' },
      { crop: 'Tomato', price: 2500, change: -15.2, demand: 'Low', unit: '₹/quintal' },
      { crop: 'Onion', price: 1200, change: +25.8, demand: 'Very High', unit: '₹/quintal' }
    ];
    setMarketData(mockMarketData);

    // Mock weather data
    setWeatherData({
      temperature: 28,
      humidity: 65,
      rainfall: 12,
      windSpeed: 15,
      forecast: 'Partly cloudy with light rain expected'
    });
  }, [selectedLocation]);

  const quickStats = [
    { title: 'Active Markets', value: '156', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Crop Varieties', value: '89', icon: Sprout, color: 'text-blue-600' },
    { title: 'Farmers Connected', value: '12.5K', icon: Users, color: 'text-amber-600' },
    { title: 'Issues Resolved', value: '3.2K', icon: MessageCircle, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FarmConnect</h1>
                <p className="text-sm text-gray-600">Sustainable Agriculture Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Select your location..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-48"
              />
              <Avatar>
                <AvatarFallback className="bg-green-100 text-green-600">
                  FM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="market" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="market" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Market Prices</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center space-x-2">
              <CloudRain className="h-4 w-4" />
              <span>Weather</span>
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center space-x-2">
              <Sprout className="h-4 w-4" />
              <span>Crop Advisor</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Community</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>AI Support</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <MarketPriceChart data={marketData} />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    <span>Live Market Prices</span>
                  </CardTitle>
                  <CardDescription>Current rates in {selectedLocation}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {marketData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.crop}</p>
                        <p className="text-sm text-gray-600">{item.price} {item.unit}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={item.change > 0 ? "default" : "destructive"} className="mb-1">
                          {item.change > 0 ? '+' : ''}{item.change}%
                        </Badge>
                        <p className="text-xs text-gray-600">{item.demand} Demand</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="weather">
            <WeatherWidget data={weatherData} location={selectedLocation} />
          </TabsContent>

          <TabsContent value="recommendations">
            <CropRecommendation location={selectedLocation} />
          </TabsContent>

          <TabsContent value="community">
            <CommunityForum />
          </TabsContent>

          <TabsContent value="support">
            <ProblemSolver />
          </TabsContent>
        </Tabs>

        {/* Alerts Section */}
        <Card className="mt-8 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              <span>Important Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <p className="font-medium text-amber-800">Weather Alert</p>
                <p className="text-sm text-amber-700">Heavy rainfall expected in the next 48 hours. Consider covering crops.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <p className="font-medium text-amber-800">Market Update</p>
                <p className="text-sm text-amber-700">Onion prices surged 25% due to supply shortage. Good time to sell.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
