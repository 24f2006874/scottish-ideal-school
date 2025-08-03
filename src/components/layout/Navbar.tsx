
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavMenu = [
  { title: 'Home', path: '/' },
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      { title: 'Vision & Mission', path: '/about#vision' },
      { title: 'History', path: '/about#history' },
      { title: 'Principal\'s Message', path: '/about#principal' },
      { title: 'Our Teachers', path: '/about#teachers' },
    ],
  },
  {
    title: 'Academics',
    path: '/academics',
    submenu: [
      { title: 'Curriculum', path: '/academics#curriculum' },
      { title: 'Co-Curricular', path: '/academics#co-curricular' },
      { title: 'Awards', path: '/academics#awards' },
    ],
  },
  {
    title: 'Admissions',
    path: '/admissions',
    submenu: [
      { title: 'Process', path: '/admissions#process' },
      { title: 'Eligibility', path: '/admissions#eligibility' },
      { title: 'Key Dates', path: '/admissions#dates' },
      { title: 'Download Prospectus', path: '/admissions#prospectus' },
    ],
  },
  { title: 'Notice Board', path: '/notices' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Events', path: '/events' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Faculty', path: '/faculty' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar with Login Button */}
      <div className="bg-school-navy text-white py-1">
        <div className="container flex justify-end items-center">
          <Button variant="ghost" size="sm" className="text-white " asChild>
            <Link to="/login" className="flex items-center gap-1">
              <UserCircle className="h-4 w-4" />
              Login
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/sis-logo.png" 
              alt="Scottish Ideal School Logo" 
              className="w-14 h-14"
            />
            <div>
              <h1 className="text-school-navy font-serif font-bold text-2xl leading-tight">
                Scottish Ideal <span className="text-school-maroon">School</span>
              </h1>
              <p className="text-sm italic text-gray-600">"Inspiring Minds, Shaping Futures"</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NavMenu.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-school-maroon hover:bg-gray-100 rounded-md text-sm font-medium">
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link to={subItem.path} className="w-full">
                            {subItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className="inline-block px-3 py-2 text-gray-700 hover:text-school-maroon hover:bg-gray-100 rounded-md text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <Button className="ml-4 bg-school-maroon hover:bg-school-maroon/90 text-white" asChild>
              <Link to="/admissions#apply">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 mt-2 border-t border-gray-200">
            <ul className="space-y-1">
              {NavMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <ul className="ml-6 space-y-1 mt-1 border-l-2 border-gray-100 pl-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                            onClick={toggleMenu}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <Button className="w-full bg-school-maroon hover:bg-school-maroon/90 text-white" asChild>
                  <Link to="/admissions#apply" onClick={toggleMenu}>Apply Now</Link>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
