
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* School Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
              <img 
                src="/sis-logo.png" 
                alt="Scottish Ideal School Logo" 
                className="w-8 h-8 rounded-full"
              />
              Scottish Ideal School
            </h3>
            <p className="text-gray-300 mb-4">
              Providing quality education to students from Nursery to Class IX since 2015.
            </p>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/sisbareta"
                className="text-white hover:text-school-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              {/* Replace '#' with your Twitter profile URL */}
              <a 
                href="#"
                className="text-white hover:text-school-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              {/* Replace '#' with your Instagram profile URL */}
              <a 
                href="#"
                className="text-white hover:text-school-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@jatadharibehera5311"
                className="text-white hover:text-school-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white flex items-center gap-1">
                  <ArrowRight size={14} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white flex items-center gap-1">
                  <ArrowRight size={14} />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-white flex items-center gap-1">
                  <ArrowRight size={14} />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/notices" className="text-gray-300 hover:text-white flex items-center gap-1">
                  <ArrowRight size={14} />
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white flex items-center gap-1">
                  <ArrowRight size={14} />
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-school-gold flex-shrink-0" />
                <span className="text-gray-300">Bareta Semapur, Katihar, Bihar - 854115, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-school-gold flex-shrink-0" />
                <span className="text-gray-300">+91 62060 01004</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-school-gold flex-shrink-0" />
                <span className="text-gray-300">sisbareta@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">School Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="container text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Scottish Ideal School. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-center md:text-right italic">Crafted with dedication by Raunak Ratan – A proud student of Scottish Ideal School</p>
            <div className="flex items-center">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
