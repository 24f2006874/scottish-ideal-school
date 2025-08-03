
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Users, Calendar, Bell, Image, FileText } from 'lucide-react';
import LoginForm from './LoginForm';
import FeaturesList from './FeaturesList';

const AdminLogin = () => {
  const adminFeatures = [
    {
      icon: <Users className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'User Management',
      description: 'Add, update, or remove students and teachers. Assign classes, roll numbers, and reset passwords.'
    },
    {
      icon: <Calendar className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Attendance Supervision',
      description: 'View class-wise, student-wise attendance. Export monthly attendance and generate reports.'
    },
    {
      icon: <Bell className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Notice Board Management',
      description: 'Post announcements, schedule notices, and manage the school announcement system.'
    },
    {
      icon: <Image className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Gallery & Events',
      description: 'Upload photos/videos from events, add categories, and manage the event calendar.'
    },
    {
      icon: <FileText className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Website Content Manager',
      description: 'Update homepage content, principal\'s message, contact info, and school timings.'
    }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="text-center mb-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-school-navy mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-school-navy">Admin Login</h2>
              
            </div>
            
            <LoginForm 
              idLabel="Admin ID / Email"
              idPlaceholder="Enter your admin ID or email"
              idDefaultValue="admin123"
              idName="admin-id"
              passwordName="admin-password"
              rememberName="admin-remember"
            />
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-md">
            <h3 className="font-bold text-school-navy mb-4">Admin Portal Features</h3>
            <FeaturesList features={adminFeatures} />
            
            <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Administrator Access</span> This portal provides complete control over the school's digital systems. For security assistance, contact the IT department.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminLogin;
