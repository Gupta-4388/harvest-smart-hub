
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Bot, User, Send, BookOpen, AlertCircle } from 'lucide-react';

const ProblemSolver = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I am your AI Agricultural Assistant. I can help you with crop diseases, pest control, irrigation issues, fertilizer recommendations, and more. What problem are you facing today?'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const quickProblems = [
    'My crop leaves are turning yellow',
    'How to control aphids naturally?',
    'Best fertilizer for wheat crop',
    'Soil pH management tips',
    'Irrigation schedule for tomatoes',
    'Fungal disease identification'
  ];

  const commonSolutions = [
    {
      problem: 'Yellowing Leaves',
      cause: 'Nutrient deficiency or overwatering',
      solution: 'Check soil drainage and apply nitrogen fertilizer',
      category: 'Disease'
    },
    {
      problem: 'Low Crop Yield',
      cause: 'Poor soil health or inadequate fertilization',
      solution: 'Soil testing and balanced fertilizer application',
      category: 'Yield'
    },
    {
      problem: 'Pest Infestation',
      cause: 'Lack of integrated pest management',
      solution: 'Use neem-based pesticides and beneficial insects',
      category: 'Pest'
    }
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = { type: 'user', content: newMessage };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: `Based on your query "${newMessage}", here are my recommendations:

1. **Immediate Action**: If this is related to crop health, inspect your plants daily for early detection of issues.

2. **Preventive Measures**: Maintain proper crop rotation and soil health management.

3. **Expert Consultation**: For complex issues, consider consulting with local agricultural extension officers.

4. **Monitoring**: Keep track of weather conditions and adjust your farming practices accordingly.

Would you like more specific guidance on any of these points?`
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setNewMessage('');
  };

  const handleQuickProblem = (problem: string) => {
    setNewMessage(problem);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>AI Agricultural Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        {message.type === 'user' ? 
                          <User className="h-4 w-4 text-green-600" /> : 
                          <Bot className="h-4 w-4 text-blue-600" />
                        }
                      </div>
                      <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Describe your farming problem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Solutions Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Problem Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select problem type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="disease">Crop Disease</SelectItem>
                  <SelectItem value="pest">Pest Control</SelectItem>
                  <SelectItem value="irrigation">Irrigation Issues</SelectItem>
                  <SelectItem value="fertilizer">Fertilizer Problems</SelectItem>
                  <SelectItem value="weather">Weather Related</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickProblems.map((problem, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start text-xs"
                  onClick={() => handleQuickProblem(problem)}
                >
                  {problem}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>Knowledge Base</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {commonSolutions.map((solution, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{solution.problem}</h4>
                    <Badge variant="outline" className="text-xs">{solution.category}</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-1"><strong>Cause:</strong> {solution.cause}</p>
                  <p className="text-xs text-gray-600"><strong>Solution:</strong> {solution.solution}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Emergency Support */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800">
            <AlertCircle className="h-5 w-5" />
            <span>Emergency Agricultural Support</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 text-sm mb-4">
            For urgent agricultural emergencies, contact your local agricultural extension office or call the farmer helpline.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-red-700 border-red-300 hover:bg-red-100">
              Farmer Helpline: 1800-180-1551
            </Button>
            <Button variant="outline" className="text-red-700 border-red-300 hover:bg-red-100">
              Find Local Expert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemSolver;
