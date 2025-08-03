
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserCircle, Users, Settings } from 'lucide-react';
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';
import AdminLogin from './AdminLogin';
import PortalIntro from './PortalIntro';
import PortalGuidelines from './PortalGuidelines';

const LoginPortal = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <PortalIntro />
      
      <Tabs defaultValue="student" className="w-full">
        <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3">
          <TabsTrigger value="student" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            Student Login
          </TabsTrigger>
          <TabsTrigger value="teacher" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Teacher Login
          </TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Admin Login
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="student" className="mt-6">
          <StudentLogin />
        </TabsContent>
        
        <TabsContent value="teacher" className="mt-6">
          <TeacherLogin />
        </TabsContent>
        
        <TabsContent value="admin" className="mt-6">
          <AdminLogin />
        </TabsContent>
      </Tabs>
      
      <PortalGuidelines />
    </div>
  );
};

export default LoginPortal;
