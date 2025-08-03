
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Calendar, Bell, Image, BookOpen, FileText, Settings, Shield } from 'lucide-react';

const Admin = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Admin Panel - Scottish Ideal School</title>
        <meta name="description" content="Administrative dashboard for Scottish Ideal School management." />
      </Helmet>
      
      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-school-navy">Admin Dashboard</h1>
          
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Welcome, Administrator</span>
            <Button variant="outline" size="sm">Logout</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Students</p>
                  <h3 className="text-2xl font-bold">243</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Teachers</p>
                  <h3 className="text-2xl font-bold">18</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Bell className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Active Notices</p>
                  <h3 className="text-2xl font-bold">5</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <UserPlus className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Pending Admissions</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="user-management">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            <TabsTrigger value="user-management" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden md:inline">User Management</span>
              <span className="md:hidden">Users</span>
            </TabsTrigger>
            <TabsTrigger value="attendance" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden md:inline">Attendance</span>
              <span className="md:hidden">Attend.</span>
            </TabsTrigger>
            <TabsTrigger value="notices" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden md:inline">Notices</span>
              <span className="md:hidden">Notices</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden md:inline">Gallery & Events</span>
              <span className="md:hidden">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="admissions" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              <span className="hidden md:inline">Admissions</span>
              <span className="md:hidden">Admit</span>
            </TabsTrigger>
            <TabsTrigger value="academics" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden md:inline">Academics</span>
              <span className="md:hidden">Acad.</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Content</span>
              <span className="md:hidden">Content</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="user-management">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-school-maroon" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-school-navy">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Student
                    </Button>
                    <Button className="bg-school-navy">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Teacher
                    </Button>
                    <Button variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Reset Passwords
                    </Button>
                  </div>
                  
                  <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                    <Users className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="font-bold text-gray-700 mb-2">User Management Module</h3>
                    <p>Add, update, or remove students and teachers. Assign classes, roll numbers, and reset passwords.</p>
                    <Button className="mt-4 bg-school-maroon">Get Started</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="attendance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-school-maroon" />
                  Attendance Supervision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Attendance Supervision Module</h3>
                  <p>View class-wise, student-wise attendance. Export monthly attendance and generate summary reports.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notices">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-school-maroon" />
                  Notice Board Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <Bell className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Notice Board Management Module</h3>
                  <p>Post announcements, schedule when notices go live, and edit or delete old announcements.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-school-maroon" />
                  Gallery & Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <Image className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Gallery & Events Module</h3>
                  <p>Upload photos/videos from events, add categories, and manage the event calendar.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="admissions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-school-maroon" />
                  Admission Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <UserPlus className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Admission Applications Module</h3>
                  <p>View submitted forms, accept/reject applications, and communicate with applicants.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="academics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-school-maroon" />
                  Academics & Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Academics & Curriculum Module</h3>
                  <p>Upload or update class-wise curriculum PDFs, add co-curricular activities, and publish exam schedules.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-school-maroon" />
                  Website Content Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-bold text-gray-700 mb-2">Website Content Manager Module</h3>
                  <p>Update homepage text, hero image, welcome message, principal's message, contact info, and school timings.</p>
                  <Button className="mt-4 bg-school-maroon">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Scottish Ideal School Admin Panel v1.0</p>
          <p>Crafted with dedication by Raunak Ratan – A proud student of Scottish Ideal School</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Admin;
