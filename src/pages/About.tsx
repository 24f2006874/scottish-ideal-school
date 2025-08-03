
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>About Us - Scottish Ideal School</title>
        <meta name="description" content="Learn about Scottish Ideal School's vision, mission, history, and leadership." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">About Scottish Ideal School</h1>
        
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
            <TabsTrigger value="history">Our History</TabsTrigger>
            <TabsTrigger value="principal">Principal's Message</TabsTrigger>
            <TabsTrigger value="teachers">Our Teachers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vision" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-school-maroon">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-school-navy mb-4">Our Vision</h2>
                  <p className="text-gray-700 mb-4">
                    At Scottish Ideal School, we envision creating global citizens who are academically excellent, morally upright, socially responsible, and emotionally balanced. We strive to nurture each child's unique potential to help them become lifelong learners who contribute meaningfully to society.
                  </p>
                  <p className="text-gray-700">
                    We aim to be a center of excellence in education that inspires students to discover their talents, pursue their passions, and develop the skills and values needed to thrive in a rapidly changing world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-school-gold">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-school-navy mb-4">Our Mission</h2>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>To provide a holistic education that balances academic rigor with character development</li>
                    <li>To foster critical thinking, creativity, and problem-solving skills</li>
                    <li>To create a nurturing environment where students feel safe, valued, and respected</li>
                    <li>To promote cultural awareness, environmental consciousness, and ethical values</li>
                    <li>To prepare students for success in higher education and beyond through innovative teaching methodologies</li>
                    <li>To build strong partnerships with parents and the community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-school-lightgray rounded-md">
              <h3 className="text-xl font-bold text-school-navy mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-center">
                  <h4 className="font-bold text-school-maroon mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600">Striving for the highest standards in all endeavors</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm text-center">
                  <h4 className="font-bold text-school-maroon mb-2">Integrity</h4>
                  <p className="text-sm text-gray-600">Being honest, ethical, and accountable in all actions</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm text-center">
                  <h4 className="font-bold text-school-maroon mb-2">Respect</h4>
                  <p className="text-sm text-gray-600">Valuing diversity and treating others with dignity</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm text-center">
                  <h4 className="font-bold text-school-maroon mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">Embracing new ideas and approaches to learning</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm text-center">
                  <h4 className="font-bold text-school-maroon mb-2">Compassion</h4>
                  <p className="text-sm text-gray-600">Showing kindness and empathy toward others</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-4">Our History</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-gray-700 mb-4">
                      Founded in 2015, Scottish Ideal School was established with a vision to provide quality education that blends traditional values with modern teaching methodologies. The school began its journey with just three classrooms and a handful of dedicated teachers under the leadership of our founding principal, Mrs. Kaylani Sinha.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The name "Scottish Ideal" was chosen to reflect our commitment to high academic standards inspired by the Scottish education system, known for its excellence and holistic approach. The school initially offered classes from Nursery to Class V and gradually expanded to include classes up to IX.
                    </p>
                    <p className="text-gray-700 mb-4">
                      From its humble beginnings, the school has grown to become a premier educational institution in the region, with state-of-the-art facilities, a comprehensive curriculum, and a team of highly qualified educators. Our campus, initially occupying a small plot of land, has expanded to include modern classrooms, science and computer laboratories, a library, sports facilities, and spaces for artistic expression.
                    </p>
                    <p className="text-gray-700">
                      Throughout our journey, we have maintained our focus on nurturing each child's potential while instilling values that prepare them for the challenges of the future. Our continuous evolution is driven by our commitment to educational excellence and our dedication to creating a learning environment where students can thrive academically, socially, and emotionally.
                    </p>
                  </div>
                  <div>
                    <div className="bg-school-lightgray p-4 rounded-md mb-4">
                      <h3 className="text-lg font-bold text-school-navy mb-3">Key Milestones</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2015:</span>
                          <span className="text-gray-700">Founding of Scottish Ideal School with classes Nursery to VIII</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2017:</span>
                          <span className="text-gray-700">Expansion to include Class IX and X</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2018:</span>
                          <span className="text-gray-700">Addition of new academic building with science labs</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2019:</span>
                          <span className="text-gray-700">School resumes organizing educational tours for students</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2020:</span>
                          <span className="text-gray-700">Establishment of digital library</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2022:</span>
                          <span className="text-gray-700">Renovation of sports facilities and playground</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-school-maroon">2024:</span>
                          <span className="text-gray-700">Opening of new arts and cultural center</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-school-navy p-4 rounded-md text-white">
                      <h3 className="text-lg font-bold mb-3">Our Motto</h3>
                      <p className="italic text-center py-4">"Inspiring Minds, Shaping Futures"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="principal" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt="Principal Kaylani Sinha" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-school-navy text-white p-4 rounded-md">
                      <h3 className="text-xl font-bold mb-2">Mrs. Kaylani Sinha</h3>
                      <p className="text-sm text-gray-300 mb-3">M.Ed., B.Ed.</p>
                      <p className="text-sm">Principal of Scottish Ideal School since its founding in 2015</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-school-navy mb-4">Principal's Message</h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Dear Parents, Students, and Visitors,
                      </p>
                      <p>
                        It is my privilege to welcome you to Scottish Ideal School. As we navigate the ever-evolving landscape of education, our commitment remains steadfast: to provide a learning environment where every child is empowered to discover their potential and develop into confident, compassionate, and responsible global citizens.
                      </p>
                      <p>
                        At Scottish Ideal School, we believe that education extends beyond textbooks and examinations. While academic excellence is certainly important, we place equal emphasis on character building, critical thinking, creativity, and social responsibility. Our holistic approach to education is designed to nurture well-rounded individuals who are prepared not just for the next examination but for the challenges and opportunities of life.
                      </p>
                      <p>
                        Our dedicated team of educators works tirelessly to create a stimulating learning environment where curiosity is encouraged, questions are welcomed, and each child's unique talents are recognized and nurtured. We employ innovative teaching methodologies that make learning engaging, relevant, and meaningful.
                      </p>
                      <p>
                        As we continue our educational journey, we value the partnership between home and school. Parents are an integral part of our school community, and your involvement and support are crucial to your child's success. Together, we can create a strong foundation that will help our students grow into individuals who not only excel academically but also embody our core values of excellence, integrity, respect, innovation, and compassion.
                      </p>
                      <p>
                        I invite you to explore our website to learn more about our programs, achievements, and activities. If you are considering Scottish Ideal School for your child's education, we would be delighted to welcome you for a campus visit to experience firsthand the vibrant learning community we have built.
                      </p>
                      <p>
                        Warm regards,
                      </p>
                      <p className="font-bold">
                        Mrs. Kaylani Sinha<br />
                        Principal
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="teachers" className="mt-8">
            <h2 className="text-2xl font-bold text-school-navy mb-6">Our Teachers</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              Our dedicated team of educators brings a wealth of knowledge, experience, and passion to the classroom. They are committed to fostering a love for learning and helping each student reach their full potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Mr. Shreyash", role: "Vice Principal & Science Coordinator", photo: "/placeholder.svg" },
                { name: "Mr. Jatadhari Behera (Jacob)", role: "Primary Section Head", photo: "/placeholder.svg" },
                { name: "Mr. Arvind Mehta", role: "Mathematics Department Head", photo: "/placeholder.svg" },
                { name: "Mr. Sadanand", role: "English Language Coordinator", photo: "/placeholder.svg" },
                { name: "Mr. Pragesh Kumar", role: "Social Studies Department Head", photo: "/placeholder.svg" },
                { name: "Mr. ", role: "Computer Science Teacher", photo: "/placeholder.svg" },
                { name: "Mr. ", role: "Physical Education Instructor", photo: "/placeholder.svg" },
                { name: "Ms. ", role: "Arts & Crafts Teacher", photo: "/placeholder.svg" }
              ].map((teacher, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src={teacher.photo} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-school-navy text-lg">{teacher.name}</h3>
                    <p className="text-gray-600 text-sm">{teacher.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-6">
                View our complete faculty in the dedicated Faculty page.
              </p>
              <a href="/faculty" className="inline-block px-6 py-3 bg-school-navy text-white rounded-md hover:bg-school-navy/90 transition-colors">
                View All Faculty
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default About;
