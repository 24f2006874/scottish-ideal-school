
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Trophy, BookOpen, Music, Shapes, Users, Globe, Microscope, Calculator } from 'lucide-react';

const Academics = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Academics - Scottish Ideal School</title>
        <meta name="description" content="Explore the academic programs, curriculum, co-curricular activities, and achievements at Scottish Ideal School." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Academics</h1>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="co-curricular">Co-Curricular</TabsTrigger>
            <TabsTrigger value="awards">Awards & Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum" className="mt-8">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-4">Our Academic Approach</h2>
                <p className="text-gray-700 mb-4">
                  At Scottish Ideal School, we follow a comprehensive and progressive curriculum that aligns with national educational standards while incorporating modern teaching methodologies. Our academic framework is designed to promote conceptual understanding, critical thinking, and application of knowledge rather than mere memorization.
                </p>
                <p className="text-gray-700 mb-6">
                  We believe in providing a balanced education that nurtures intellectual curiosity, creativity, and a love for learning. Our curriculum is periodically reviewed and updated to reflect emerging educational practices and the changing needs of our students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="p-4 border rounded-md flex flex-col items-center text-center">
                    <BookOpen className="w-10 h-10 text-school-maroon mb-3" />
                    <h3 className="font-bold text-school-navy mb-2">Language & Literature</h3>
                    <p className="text-sm text-gray-600">English, Hindi with focus on communication and appreciation of literature</p>
                  </div>
                  <div className="p-4 border rounded-md flex flex-col items-center text-center">
                    <Calculator className="w-10 h-10 text-school-maroon mb-3" />
                    <h3 className="font-bold text-school-navy mb-2">Mathematics</h3>
                    <p className="text-sm text-gray-600">Developing strong numerical skills and mathematical reasoning</p>
                  </div>
                  <div className="p-4 border rounded-md flex flex-col items-center text-center">
                    <Microscope className="w-10 h-10 text-school-maroon mb-3" />
                    <h3 className="font-bold text-school-navy mb-2">Sciences</h3>
                    <p className="text-sm text-gray-600">Physics, Chemistry, Biology with hands-on laboratory experiences</p>
                  </div>
                  <div className="p-4 border rounded-md flex flex-col items-center text-center">
                    <Globe className="w-10 h-10 text-school-maroon mb-3" />
                    <h3 className="font-bold text-school-navy mb-2">Social Studies</h3>
                    <p className="text-sm text-gray-600">History, Geography, Civics fostering global citizenship</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-school-navy mb-4">Academic Programs by Grade Level</h3>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-school-navy mb-3">Pre-Primary (Nursery to KG)</h4>
                  <p className="text-gray-700 mb-4">
                    Our pre-primary program focuses on developing foundational skills through play-based learning. Students are introduced to basic concepts in language, numbers, environmental awareness, and social skills in a nurturing and stimulating environment.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Language Development</h5>
                      <p className="text-xs text-gray-600">Phonics, storytelling, and early reading skills</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Numeracy</h5>
                      <p className="text-xs text-gray-600">Number recognition, counting, and basic mathematical concepts</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Motor Skills</h5>
                      <p className="text-xs text-gray-600">Activities to develop fine and gross motor skills</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Social Development</h5>
                      <p className="text-xs text-gray-600">Learning to share, cooperate, and communicate effectively</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Creative Expression</h5>
                      <p className="text-xs text-gray-600">Art, music, and movement activities</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Environmental Awareness</h5>
                      <p className="text-xs text-gray-600">Learning about nature, community, and the world around us</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-school-navy mb-3">Primary (Classes I to V)</h4>
                  <p className="text-gray-700 mb-4">
                    The primary program builds on the foundation laid in pre-primary years and introduces a more structured approach to learning. Students develop proficiency in language, mathematics, science, and social studies while continuing to explore their creativity through arts and sports.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Languages</h5>
                      <p className="text-xs text-gray-600">English, Hindi with focus on reading comprehension and expression</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Mathematics</h5>
                      <p className="text-xs text-gray-600">Number operations, geometry, measurement, and problem-solving</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Environmental Studies</h5>
                      <p className="text-xs text-gray-600">Integrated approach to science and social studies</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Computer Science</h5>
                      <p className="text-xs text-gray-600">Basic computer skills and digital literacy</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Arts & Crafts</h5>
                      <p className="text-xs text-gray-600">Drawing, painting, and craft activities</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Physical Education</h5>
                      <p className="text-xs text-gray-600">Sports, games, and physical fitness activities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-school-navy mb-3">Middle School (Classes VI to IX)</h4>
                  <p className="text-gray-700 mb-4">
                    The middle school program prepares students for higher education by deepening their understanding of core subjects and encouraging them to think critically, solve problems, and express their ideas effectively. The curriculum becomes more specialized with distinct subjects taught by subject experts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Languages</h5>
                      <p className="text-xs text-gray-600">Advanced grammar, literature, and composition skills</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Mathematics</h5>
                      <p className="text-xs text-gray-600">Algebra, geometry, statistics, and mathematical reasoning</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Sciences</h5>
                      <p className="text-xs text-gray-600">Physics, Chemistry, Biology with laboratory work</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Social Sciences</h5>
                      <p className="text-xs text-gray-600">History, Geography, Civics, and Economics</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Computer Science</h5>
                      <p className="text-xs text-gray-600">Programming, digital tools, and information technology</p>
                    </div>
                    <div className="bg-school-lightgray p-3 rounded-md">
                      <h5 className="font-bold text-school-navy text-sm mb-1">Life Skills</h5>
                      <p className="text-xs text-gray-600">Communication, problem-solving, and personal development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-school-maroon hover:bg-school-maroon/90">
                <a href="/admissions#prospectus">Download Academic Brochure</a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="co-curricular" className="mt-8">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h2 className="text-2xl font-bold text-school-navy mb-4">Co-Curricular Activities</h2>
              <p className="text-gray-700">
                We believe in the holistic development of our students. Our co-curricular program complements the academic curriculum and provides opportunities for students to discover and develop their talents and interests in various domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Performing Arts Card */}
              <Card>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/images-sis/sis-p-arts.jpg"
                    alt="Performing Arts"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-school-navy mb-3">Performing Arts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Classical and contemporary music</li>
                    <li>• Dance (Classical and Folk)</li>
                    <li>• Drama and theater arts</li>
                    <li>• Choir and orchestra</li>
                    <li>• Annual cultural productions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Visual Arts & Crafts Card */}
              <Card>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/images-sis/sis-v-arts.jpg"
                    alt="Visual Arts & Crafts"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-school-navy mb-3">Visual Arts & Crafts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Drawing and painting</li>
                    <li>• Sculpture and pottery</li>
                    <li>• Photography</li>
                    <li>• Traditional crafts</li>
                    <li>• Digital art and design</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Clubs & Societies Card */}
              <Card>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/images-sis/sis-clubs.jpeg"
                    alt="Clubs & Societies"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-school-navy mb-3">Clubs & Societies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Science and technology club</li>
                    <li>• Literary club</li>
                    <li>• Mathematics club</li>
                    <li>• Eco club</li>
                    <li>• Debate and public speaking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>


            <div className="bg-school-lightgray p-6 rounded-lg mb-10">
              <h3 className="text-xl font-bold text-school-navy mb-4 text-center">Sports & Physical Education</h3>
              <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                Physical fitness is an integral part of our educational philosophy. We offer a comprehensive sports program that includes both team and individual sports.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Cricket", "Football", "Basketball", "Volleyball",
                  "Athletics", "Badminton", "Table Tennis", "Chess",
                  "Yoga", "Karate", "Swimming", "Gymnastics"
                ].map((sport, index) => (
                  <div key={index} className="bg-white p-3 rounded-md text-center shadow-sm">
                    <span className="text-school-navy font-medium">{sport}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-school-navy mb-4">Annual Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="Sports Day" className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h4 className="text-lg font-bold text-school-navy mb-2">Annual Sports Day</h4>
                    <p className="text-gray-700 mb-3">
                      A celebration of physical fitness and sportsmanship featuring track and field events, team sports competitions, and displays of physical prowess.
                    </p>
                    <p className="text-sm text-gray-600">Held every November</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="Cultural Festival" className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h4 className="text-lg font-bold text-school-navy mb-2">Cultural Festival</h4>
                    <p className="text-gray-700 mb-3">
                      A showcase of our students' talents in music, dance, drama, and art, celebrating the rich cultural heritage of India and the world.
                    </p>
                    <p className="text-sm text-gray-600">Held every February</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                <a href="/gallery">View Event Gallery</a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-school-navy mb-4">Awards & Achievements</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We take pride in the accomplishments of our students and the recognition our school has received over the years. These achievements reflect our commitment to excellence in education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card className="overflow-hidden border-l-4 border-l-school-gold">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-12 h-12 text-school-gold flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-school-navy mb-3">School Achievements</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2023:</span>
                          <span>Recognized as one of the "Top Emerging Schools" in Bihar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2022:</span>
                          <span>Award for "Excellence in Co-Curricular Activities" by the State Education Board</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2021:</span>
                          <span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2020:</span>
                          <span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2019:</span>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-l-4 border-l-school-maroon">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-12 h-12 text-school-maroon flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-school-navy mb-3">Academic Excellence</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2024:</span>
                          <span>100% pass rate in Class VIII examinations with 75% students scoring above 85%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2023:</span>
                          <span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2022:</span>
                          <span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2021:</span>
                          <span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-school-maroon">2020:</span>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold text-school-navy mb-4">Sports & Co-curricular Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Sports Achievements" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-school-navy mb-3">Sports</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Inter-School Cricket Championship Winners (2023)</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Arts Achievements" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-school-navy mb-3">Arts & Culture</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Debate Achievements" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-school-navy mb-3">Competitions</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-school-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Alumni Achievements</h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                We take pride in the achievements of our alumni who continue to make a mark in various fields. Their success is a testament to the strong foundation they received at Scottish Ideal School.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-4 rounded-md">
                  <h4 className="font-bold text-school-gold mb-2">Academic Excellence</h4>
                  <p className="text-sm text-gray-200">
                    Our alumni have secured admissions in prestigious institutions including IITs, NITs, medical colleges, and renowned universities in India and abroad.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-md">
                  <h4 className="font-bold text-school-gold mb-2">Professional Success</h4>
                  <p className="text-sm text-gray-200">
                    Many of our alumni have established successful careers in engineering, medicine, research, business, arts, and various other fields.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-md">
                  <h4 className="font-bold text-school-gold mb-2">Service to Society</h4>
                  <p className="text-sm text-gray-200">
                    Several alumni are engaged in social initiatives, non-profit organizations, and community service, embodying our values of compassion and responsibility.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Academics;
