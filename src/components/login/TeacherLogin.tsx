
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCircle, BookOpen, Bell, School } from 'lucide-react';
import LoginForm from './LoginForm';
import FeaturesList from './FeaturesList';

const TeacherLogin = () => {
  const teacherFeatures = [
    {
      icon: <UserCircle className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Attendance Management',
      description: 'Mark and manage student attendance for your classes.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Academic Management',
      description: 'Record and manage grades, create assignments, and track student progress.'
    },
    {
      icon: <Bell className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Class Management',
      description: 'Select your class, view student lists, and manage class activities.'
    },
    {
      icon: <School className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Communication',
      description: 'Send messages to students and communicate with colleagues.'
    }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="text-center mb-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-school-navy mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-school-navy">Teacher Login</h2>
             
            </div>
            
            <LoginForm 
              idLabel="Employee ID / Email"
              idPlaceholder="Enter your employee ID or email"
              idDefaultValue="teacher123"
              idName="teacher-id"
              passwordName="teacher-password"
              rememberName="teacher-remember"
            />
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-md">
            <h3 className="font-bold text-school-navy mb-4">Teacher Portal Features</h3>
            <FeaturesList features={teacherFeatures} />
            
            <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Need Help?</span> Contact the IT support team at <a href="mailto:sisbareta@gmail.com" className="text-school-maroon hover:underline">sisbareta@gmail.com</a> or call +91 62060 01004.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherLogin;
