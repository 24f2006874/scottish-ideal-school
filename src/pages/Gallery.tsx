
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Video, Camera, Play } from 'lucide-react';

const GalleryItem = ({ src, alt, type = 'image' }: { src: string; alt: string; type?: 'image' | 'video' }) => {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="aspect-square bg-gray-100">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-school-maroon ml-1" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-4 w-full">
          <p className="text-white text-sm font-medium truncate">{alt}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const annualDayPhotos = [
    { src: '/placeholder.svg', alt: 'Annual Day Dance Performance' },
    { src: '/placeholder.svg', alt: 'Chief Guest Lighting the Lamp' },
    { src: '/placeholder.svg', alt: 'Drama Performance by Class VIII' },
    { src: '/placeholder.svg', alt: 'Award Ceremony for Academic Excellence' },
    { src: '/placeholder.svg', alt: 'Choir Performance' },
    { src: '/placeholder.svg', alt: 'Principal\'s Address' },
    { src: '/placeholder.svg', alt: 'Traditional Folk Dance' },
    { src: '/placeholder.svg', alt: 'Students and Teachers Group Photo' },
    { src: '/placeholder.svg', alt: 'Prize Distribution Ceremony', type: 'video' },
  ];

  const sportsPhotos = [
    { src: '/placeholder.svg', alt: 'Annual Sports Day Opening Ceremony' },
    { src: '/placeholder.svg', alt: '100m Sprint Final Race' },
    { src: '/placeholder.svg', alt: 'Basketball Tournament Final Match' },
    { src: '/placeholder.svg', alt: 'Relay Race - Junior Category' },
    { src: '/placeholder.svg', alt: 'Football Match Against St. Xavier\'s School' },
    { src: '/placeholder.svg', alt: 'March Past by Houses', type: 'video' },
    { src: '/placeholder.svg', alt: 'Long Jump Competition' },
    { src: '/placeholder.svg', alt: 'Cricket Tournament Victory Celebration' },
    { src: '/placeholder.svg', alt: 'Yoga Demonstration' },
  ];

  const classroomPhotos = [
    { src: '/placeholder.svg', alt: 'Science Lab Experiment - Class IX' },
    { src: '/placeholder.svg', alt: 'Computer Lab Session' },
    { src: '/placeholder.svg', alt: 'Art and Craft Class - Primary Section' },
    { src: '/placeholder.svg', alt: 'Mathematics Class Engagement' },
    { src: '/placeholder.svg', alt: 'Library Reading Session' },
    { src: '/placeholder.svg', alt: 'Group Discussion in Class VII' },
    { src: '/placeholder.svg', alt: 'Science Exhibition Projects' },
    { src: '/placeholder.svg', alt: 'English Debate Competition' },
    { src: '/placeholder.svg', alt: 'Virtual Reality Learning Experience', type: 'video' },
  ];

  const schoolEventsPhotos = [
    { src: '/placeholder.svg', alt: 'Independence Day Celebration' },
    { src: '/placeholder.svg', alt: 'Teacher\'s Day Program' },
    { src: '/placeholder.svg', alt: 'Earth Day Tree Planting Initiative' },
    { src: '/placeholder.svg', alt: 'Inter-School Quiz Competition' },
    { src: '/placeholder.svg', alt: 'Children\'s Day Celebrations' },
    { src: '/placeholder.svg', alt: 'Annual Art Exhibition' },
    { src: '/placeholder.svg', alt: 'Science Fair Projects Display' },
    { src: '/placeholder.svg', alt: 'Parents\' Day Celebration' },
    { src: '/placeholder.svg', alt: 'Community Service Event', type: 'video' },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Gallery - Scottish Ideal School</title>
        <meta name="description" content="Explore photos and videos from various events, activities, and achievements at Scottish Ideal School." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Gallery</h1>

        <div className="bg-school-lightblue p-6 rounded-lg mb-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <ImageIcon className="w-8 h-8 text-school-maroon" />
              <Camera className="w-8 h-8 text-school-navy" />
              <Video className="w-8 h-8 text-school-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-school-navy mb-2">Capturing Moments, Creating Memories</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Explore photos and videos from various events, activities, and celebrations at Scottish Ideal School. Our gallery showcases the vibrant school life and achievements of our students and staff.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="annual-day" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="annual-day">Annual Day</TabsTrigger>
            <TabsTrigger value="sports">Sports Events</TabsTrigger>
            <TabsTrigger value="classroom">Classroom Activities</TabsTrigger>
            <TabsTrigger value="events">School Events</TabsTrigger>
          </TabsList>

          <TabsContent value="annual-day" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-4">Annual Day Celebrations</h2>
              <p className="text-gray-700 mb-6">
                Our Annual Day is a grand celebration of talent, creativity, and achievement. Students showcase their performing arts skills through music, dance, and drama performances. The event is attended by parents, alumni, and distinguished guests.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {annualDayPhotos.map((photo, index) => (
                  <GalleryItem
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    type={photo.type as 'image' | 'video'}
                  />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">Load More</a>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sports" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-4">Sports Events</h2>
              <p className="text-gray-700 mb-6">
                Sports and physical fitness are integral parts of our curriculum. Our annual Sports Day and various tournaments throughout the year showcase the athletic talents of our students and promote the values of teamwork, discipline, and sportsmanship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sportsPhotos.map((photo, index) => (
                  <GalleryItem
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    type={photo.type as 'image' | 'video'}
                  />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">Load More</a>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="classroom" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-4">Classroom Activities</h2>
              <p className="text-gray-700 mb-6">
                Our classrooms are vibrant spaces of learning and discovery. Students engage in various academic activities, experiments, projects, and discussions that make learning engaging and enjoyable. These glimpses into our classrooms showcase our innovative teaching methodologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {classroomPhotos.map((photo, index) => (
                  <GalleryItem
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    type={photo.type as 'image' | 'video'}
                  />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">Load More</a>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-4">School Events</h2>
              <p className="text-gray-700 mb-6">
                Throughout the year, our school hosts various events and celebrations that enrich the educational experience. From cultural festivals to national holiday celebrations, these events promote cultural awareness, creativity, and a sense of community among students.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {schoolEventsPhotos.map((photo, index) => (
                  <GalleryItem
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    type={photo.type as 'image' | 'video'}
                  />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                  <a href="#">Load More</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-school-navy mb-6">Featured Videos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative group">
                <img src="/placeholder.svg" alt="School Tour Video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-school-maroon ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-school-navy text-lg mb-1">Virtual School Tour</h3>
                <p className="text-gray-600 text-sm">Take a tour of our campus and facilities in this comprehensive virtual guide to Scottish Ideal School.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative group">
                <img src="/placeholder.svg" alt="Annual Day Highlights" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-school-maroon ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-school-navy text-lg mb-1">Annual Day 2024 Highlights</h3>
                <p className="text-gray-600 text-sm">A compilation of the best moments from our Annual Day celebration featuring performances by students of all ages.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative group">
                <img src="/placeholder.svg" alt="Principal's Message" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-school-maroon ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-school-navy text-lg mb-1">Principal's Welcome Message</h3>
                <p className="text-gray-600 text-sm">Mrs. Kaylani Sinha shares her vision for the school and welcomes new students and parents to the Scottish Ideal family.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-school-maroon hover:bg-school-maroon/90">
              <a
                href="https://www.youtube.com/@jatadharibehera5311"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our YouTube Channel
              </a>
            </Button>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
