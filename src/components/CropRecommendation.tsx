
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sprout, Calendar, MapPin, Beaker } from 'lucide-react';

interface CropRecommendationProps {
  location: string;
}

const CropRecommendation = ({ location }: CropRecommendationProps) => {
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleGetRecommendations = () => {
    // Mock AI-based recommendations
    const mockRecommendations = [
      {
        crop: 'Wheat',
        suitability: 95,
        expectedYield: '45-50 quintals/hectare',
        marketPrice: '₹2,150/quintal',
        profitability: 'High',
        season: 'Rabi',
        duration: '120-150 days',
        waterRequirement: 'Medium',
        tips: ['Use certified seeds', 'Apply balanced fertilizer', 'Monitor for aphid attacks']
      },
      {
        crop: 'Cotton',
        suitability: 88,
        expectedYield: '18-22 quintals/hectare',
        marketPrice: '₹5,800/quintal',
        profitability: 'Very High',
        season: 'Kharif',
        duration: '180-200 days',
        waterRequirement: 'High',
        tips: ['Ensure proper drainage', 'Use pink bollworm resistant varieties', 'Regular pest monitoring']
      },
      {
        crop: 'Sugarcane',
        suitability: 82,
        expectedYield: '80-100 tonnes/hectare',
        marketPrice: '₹320/quintal',
        profitability: 'Medium',
        season: 'Annual',
        duration: '10-12 months',
        waterRequirement: 'Very High',
        tips: ['Plant in rows', 'Apply organic manure', 'Ensure adequate irrigation']
      }
    ];

    setRecommendations(mockRecommendations);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sprout className="h-5 w-5 text-green-600" />
            <span>Crop Recommendation Engine</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={location} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="soil-type">Soil Type</Label>
              <Select value={soilType} onValueChange={setSoilType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black Soil</SelectItem>
                  <SelectItem value="red">Red Soil</SelectItem>
                  <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                  <SelectItem value="clay">Clay Soil</SelectItem>
                  <SelectItem value="sandy">Sandy Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="season">Season</Label>
              <Select value={season} onValueChange={setSeason}>
                <SelectTrigger>
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                  <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                  <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="farm-size">Farm Size (acres)</Label>
              <Input
                id="farm-size"
                type="number"
                placeholder="Enter farm size"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleGetRecommendations} className="w-full bg-green-600 hover:bg-green-700">
            Get AI Recommendations
          </Button>
        </CardContent>
      </Card>

      {recommendations.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-green-700">{rec.crop}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {rec.suitability}% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600">{rec.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-600">{rec.season}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Expected Yield</p>
                    <p className="text-sm text-gray-600">{rec.expectedYield}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Market Price</p>
                    <p className="text-sm text-gray-600">{rec.marketPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Profitability</p>
                    <Badge variant={rec.profitability === 'Very High' ? 'default' : rec.profitability === 'High' ? 'secondary' : 'outline'}>
                      {rec.profitability}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Key Tips</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {rec.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>• {tip}</li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  View Detailed Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
