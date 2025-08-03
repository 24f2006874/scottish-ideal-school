
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/images-sis/sis-welcome.jpg',
    title: 'Welcome to Scottish Ideal School',
    subtitle: 'Where Excellence Meets Education',
    buttonText: 'Explore Now',
    buttonLink: '/about'
  },
  {
    id: 2,
    image: '/images-sis/sis-campus.jpg',
    title: 'Our Campus',
    subtitle: 'Modern Facilities for Better Learning',
    buttonText: 'Tour Our Campus',
    buttonLink: '/about#campus'
  },
  {
    id: 3,
    image: '/images-sis/sis-nurturing.jpg',
    title: 'Nurturing Young Minds',
    subtitle: 'From Nursery to Class IX',
    buttonText: 'Our Academics',
    buttonLink: '/academics'
  },
  {
    id: 4,
    image: '/images-sis/sis-join.jpg',
    title: 'Join Our Family',
    subtitle: 'Admissions Open for 2025-26',
    buttonText: 'Apply Now',
    buttonLink: '/admissions#apply'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full hero-slider-height overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white p-4 animate-fadeIn">
                <h2 className="text-5xl font-serif font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl mb-8">{slide.subtitle}</p>
                <Button size="lg" className="bg-school-maroon hover:bg-school-maroon/90 text-white" asChild>
                  <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
