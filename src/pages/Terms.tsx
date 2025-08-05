
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Terms of Use - Scottish Ideal School</title>
        <meta name="description" content="Terms of Use for Scottish Ideal School website and services. Understand the conditions governing the use of our website and school services." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Terms of Use</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Welcome to the Scottish Ideal School website. These Terms of Use govern your access to and use of our website and services. By accessing or using our website, you agree to be bound by these Terms of Use.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing or using the Scottish Ideal School website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as our Privacy Policy. If you do not agree to these terms, please do not use our website.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">2. Definitions</h2>
              <p className="text-gray-700 mb-4">
                In these Terms of Use:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>"School" refers to Scottish Ideal School, its administrators, staff, and authorized representatives.</li>
                <li>"Website" refers to the website operated by Scottish Ideal School, including all content, functions, and services provided on or through the website.</li>
                <li>"User" refers to any individual who accesses or uses the website.</li>
                <li>"Content" refers to all information, text, graphics, photos, videos, software, and other materials on the website.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">3. Website Access and Use</h2>
              <p className="text-gray-700 mb-4">
                The School grants you a limited, non-exclusive, non-transferable, revocable license to access and use the website for personal, non-commercial purposes in accordance with these Terms of Use.
              </p>
              <p className="text-gray-700 mb-6">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Use the website in any way that violates any applicable local, state, national, or international law or regulation.</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website, the server on which the website is stored, or any server, computer, or database connected to the website.</li>
                <li>Use the website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the website.</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the website for any purpose, including monitoring or copying any of the material on the website.</li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the School, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-gray-700 mb-6">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes.</li>
                <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
                <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">5. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                Certain areas of the website may require registration or may otherwise ask you to provide information to participate in certain features or access certain content. If you choose to register or provide information, you agree to provide accurate and current information and to update it as necessary to maintain its accuracy.
              </p>
              <p className="text-gray-700 mb-6">
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">6. Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                Your use of the website is also subject to our Privacy Policy, which is incorporated into these Terms of Use by reference. Our Privacy Policy explains how we collect, use, and disclose information that pertains to your privacy.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">7. Links to Third-Party Websites</h2>
              <p className="text-gray-700 mb-6">
                The website may contain links to third-party websites or services that are not owned or controlled by the School. The School has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the School shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-6">
                The website is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. The School disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-gray-700 mb-6">
                The School does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the fullest extent permitted by applicable law, in no event will the School, its affiliates, officers, directors, employees, agents, or service providers be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">10. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless the School, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the website.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">11. Changes to the Terms of Use</h2>
              <p className="text-gray-700 mb-6">
                We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the website thereafter. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-6">
                These Terms of Use and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of India. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the website shall be instituted exclusively in the courts located in Kolkata, West Bengal, India.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">13. Severability</h2>
              <p className="text-gray-700 mb-6">
                If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.
              </p>
              
              <h2 className="text-2xl font-bold text-school-navy mb-4">14. Contact Information</h2>
              <p className="text-gray-700">
                Questions or comments about the website or these Terms of Use may be directed to:
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
            Last Updated: July 21 , 2025
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
