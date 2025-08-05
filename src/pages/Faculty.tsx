
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail } from 'lucide-react';

const FacultyCard = ({ 
  name, 
  role, 
  department, 
  qualification, 
  experience, 
  image, 
  email 
}: { 
  name: string; 
  role: string; 
  department: string; 
  qualification: string; 
  experience: string; 
  image: string;
  email: string;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="aspect-square bg-gray-100">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="sm:col-span-2 p-5">
          <h3 className="text-xl font-bold text-school-navy mb-1">{name}</h3>
          <p className="text-school-maroon font-medium mb-3">{role}</p>
          
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold">Department:</span> {department}</p>
            <p><span className="font-semibold">Qualification:</span> {qualification}</p>
            <p><span className="font-semibold">Experience:</span> {experience}</p>
          </div>
          
          <div className="mt-3 flex items-center gap-2">
            <Mail className="h-4 w-4 text-school-maroon" />
            <a href={`mailto:${email}`} className="text-sm text-school-navy hover:underline">
              {email}
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Faculty = () => {
  const adminFaculty = [
    {
      name: "Mrs. Kaylani Sinha",
      role: "Principal",
      department: "Administration",
      qualification: "M.Ed., B.Ed.",
      experience: "25+ years in education",
      image: "/placeholder.svg",
      email: "principal@scottishideal.edu.in"
    },
    {
      name: "Mr.",
      role: "Vice Principal & Science Coordinator",
      department: "Administration & Science",
      qualification: "Ph.D. in Physics, M.Sc., B.Ed.",
      experience: "20+ years in education",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mrs. ",
      role: "Primary Section Head",
      department: "Administration & Primary Education",
      qualification: "M.A. in Education, B.Ed.",
      experience: "18+ years in primary education",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    }
  ];
  
  const primaryFaculty = [
    {
      name: "Mrs. ",
      role: "English Teacher",
      department: "Languages",
      qualification: "M.A. in English, B.Ed.",
      experience: "12 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Mathematics Teacher",
      department: "Mathematics",
      qualification: "M.Sc. in Mathematics, B.Ed.",
      experience: "10 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
   
    {
      name: "Mr. ",
      role: "Hindi Teacher",
      department: "Languages",
      qualification: "M.A. in Hindi, B.Ed.",
      experience: "8 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Ms. ",
      role: "Arts & Crafts Teacher",
      department: "Arts",
      qualification: "B.F.A., Diploma in Art Education",
      experience: "9 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Computer Science Teacher",
      department: "Computer Science",
      qualification: "M.C.A., B.Ed.",
      experience: "7 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    }
  ];
  
  const secondaryFaculty = [
    {
      name: "Mr.",
      role: "Science Teacher (Physics)",
      department: "Science",
      qualification: "Ph.D. in Education, M.Sc. in Physics, B.Ed.",
      experience: "14 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Mathematics Department Head",
      department: "Mathematics",
      qualification: "M.Sc. in Mathematics, B.Ed.",
      experience: "16 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mrs. ",
      role: "Computer Science Teacher",
      department: "Computer Science",
      qualification: "M.Tech, B.Ed.",
      experience: "11 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Social Studies Department Head",
      department: "Social Studies",
      qualification: "M.A. in History, B.Ed.",
      experience: "18 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr.",
      role: "Science Teacher (Chemistry)",
      department: "Science",
      qualification: "Ph.D. in Chemistry, M.Sc., B.Ed.",
      experience: "13 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Science Teacher (Biology)",
      department: "Science",
      qualification: "M.Sc. in Botany, B.Ed.",
      experience: "9 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    }
  ];
  
  const specialFaculty = [
    {
      name: "Mr. ",
      role: "Physical Education Instructor",
      department: "Physical Education",
      qualification: "M.P.Ed., B.P.Ed.",
      experience: "12 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mrs. ",
      role: "Music Teacher",
      department: "Performing Arts",
      qualification: "M.A. in Music, Visharad in Classical Vocal",
      experience: "15 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mr. ",
      role: "Dance Teacher",
      department: "Performing Arts",
      qualification: "M.A. in Kathak, Diploma in Dance Education",
      experience: "10 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    
    {
      name: "Mr.",
      role: "School Counselor",
      department: "Student Welfare",
      qualification: "Ph.D. in Psychology, M.A. in Counseling Psychology",
      experience: "14 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    },
    {
      name: "Mrs. ",
      role: "Special Educator",
      department: "Student Support Services",
      qualification: "M.Ed. in Special Education, B.Ed.",
      experience: "9 years",
      image: "/placeholder.svg",
      email: "@scottishideal.edu.in"
    }
  ];
  
  return (
    <MainLayout>
      <Helmet>
        <title>Faculty - Scottish Ideal School</title>
        <meta name="description" content="Meet our dedicated team of educators and staff members at Scottish Ideal School who are committed to nurturing the potential of every student." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Our Faculty</h1>
        
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-gray-700">
            At Scottish Ideal School, we take pride in our team of highly qualified and dedicated educators who are committed to providing quality education and nurturing the potential of every student. Our faculty members bring a wealth of knowledge, experience, and passion to the classroom, creating a stimulating learning environment.
          </p>
        </div>
        
        <Tabs defaultValue="administration" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="administration">Administration</TabsTrigger>
            <TabsTrigger value="primary">Primary Section</TabsTrigger>
            <TabsTrigger value="secondary">Secondary Section</TabsTrigger>
            <TabsTrigger value="special">Specialized Faculty</TabsTrigger>
          </TabsList>
          
          <TabsContent value="administration" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-6">Administrative Team</h2>
              <p className="text-gray-700 mb-8">
                Our administrative team provides leadership and guidance to ensure the smooth functioning of the school and the implementation of our educational vision.
              </p>
              
              <div className="space-y-6">
                {adminFaculty.map((member, index) => (
                  <FacultyCard key={index} {...member} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="primary" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-6">Primary Section Faculty</h2>
              <p className="text-gray-700 mb-8">
                Our primary section faculty focuses on building strong foundations in academics and character development for our young learners from Nursery to Class V.
              </p>
              
              <div className="space-y-6">
                {primaryFaculty.map((member, index) => (
                  <FacultyCard key={index} {...member} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="secondary" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-6">Secondary Section Faculty</h2>
              <p className="text-gray-700 mb-8">
                Our secondary section faculty guides students through the crucial middle school years (Classes VI to IX), helping them develop critical thinking skills and deeper subject knowledge.
              </p>
              
              <div className="space-y-6">
                {secondaryFaculty.map((member, index) => (
                  <FacultyCard key={index} {...member} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="special" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-school-navy mb-6">Specialized Faculty</h2>
              <p className="text-gray-700 mb-8">
                Our specialized faculty members enhance the holistic development of students through physical education, arts, counseling, and support services.
              </p>
              
              <div className="space-y-6">
                {specialFaculty.map((member, index) => (
                  <FacultyCard key={index} {...member} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-school-lightgray p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-school-navy mb-6 text-center">Professional Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-school-navy mb-4">Continuous Learning</h3>
              <p className="text-gray-700 mb-4">
                We believe in the continuous professional development of our faculty. Our teachers regularly participate in workshops, seminars, and training programs to enhance their teaching skills and stay updated with the latest educational methodologies.
              </p>
              <p className="text-gray-700">
                Some of the professional development activities undertaken by our faculty include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
                <li>Subject-specific workshops conducted by educational experts</li>
                <li>Technology integration training for enhanced classroom teaching</li>
                <li>Child psychology and counseling workshops</li>
                <li>Collaborative learning sessions with other educational institutions</li>
                <li>Research and publication in educational journals</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-school-navy mb-4">Faculty Achievements</h3>
              <p className="text-gray-700 mb-4">
                Our faculty members have been recognized for their contributions to education and their subject areas. Some notable achievements include:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-school-maroon pl-4">
                  <h4 className="font-bold text-school-navy">Mr.</h4>
                  <p className="text-sm text-gray-700">Published research papers on innovative teaching methodologies in Science education. Recipient of the "Best Science Educator" award at the State Level Science Teachers' Conference, 2023.</p>
                </div>
                
                <div className="border-l-4 border-school-maroon pl-4">
                  <h4 className="font-bold text-school-navy">Mrs. </h4>
                  <p className="text-sm text-gray-700">Author of two textbooks on English language teaching. Conducted workshops on creative writing for teachers across multiple schools in the region.</p>
                </div>
                
                <div className="border-l-4 border-school-maroon pl-4">
                  <h4 className="font-bold text-school-navy">Mr. </h4>
                  <p className="text-sm text-gray-700">Developed innovative mathematics teaching aids that have been adopted by several schools. Mentor for the winning team at the National Mathematics Olympiad, 2022.</p>
                </div>
                
                <div className="border-l-4 border-school-maroon pl-4">
                  <h4 className="font-bold text-school-navy">Mrs. </h4>
                  <p className="text-sm text-gray-700">Recognized performer of classical music. Recipient of the "Cultural Contribution to Education" award by the State Cultural Department, 2024.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-6">Join Our Team</h2>
          
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We are always looking for passionate and qualified educators to join our team. If you are interested in becoming a part of Scottish Ideal School, please send your resume to <a href="mailto:careers@scottishideal.edu.in" className="text-school-maroon hover:underline">careers@scottishideal.edu.in</a>.
          </p>
          
          <a 
            href="/contact"
            className="inline-block px-6 py-3 bg-school-maroon text-white rounded-md hover:bg-school-maroon/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Faculty;
