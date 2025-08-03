
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-school-navy to-school-navy/90 text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Ready to Join Our School?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Take the first step towards an exceptional education journey for your child. Applications for the 2025-26 academic year are now open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-school-maroon hover:bg-school-maroon/90 min-w-[160px]" 
            asChild
          >
            <Link to="/admissions#apply">Apply Now</Link>
          </Button>
          <Button 
            size="lg" 
            // variant="outline" 
            className="border-white text-white hover:bg-white hover:text-school-navy min-w-[160px]" 
            asChild
          >
            <Link to="/about">Know More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
