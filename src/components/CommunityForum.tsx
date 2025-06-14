
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ThumbsUp, Share2, Plus, Search } from 'lucide-react';

const CommunityForum = () => {
  const [newPost, setNewPost] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const forumPosts = [
    {
      id: 1,
      author: 'Rajesh Kumar',
      location: 'Punjab',
      time: '2 hours ago',
      title: 'Best practices for wheat irrigation during winter',
      content: 'I have been growing wheat for 15 years and have learned some effective irrigation techniques that increase yield by 20%. Happy to share with fellow farmers.',
      category: 'Irrigation',
      likes: 24,
      replies: 8,
      avatar: 'RK'
    },
    {
      id: 2,
      author: 'Sunita Patel',
      location: 'Gujarat',
      time: '4 hours ago',
      title: 'Organic pest control for cotton farming',
      content: 'Looking for effective organic methods to control pink bollworm in cotton. Chemical pesticides are affecting soil health. Any suggestions?',
      category: 'Pest Control',
      likes: 18,
      replies: 12,
      avatar: 'SP'
    },
    {
      id: 3,
      author: 'Amit Singh',
      location: 'Uttar Pradesh',
      time: '1 day ago',
      title: 'Success story: Doubled income with crop diversification',
      content: 'Switched from mono-cropping to growing 4 different crops in rotation. Income increased from 2L to 4.2L annually. Here is my complete strategy...',
      category: 'Success Story',
      likes: 45,
      replies: 23,
      avatar: 'AS'
    },
    {
      id: 4,
      author: 'Priya Sharma',
      location: 'Haryana',
      time: '2 days ago',
      title: 'Government subsidy for drip irrigation system',
      content: 'Just received 50% subsidy for installing drip irrigation system. The process was easier than expected. Here are the steps I followed...',
      category: 'Government Schemes',
      likes: 32,
      replies: 15,
      avatar: 'PS'
    }
  ];

  const categories = ['All', 'Irrigation', 'Pest Control', 'Success Story', 'Government Schemes', 'Seeds', 'Market Prices'];

  return (
    <div className="space-y-6">
      {/* Create New Post */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5 text-green-600" />
            <span>Share Your Knowledge</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="What would you like to discuss with fellow farmers?" />
          <Textarea 
            placeholder="Share your experience, ask questions, or provide solutions..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows={3}
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {categories.slice(1, 4).map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-green-50">
                  {category}
                </Badge>
              ))}
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Post to Community</Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <Input 
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === 'All' ? 'default' : 'outline'} 
                  className="cursor-pointer hover:bg-green-50 whitespace-nowrap"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forum Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback className="bg-green-100 text-green-600">
                    {post.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.location} • {post.time}</p>
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{post.content}</p>
                  </div>
                  
                  <div className="flex items-center space-x-6 pt-2">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.replies} replies</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full md:w-auto">
          Load More Discussions
        </Button>
      </div>
    </div>
  );
};

export default CommunityForum;
