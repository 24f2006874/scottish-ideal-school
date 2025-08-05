
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Bell, Download } from 'lucide-react';

const NoticeItem = ({ date, title, description, category, link }: { 
  date: string; 
  title: string; 
  description: string; 
  category: 'exam' | 'event' | 'holiday' | 'announcement';
  link?: string;
}) => {
  const getCategoryColor = () => {
    switch(category) {
      case 'exam': return 'bg-amber-100 text-amber-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'holiday': return 'bg-green-100 text-green-800';
      case 'announcement': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getCategoryName = () => {
    switch(category) {
      case 'exam': return 'Examination';
      case 'event': return 'Event';
      case 'holiday': return 'Holiday';
      case 'announcement': return 'Announcement';
      default: return 'Notice';
    }
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-shrink-0 md:w-32 mb-2 md:mb-0">
            <div className="text-gray-500 text-sm">{date}</div>
            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getCategoryColor()}`}>
              {getCategoryName()}
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-school-navy mb-2">{title}</h3>
            <p className="text-gray-700 text-sm mb-3">{description}</p>
            
            {link && (
              <Button asChild variant="outline" size="sm" className="text-xs">
                <a href={link} className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Notices = () => {
  const examNotices = [
    {
      date: "April 5, 2025",
      title: "First Term Examination Schedule",
      description: "The first term examinations for all classes will be held from September 10 to September 20, 2025. The detailed schedule has been uploaded. Parents are requested to ensure their wards prepare accordingly.",
      category: "exam" as const,
      link: "#"
    },
    {
      date: "March 15, 2025",
      title: "Final Examination Results",
      description: "The results of the final examinations for the academic year 2024-2025 will be declared on March 30, 2025. Parents can access the results through the student portal using the login credentials.",
      category: "exam" as const
    },
    {
      date: "February 5, 2025",
      title: "Final Examination Guidelines",
      description: "Guidelines for the final examinations for all classes have been issued. Students are advised to follow the instructions carefully. The guidelines include examination rules, stationery requirements, and reporting time.",
      category: "exam" as const,
      link: "#"
    },
    {
      date: "January 20, 2025",
      title: "Pre-Board Examination Schedule for Class IX",
      description: "The pre-board examinations for Class IX will be conducted from February 1 to February 10, 2025. Students are advised to prepare thoroughly and bring all required stationery items.",
      category: "exam" as const,
      link: "#"
    }
  ];
  
  const eventNotices = [
    {
      date: "April 10, 2025",
      title: "Annual Science Exhibition",
      description: "The Annual Science Exhibition will be held on April 25, 2025. Students from Classes VI to IX will showcase their science projects. Parents are cordially invited to attend the exhibition between 10:00 AM and 3:00 PM.",
      category: "event" as const
    },
    {
      date: "March 5, 2025",
      title: "Inter-School Debate Competition",
      description: "Scottish Ideal School will host the Inter-School Debate Competition on March 20, 2025. The theme for this year's debate is 'Technology in Education: Boon or Bane'. Interested students can register with their class teachers.",
      category: "event" as const,
      link: "#"
    },
    {
      date: "February 15, 2025",
      title: "Annual Sports Day",
      description: "The Annual Sports Day will be celebrated on March 5, 2025, at the school grounds. Various sports competitions and athletic events will be organized for students of all age groups. Parents are invited to encourage their children.",
      category: "event" as const
    },
    {
      date: "January 10, 2025",
      title: "Cultural Festival 'Expressions 2025'",
      description: "The annual cultural festival 'Expressions 2025' will be held on February 15-16, 2025. The festival will showcase various cultural performances, art exhibitions, and literary events. The detailed program schedule is attached.",
      category: "event" as const,
      link: "#"
    }
  ];
  
  const holidayNotices = [
    {
      date: "April 15, 2025",
      title: "Summer Vacation",
      description: "The school will remain closed for summer vacation from May 25 to June 30, 2025. Classes will resume on July 1, 2025. Students are advised to complete their holiday assignments during this period.",
      category: "holiday" as const
    },
    {
      date: "March 20, 2025",
      title: "Bengali New Year Holiday",
      description: "The school will remain closed on April 15, 2025, on the occasion of Bengali New Year (Poila Baisakh). Regular classes will resume on April 16, 2025.",
      category: "holiday" as const
    },
    {
      date: "February 20, 2025",
      title: "Holi Festival Holiday",
      description: "The school will remain closed on March 13-14, 2025, on the occasion of Holi festival. Regular classes will resume on March 15, 2025.",
      category: "holiday" as const
    },
    {
      date: "January 15, 2025",
      title: "Republic Day Holiday",
      description: "The school will remain closed on January 26, 2025, on the occasion of Republic Day. A special assembly will be conducted on January 25, 2025, to celebrate Republic Day. All students must be present in proper uniform.",
      category: "holiday" as const
    }
  ];
  
  const announcementNotices = [
    {
      date: "April 20, 2025",
      title: "New Academic Session 2025-2026",
      description: "The new academic session for 2025-2026 will commence on April 3, 2025. Students are expected to report in proper summer uniform. The books and stationery list for the new session has been uploaded on the school website.",
      category: "announcement" as const,
      link: "#"
    },
    {
      date: "March 25, 2025",
      title: "Fee Structure for 2025-2026",
      description: "The fee structure for the academic year 2025-2026 has been uploaded on the school website. Parents are requested to go through it carefully. The first quarter fees must be paid by April 10, 2025.",
      category: "announcement" as const,
      link: "#"
    },
    {
      date: "February 25, 2025",
      title: "Parent-Teacher Meeting",
      description: "The Parent-Teacher Meeting for all classes will be held on March 10, 2025, from 9:00 AM to 1:00 PM. Parents are requested to attend the meeting to discuss their ward's academic progress and collect report cards.",
      category: "announcement" as const
    },
    {
      date: "January 25, 2025",
      title: "School Bus Route Changes",
      description: "There will be some changes in the school bus routes effective from February 1, 2025, due to road construction work in certain areas. The revised routes and timings have been uploaded. Parents are requested to take note.",
      category: "announcement" as const,
      link: "#"
    }
  ];
  
  return (
    <MainLayout>
      <Helmet>
        <title>Notice Board - Scottish Ideal School</title>
        <meta name="description" content="Stay updated with the latest notices, announcements, exam schedules, and events at Scottish Ideal School." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Notice Board</h1>
        
        <div className="bg-school-lightblue p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Bell className="w-16 h-16 text-school-maroon" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-school-navy mb-2">Important Announcements</h2>
              <p className="text-gray-700">
                Stay updated with the latest notices, exam schedules, events, and holiday announcements from Scottish Ideal School. This page is regularly updated with important information for students, parents, and staff.
              </p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="exams">Examinations</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="holidays">Holidays</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="space-y-4">
              {[...examNotices, ...eventNotices, ...holidayNotices, ...announcementNotices]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 8)
                .map((notice, index) => (
                  <NoticeItem key={index} {...notice} />
                ))
              }
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild className="bg-school-navy hover:bg-school-navy/90">
                <a href="#" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View All Notices
                </a>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="exams" className="mt-8">
            <div className="space-y-4">
              {examNotices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="mt-8">
            <div className="space-y-4">
              {eventNotices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="holidays" className="mt-8">
            <div className="space-y-4">
              {holidayNotices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="announcements" className="mt-8">
            <div className="space-y-4">
              {announcementNotices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-school-navy mb-6">Academic Calendar</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-school-maroon" />
                    <h3 className="text-xl font-bold text-school-navy">2025-2026 Academic Year</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    The academic calendar provides important dates for the school year, including term schedules, examination periods, holidays, and special events.
                  </p>
                  
                  <Button asChild className="bg-school-maroon hover:bg-school-maroon/90 w-full">
                    <a href="#" className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Academic Calendar
                    </a>
                  </Button>
                </div>
                
                <div className="md:w-2/3 border rounded-md overflow-hidden">
                  <div className="bg-school-navy text-white p-3">
                    <h4 className="font-bold">Key Dates</h4>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-3 bg-gray-50">
                        <h5 className="font-medium text-school-navy">New Academic Session Begins</h5>
                        <p className="text-sm text-gray-600">April 3, 2025</p>
                      </div>
                      <div className="p-3">
                        <h5 className="font-medium text-school-navy">Summer Vacation</h5>
                        <p className="text-sm text-gray-600">May 25 to June 30, 2025</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-3">
                        <h5 className="font-medium text-school-navy">First Term Exams</h5>
                        <p className="text-sm text-gray-600">September 10-20, 2025</p>
                      </div>
                      <div className="p-3 bg-gray-50">
                        <h5 className="font-medium text-school-navy">Autumn Break</h5>
                        <p className="text-sm text-gray-600">October 15-25, 2025</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-3 bg-gray-50">
                        <h5 className="font-medium text-school-navy">Annual Sports Day</h5>
                        <p className="text-sm text-gray-600">November 15, 2025</p>
                      </div>
                      <div className="p-3">
                        <h5 className="font-medium text-school-navy">Winter Break</h5>
                        <p className="text-sm text-gray-600">December 22, 2025 to January 5, 2026</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-3">
                        <h5 className="font-medium text-school-navy">Annual Cultural Festival</h5>
                        <p className="text-sm text-gray-600">February 15-16, 2026</p>
                      </div>
                      <div className="p-3 bg-gray-50">
                        <h5 className="font-medium text-school-navy">Final Exams</h5>
                        <p className="text-sm text-gray-600">February 20-28, 2026</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-3 bg-gray-50">
                        <h5 className="font-medium text-school-navy">Result Declaration</h5>
                        <p className="text-sm text-gray-600">March 20, 2026</p>
                      </div>
                      <div className="p-3">
                        <h5 className="font-medium text-school-navy">Academic Session Ends</h5>
                        <p className="text-sm text-gray-600">March 31, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Notices;
