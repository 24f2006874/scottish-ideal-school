import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, School, User } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us - Scottish Ideal School</title>
        <meta name="description" content="Get in touch with Scottish Ideal School. Find our location, contact information, and send us a message through our contact form." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-school-navy mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you and welcoming you to the Scottish Ideal School family.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-school-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-school-navy mb-1">Phone</h3>
                  <p className="text-gray-700">+91 62060 01004</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-school-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-school-navy mb-1">Email</h3>
                  <p className="text-gray-700">sisbareta@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-school-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-school-navy mb-1">Address</h3>
                  <p className="text-gray-700">
                    Bareta Semapur, Katihar<br />
                    Bihar, India - 854115
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-school-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-school-navy mb-1">Office Hours</h3>
                  <p className="text-gray-700">Monday to Saturday: 7:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-school-navy mb-4">Important Contacts</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <School className="h-5 w-5 text-school-maroon flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-school-navy text-sm mb-1">Principal's Office</h4>
                        <p className="text-xs text-gray-700">sisbareta@gmail.com</p>
                        <p className="text-xs text-gray-700">+91 62060 01004</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <User className="h-5 w-5 text-school-maroon flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-school-navy text-sm mb-1">Admin Office</h4>
                        <p className="text-xs text-gray-700">sisbareta@gmail.com</p>
                        <p className="text-xs text-gray-700">+91 62060 01004</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-school-maroon flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-school-navy text-sm mb-1">Admissions</h4>
                        <p className="text-xs text-gray-700">sisbareta@gmail.com</p>
                        <p className="text-xs text-gray-700">+91 62060 01004</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-school-maroon flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-school-navy text-sm mb-1">Transport Office</h4>
                        <p className="text-xs text-gray-700">sisbareta@gmail.com</p>
                        <p className="text-xs text-gray-700">+91 62060 01004</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-6">Send Us a Message</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="admission">Admission Information</SelectItem>
                          <SelectItem value="fee">Fee & Payments</SelectItem>
                          <SelectItem value="academics">Academic Matters</SelectItem>
                          <SelectItem value="complaints">Complaints</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" placeholder="Please enter your message here..." rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-school-maroon hover:bg-school-maroon/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-school-lightgray p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-school-navy mb-6 text-center">Find Us</h2>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-[16/9] w-full">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-school-maroon mx-auto mb-2" />
                  <p className="text-gray-700">Google Maps will be embedded here</p>
                  <p className="text-sm text-gray-500">Bareta Semapur, Katihar, Bihar, India - 854115</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-school-navy mb-2">By Bus</h3>
                <p className="text-sm text-gray-700">
                  Several city bus routes pass near the school. The nearest bus stop is "School Road" (200 meters).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-school-navy mb-2">By Railway Station</h3>
                <p className="text-sm text-gray-700">
                  The nearest railway station is "Semapur" (1.5 km). A 15-minute walk or a short auto-rickshaw ride.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-school-navy mb-2">By Car</h3>
                <p className="text-sm text-gray-700">
                  Visitor parking is available at the school. Enter from the School Road entrance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-6">Connect With Us</h2>

          <div className="flex justify-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/sisbareta"
              className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center text-white hover:bg-school-maroon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center text-white hover:bg-school-maroon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center text-white hover:bg-school-maroon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@jatadharibehera5311"
              className="w-12 h-12 bg-school-navy rounded-full flex items-center justify-center text-white hover:bg-school-maroon transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>


          <p className="mt-4 text-gray-700">Follow us on social media for updates and news</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
