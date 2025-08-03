
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserCircle, BookOpen, Calendar, FileText, School, Bell } from 'lucide-react';
import LoginForm from './LoginForm';
import FeaturesList from './FeaturesList';

const StudentLogin = () => {
  const studentFeatures = [
    {
      icon: <BookOpen className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Homework',
      description: 'View your homework assignments and submission status.'
    },
    {
      icon: <Calendar className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Attendance Records',
      description: 'Check your attendance records and history.'
    },
    {
      icon: <FileText className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Exam Results',
      description: 'Access your exam results and academic performance.'
    },
    {
      icon: <School className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Study Material',
      description: 'Download study materials and resources.'
    },
    {
      icon: <Bell className="h-5 w-5 text-school-maroon flex-shrink-0 mt-0.5" />,
      title: 'Notices & Events',
      description: 'Stay updated with school notices and upcoming events.'
    }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="text-center mb-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-school-navy mb-4">
                <UserCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-school-navy">Student Login</h2>
              
            </div>
            
            <LoginForm 
              idLabel="Student ID"
              idPlaceholder="Enter your student ID"
              idDefaultValue="student123"
              idName="student-id"
              passwordName="student-password"
              rememberName="remember"
            />
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-md">
            <h3 className="font-bold text-school-navy mb-4">Student Portal Features</h3>
            <FeaturesList features={studentFeatures} />
            
            <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Need Help?</span> Contact your class teacher or the IT support team at <a href="mailto:sisbareta@gmail.com" className="text-school-maroon hover:underline">sisbareta@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentLogin;
