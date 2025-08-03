
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, MapPin, Users, CalendarDays } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const EventItem = ({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  image, 
  category
}: { 
  title: string; 
  date: string; 
  time: string; 
  location: string; 
  description: string; 
  image: string;
  category: string;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="h-48 md:h-full bg-gray-100">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-2 p-6">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-school-lightblue text-school-navy text-xs font-medium rounded">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-school-navy mb-2">{title}</h3>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4 text-school-maroon" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-school-maroon" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-school-maroon" />
              <span>{location}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>
          
          <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
            <a href="#" className="text-sm">Learn More</a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "November 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Grounds",
      description: "Join us for a day of athletic competitions, team events, and displays of physical prowess. Students from all classes will participate in various sports activities.",
      image: "/placeholder.svg",
      category: "Sports"
    },
    {
      title: "Parent-Teacher Meeting",
      date: "May 20, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "School Classrooms",
      description: "An opportunity for parents to discuss their child's academic progress with teachers. Report cards for the first term will also be distributed during this meeting.",
      image: "/placeholder.svg",
      category: "Academic"
    },
    {
      title: "Science Exhibition",
      date: "July 25, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "School Auditorium",
      description: "Students will showcase their scientific knowledge and creativity through innovative projects and experiments. Parents and guests are invited to witness the young scientists in action.",
      image: "/placeholder.svg",
      category: "Academic"
    },
    {
      title: "Annual Cultural Festival",
      date: "February 15-16, 2026",
      time: "5:00 PM - 9:00 PM",
      location: "School Auditorium",
      description: "A two-day celebration of art, music, dance, and drama. Students will showcase their talents in various cultural performances representing the rich heritage of India.",
      image: "/placeholder.svg",
      category: "Cultural"
    }
  ];
  
  const pastEvents = [
    {
      title: "Inter-School Debate Competition",
      date: "March 20, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      description: "A platform for students to express their views and enhance their public speaking skills. Schools from across the city participated in this engaging battle of words.",
      image: "/placeholder.svg",
      category: "Academic"
    },
    {
      title: "Independence Day Celebration",
      date: "August 15, 2024",
      time: "8:00 AM - 10:00 AM",
      location: "School Assembly Ground",
      description: "A patriotic celebration with flag hoisting, cultural performances, and inspirational speeches commemorating India's independence.",
      image: "/placeholder.svg",
      category: "National"
    },
    {
      title: "Career Counseling Workshop",
      date: "January 10, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "School Conference Hall",
      description: "Expert career counselors guided students of Classes VIII and IX about various career options and the pathways to achieve their professional goals.",
      image: "/placeholder.svg",
      category: "Workshop"
    }
  ];
  
  const calendarEvents = [
    { date: new Date(2025, 4, 20), title: "Parent-Teacher Meeting" },
    { date: new Date(2025, 6, 25), title: "Science Exhibition" },
    { date: new Date(2025, 10, 15), title: "Annual Sports Day" },
    { date: new Date(2026, 1, 15), title: "Cultural Festival (Day 1)" },
    { date: new Date(2026, 1, 16), title: "Cultural Festival (Day 2)" },
    { date: new Date(2025, 4, 25), title: "Summer Vacation Begins" },
    { date: new Date(2025, 5, 30), title: "Summer Vacation Ends" },
    { date: new Date(2025, 9, 10), title: "First Term Exams Begin" },
    { date: new Date(2025, 9, 20), title: "First Term Exams End" },
    { date: new Date(2025, 7, 15), title: "Independence Day" },
    { date: new Date(2026, 1, 1), title: "Class VI Registration Begins" },
    { date: new Date(2025, 8, 5), title: "Teachers' Day" },
    { date: new Date(2025, 10, 14), title: "Children's Day" }
  ];
  
  return (
    <MainLayout>
      <Helmet>
        <title>Events & Calendar - Scottish Ideal School</title>
        <meta name="description" content="View upcoming and past events, as well as the academic calendar for Scottish Ideal School." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Events & Calendar</h1>
        
        <div className="bg-school-lightblue p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <CalendarDays className="w-16 h-16 text-school-maroon" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-school-navy mb-2">School Events & Activities</h2>
              <p className="text-gray-700">
                Stay updated with upcoming events, competitions, celebrations, and academic activities at Scottish Ideal School. Our diverse range of events provides students with opportunities to showcase their talents, develop new skills, and create memorable experiences.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-school-navy flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Upcoming Events
                </h2>
                
                <Button asChild variant="outline" size="sm" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">All Events</a>
                </Button>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <EventItem key={index} {...event} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-school-navy flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Past Events
                </h2>
                
                <Button asChild variant="outline" size="sm" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">View Archive</a>
                </Button>
              </div>
              
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <EventItem key={index} {...event} />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-5">
                <h2 className="text-xl font-bold text-school-navy mb-4 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Academic Calendar
                </h2>
                
                <div className="mb-4">
                  <Calendar
                    mode="single"
                    className="rounded-md border"
                    selected={new Date()}
                    month={new Date(2025, 4)}
                    onMonthChange={() => {}}
                    classNames={{
                      day_selected: "bg-school-maroon text-white hover:bg-school-maroon/90 focus:bg-school-maroon/90",
                      day_today: "bg-school-lightblue text-school-navy",
                    }}
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="font-bold text-school-navy mb-2">Upcoming Events</h3>
                  <div className="space-y-3">
                    {calendarEvents
                      .filter(event => event.date > new Date())
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .slice(0, 5)
                      .map((event, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <div className="w-12 flex-shrink-0 text-center">
                            <div className="text-xs text-gray-500">{event.date.toLocaleString('default', { month: 'short' })}</div>
                            <div className="text-lg font-bold text-school-navy">{event.date.getDate()}</div>
                          </div>
                          <div className="flex-grow border-l-2 border-school-lightblue pl-3">
                            <p className="font-medium text-gray-800">{event.title}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                
                <div className="p-4 bg-school-lightgray rounded-md">
                  <h3 className="font-bold text-school-navy mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Event Registration
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Want to participate in school events or volunteer? Register your interest here.
                  </p>
                  <Button asChild className="w-full bg-school-maroon hover:bg-school-maroon/90">
                    <a href="#">Register Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-bold text-school-navy mb-3">Key Academic Dates</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-school-navy mb-1">New Academic Session</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2 text-school-maroon" />
                        April 3, 2025
                      </div>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-school-navy mb-1">Summer Vacation</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2 text-school-maroon" />
                        May 25 - June 30, 2025
                      </div>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-school-navy mb-1">First Term Examinations</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2 text-school-maroon" />
                        September 10-20, 2025
                      </div>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-school-navy mb-1">Final Examinations</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2 text-school-maroon" />
                        February 20-28, 2026
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-school-navy mb-1">Result Declaration</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-2 text-school-maroon" />
                        March 20, 2026
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                      <a href="#" className="text-xs">Download Complete Academic Calendar</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;
