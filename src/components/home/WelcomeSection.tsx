
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-school-lightgray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Principal's Photo */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gray-200 relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images-sis/sis-principal.jpeg" 
                alt="Principal Kaylani Sinha" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-school-navy/90 py-3 px-4">
                <h3 className="text-white font-serif text-xl">Mrs. Kaylani Sinha</h3>
                <p className="text-school-gold text-sm">Principal, Scottish Ideal School</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-5 -left-5 w-1/2 h-1/3 border-l-4 border-t-4 border-school-gold opacity-70"></div>
            <div className="absolute -bottom-5 -right-5 w-1/2 h-1/3 border-r-4 border-b-4 border-school-gold opacity-70"></div>
          </div>
          
          {/* Welcome Text */}
          <div>
            <div className="mb-4 inline-block">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-10 bg-school-maroon"></span>
                <span className="text-school-maroon font-medium">Principal's Message</span>
              </div>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-school-navy">
              Welcome to Scottish Ideal School
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Dear Parents and Students,
              </p>
              <p className="mb-4">
                I am delighted to welcome you to Scottish Ideal School, where we strive to provide a nurturing and stimulating environment for our students to develop into well-rounded individuals with strong academic foundations and ethical values.
              </p>
              <p className="mb-4">
                At Scottish Ideal, we believe that education goes beyond textbooks. Our dedicated faculty focuses on fostering critical thinking, creativity, and character development in each child. We encourage our students to explore their interests, develop their talents, and achieve their full potential.
              </p>
              <p>
                We invite you to explore our website and learn more about our academic programs, co-curricular activities, and community initiatives. We look forward to partnering with you in your child's educational journey.
              </p>
              <p className="mt-6 text-right italic">
                Warm regards,<br />
                Kaylani Sinha
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-school-navy hover:bg-school-navy/90" asChild>
                <Link to="/about#principal" className="flex items-center gap-2">
                  Read Full Message
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

