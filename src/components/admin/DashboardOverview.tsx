
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Users, Eye } from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Pages",
      value: "8",
      icon: FileText,
      description: "Active pages on the website"
    },
    {
      title: "Form Submissions",
      value: "24",
      icon: Mail,
      description: "This month"
    },
    {
      title: "Page Views",
      value: "1,234",
      icon: Eye,
      description: "Last 30 days"
    },
    {
      title: "Active Users",
      value: "12",
      icon: Users,
      description: "Online now"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Contact form submitted</span>
                <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Page updated: Home</span>
                <span className="text-xs text-gray-500 ml-auto">1 hour ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">New user registration</span>
                <span className="text-xs text-gray-500 ml-auto">3 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium">Add New Page</div>
                <div className="text-sm text-gray-600">Create a new page for your website</div>
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium">View Form Submissions</div>
                <div className="text-sm text-gray-600">Check recent contact form submissions</div>
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium">Update SEO Settings</div>
                <div className="text-sm text-gray-600">Manage meta titles and descriptions</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
