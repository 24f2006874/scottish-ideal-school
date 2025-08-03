
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, Phone, FileText } from 'lucide-react';

const quickLinks = [
  {
    title: 'Admissions',
    description: 'Find information about admission process and requirements',
    icon: GraduationCap,
    link: '/admissions',
    color: 'bg-blue-500'
  },
  {
    title: 'Notice Board',
    description: 'Stay updated with the latest news and announcements',
    icon: Calendar,
    link: '/notices',
    color: 'bg-green-500'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with us for any inquiries',
    icon: Phone,
    link: '/contact',
    color: 'bg-purple-500'
  },
  {
    title: 'Downloads',
    description: 'Access and download important documents and forms',
    icon: FileText,
    link: '/downloads',
    color: 'bg-orange-500'
  }
];

const QuickLinks = () => {
  return (
    <section className="py-16 tartan-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-school-navy">Quick Links</h2>
          <p className="text-gray-600 mt-2">Fast access to important information</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link to={link.link} key={index} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px] h-full">
                <div className={`${link.color} p-4 text-white flex justify-center`}>
                  <link.icon className="h-10 w-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-school-navy group-hover:text-school-maroon transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
