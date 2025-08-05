
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Privacy Policy - Scottish Ideal School</title>
        <meta name="description" content="Privacy Policy of Scottish Ideal School, detailing how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Privacy Policy</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                At Scottish Ideal School, we are committed to protecting the privacy and security of personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the personal information of students, parents, staff, and visitors.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect personal information that is necessary for the primary purpose of providing educational services and maintaining a safe and effective educational environment. The types of personal information we collect include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">For Students:</span> Name, address, date of birth, gender, contact details, medical information, educational history, academic records, attendance records, behavioral information, and photographs.
                </li>
                <li>
                  <span className="font-semibold">For Parents/Guardians:</span> Name, address, contact details, relationship to student, occupation, and financial information relevant to fee payments.
                </li>
                <li>
                  <span className="font-semibold">For Staff:</span> Name, address, contact details, qualifications, employment history, professional development records, performance information, and medical information relevant to employment.
                </li>
                <li>
                  <span className="font-semibold">For Visitors and Website Users:</span> Name, contact details, organization, purpose of visit, and online identifiers such as IP addresses and cookies.
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">How We Collect Information</h2>
              <p className="text-gray-700 mb-4">
                We collect personal information through various means, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Application and enrollment forms</li>
                <li>Direct communications with individuals</li>
                <li>School activities and events</li>
                <li>School website and online platforms</li>
                <li>Third-party service providers</li>
                <li>Surveillance systems on school premises</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">How We Use Personal Information</h2>
              <p className="text-gray-700 mb-4">
                We use personal information for the following purposes:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Providing educational services and administering the school's functions</li>
                <li>Communication with students, parents, staff, and the wider community</li>
                <li>Maintaining student and staff records</li>
                <li>Planning, monitoring, and evaluating school programs</li>
                <li>Ensuring the safety and security of students, staff, and visitors</li>
                <li>Compliance with legal and regulatory obligations</li>
                <li>Processing fee payments and financial transactions</li>
                <li>Marketing and promotional activities (with consent where required)</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Disclosure of Personal Information</h2>
              <p className="text-gray-700 mb-4">
                We may disclose personal information to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>School staff who need the information to fulfill their professional responsibilities</li>
                <li>Government departments and agencies as required by law</li>
                <li>Medical professionals in case of emergencies</li>
                <li>Third-party service providers who assist us in providing educational services</li>
                <li>Other educational institutions, with consent, for student transfers</li>
                <li>Professional advisers such as lawyers, auditors, and insurance providers</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We will not disclose personal information to overseas recipients unless required by law or with explicit consent.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement reasonable security measures to protect personal information from misuse, interference, loss, unauthorized access, modification, or disclosure. These measures include physical, technical, and organizational safeguards appropriate to the sensitivity of the information.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Access and Correction</h2>
              <p className="text-gray-700 mb-6">
                Individuals have the right to access and request correction of their personal information held by the school. Requests should be made in writing to the School Principal. We will respond to such requests within a reasonable timeframe and may charge a reasonable fee for providing access.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Cookies and Website Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our website uses cookies to enhance user experience, analyze website traffic, and personalize content. Users can control cookie settings through their browser preferences. Our website may contain links to third-party websites, and we are not responsible for the privacy practices of these external sites.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Complaints</h2>
              <p className="text-gray-700 mb-6">
                If you have concerns about our handling of your personal information, please contact the School Principal. We will investigate and respond to complaints within a reasonable timeframe. If you are not satisfied with our response, you may contact the relevant privacy regulatory authority.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be available on our website, and significant changes will be communicated through appropriate channels.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> Bareta Semapur, Katihar, Bihar - 854115, India<br />
                  <span className="font-semibold">Email:</span> sisbareta@gmail.com<br />
                  <span className="font-semibold">Phone:</span> +91 62060 01004
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <p className="text-gray-700">
            Last Updated: July 21, 2025
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
