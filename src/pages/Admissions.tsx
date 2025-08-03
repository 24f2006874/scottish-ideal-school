
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, FileText, Calendar, CheckCircle2, AlertCircle, Info } from 'lucide-react';

const Admissions = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Admissions - Scottish Ideal School</title>
        <meta name="description" content="Learn about the admissions process, eligibility criteria, key dates, and download prospectus for Scottish Ideal School." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Admissions</h1>

        <div className="bg-school-lightblue p-6 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold text-school-navy mb-4">Join Our Community of Learners</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Thank you for considering Scottish Ideal School for your child's education. We welcome students from diverse backgrounds and provide them with a nurturing environment to grow academically, socially, and emotionally.
          </p>
          <Button asChild className="bg-school-maroon hover:bg-school-maroon/90">
            <a href="#apply">Apply Now</a>
          </Button>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="process">Admission Process</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="dates">Key Dates</TabsTrigger>
            <TabsTrigger value="prospectus">Prospectus</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="mt-8">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-6">Admission Process</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex flex-col items-center text-center p-4 border rounded-md">
                    <div className="w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center mb-4">
                      <span className="text-school-navy font-bold">1</span>
                    </div>
                    <h3 className="font-bold text-school-navy mb-2">Application Submission</h3>
                    <p className="text-sm text-gray-700">
                      Complete the online application form and submit it along with the required documents and application fee.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 border rounded-md">
                    <div className="w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center mb-4">
                      <span className="text-school-navy font-bold">2</span>
                    </div>
                    <h3 className="font-bold text-school-navy mb-2">Assessment & Interview</h3>
                    <p className="text-sm text-gray-700">
                      Shortlisted candidates will be invited for an assessment and interaction with our admission committee.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 border rounded-md">
                    <div className="w-12 h-12 bg-school-lightblue rounded-full flex items-center justify-center mb-4">
                      <span className="text-school-navy font-bold">3</span>
                    </div>
                    <h3 className="font-bold text-school-navy mb-2">Admission Offer</h3>
                    <p className="text-sm text-gray-700">
                      Selected candidates will receive an admission offer. Complete the admission process by paying the required fees.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-school-navy mb-4">Required Documents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Birth certificate (original and photocopy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Four recent passport-sized photographs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transfer certificate from previous school (for Classes I-IX)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Report card of the previous academic year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Address proof of parents/guardians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Aadhar card of the student (if available)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Medical certificate of general health</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-school-navy mb-4">Application Fee</h3>
                <p className="text-gray-700 mb-6">
                  The application fee is ₹500, which is non-refundable. Payment can be made online or at the school office during working hours.
                </p>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-school-navy mb-1">Important Note</h4>
                      <p className="text-sm text-gray-700">
                        Submission of an application does not guarantee admission. The school reserves the right to accept or reject any application based on its admission criteria and availability of seats.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div id="apply" className="scroll-mt-24">
              <Card className="border-2 border-school-maroon">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-school-navy mb-4">Apply Now</h2>
                  <p className="text-gray-700 mb-6">
                    Applications for the 2025-2026 academic year are now open. Please fill out the online application form or download the PDF application form to apply.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-school-maroon hover:bg-school-maroon/90">
                      Online Application
                    </Button>
                    <Button variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                      Download Application Form (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="eligibility" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-6">Eligibility Criteria</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-school-navy mb-4">Age Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    The age requirement for admission is calculated as of March 31st of the academic year. The minimum age requirements for different classes are as follows:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-school-navy text-white">
                          <th className="border border-gray-300 px-4 py-2">Class</th>
                          <th className="border border-gray-300 px-4 py-2">Minimum Age</th>
                          <th className="border border-gray-300 px-4 py-2">Maximum Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Nursery</td>
                          <td className="border border-gray-300 px-4 py-2">3 years</td>
                          <td className="border border-gray-300 px-4 py-2">4 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Junior KG</td>
                          <td className="border border-gray-300 px-4 py-2">4 years</td>
                          <td className="border border-gray-300 px-4 py-2">5 years</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Senior KG</td>
                          <td className="border border-gray-300 px-4 py-2">5 years</td>
                          <td className="border border-gray-300 px-4 py-2">6 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class I</td>
                          <td className="border border-gray-300 px-4 py-2">6 years</td>
                          <td className="border border-gray-300 px-4 py-2">7 years</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class II</td>
                          <td className="border border-gray-300 px-4 py-2">7 years</td>
                          <td className="border border-gray-300 px-4 py-2">8 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class III</td>
                          <td className="border border-gray-300 px-4 py-2">8 years</td>
                          <td className="border border-gray-300 px-4 py-2">9 years</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class IV</td>
                          <td className="border border-gray-300 px-4 py-2">9 years</td>
                          <td className="border border-gray-300 px-4 py-2">10 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class V</td>
                          <td className="border border-gray-300 px-4 py-2">10 years</td>
                          <td className="border border-gray-300 px-4 py-2">11 years</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class VI</td>
                          <td className="border border-gray-300 px-4 py-2">11 years</td>
                          <td className="border border-gray-300 px-4 py-2">12 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class VII</td>
                          <td className="border border-gray-300 px-4 py-2">12 years</td>
                          <td className="border border-gray-300 px-4 py-2">13 years</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class VIII</td>
                          <td className="border border-gray-300 px-4 py-2">13 years</td>
                          <td className="border border-gray-300 px-4 py-2">14 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class IX</td>
                          <td className="border border-gray-300 px-4 py-2">14 years</td>
                          <td className="border border-gray-300 px-4 py-2">15 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-school-navy mb-4">Academic Requirements</h3>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <h4 className="font-bold text-school-navy mb-2">For Nursery to Class I:</h4>
                      <p className="text-gray-700">
                        Admission is based on an interaction with the child and parents to assess the child's readiness for school. No formal academic assessment is conducted at this level.
                      </p>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h4 className="font-bold text-school-navy mb-2">For Classes II to V:</h4>
                      <p className="text-gray-700">
                        Students will be assessed in English, Mathematics, and General Knowledge. The student's performance in the previous class will also be considered.
                      </p>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h4 className="font-bold text-school-navy mb-2">For Classes VI to IX:</h4>
                      <p className="text-gray-700">
                        Students will be assessed in English, Mathematics, Science, and Social Studies. A minimum of 60% aggregate in the previous academic year is required for consideration.
                      </p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-bold text-school-navy">Frequently Asked Questions</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 mt-2">
                        <div>
                          <h4 className="font-bold text-school-navy mb-1">Is there a waitlist if seats are not available?</h4>
                          <p className="text-gray-700 text-sm">
                            Yes, applicants who meet our eligibility criteria but could not be accommodated due to limited seats will be placed on a waitlist. They will be offered admission if seats become available.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-school-navy mb-1">Do you provide admission in the middle of the academic year?</h4>
                          <p className="text-gray-700 text-sm">
                            Mid-term admissions are considered only in exceptional cases, such as transfer of parents or relocation, subject to the availability of seats.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-school-navy mb-1">Is there any reservation for siblings of existing students?</h4>
                          <p className="text-gray-700 text-sm">
                            Siblings of existing students are given preference in admission, provided they meet the eligibility criteria. However, they must go through the regular admission process.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-school-navy mb-1">Do you admit students with special educational needs?</h4>
                          <p className="text-gray-700 text-sm">
                            We have a limited provision for students with mild special educational needs. Each case is considered individually based on our capacity to provide appropriate support. Parents must disclose all relevant information at the time of application.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dates" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-school-navy mb-6">Key Dates for 2025-2026 Academic Year</h2>

                <div className="flex gap-4 mb-6">
                  <Calendar className="w-12 h-12 text-school-maroon flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-school-navy mb-2">Important Dates to Remember</h3>
                    <p className="text-gray-700">
                      Please note these key dates for the upcoming admissions cycle. Applications received after the deadline may be considered only if seats are available.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Nursery to Class I */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-school-navy text-white p-3">
                      <h4 className="font-bold">For Nursery to Class I</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Online Registration Opens</span>
                        <span className="font-medium text-school-navy">September 15, 2024</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Application Deadline</span>
                        <span className="font-medium text-school-navy">November 30, 2024</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Interaction Sessions</span>
                        <span className="font-medium text-school-navy">December 10-20, 2024</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Results Announcement</span>
                        <span className="font-medium text-school-navy">January 15, 2025</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Fee Payment Deadline</span>
                        <span className="font-medium text-school-navy">January 31, 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* Class II to Class IX */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-school-maroon text-white p-3">
                      <h4 className="font-bold">For Class II to Class IX</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Online Registration Opens</span>
                        <span className="font-medium text-school-navy">October 15, 2024</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Application Deadline</span>
                        <span className="font-medium text-school-navy">December 15, 2024</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Entrance Assessment</span>
                        <span className="font-medium text-school-navy">January 10-20, 2025</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Results Announcement</span>
                        <span className="font-medium text-school-navy">February 15, 2025</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                        <span className="text-gray-700">Fee Payment Deadline</span>
                        <span className="font-medium text-school-navy">February 28, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-school-lightgray p-4 rounded-md mb-8">
                  <h3 className="text-lg font-bold text-school-navy mb-3">Academic Calendar 2025-2026</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">Academic Session Begins</h4>
                        <p className="text-sm text-gray-700">April 3, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">Summer Vacation</h4>
                        <p className="text-sm text-gray-700">May 25 to June 30, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">First Term Exams</h4>
                        <p className="text-sm text-gray-700">September 10-20, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">Autumn Break</h4>
                        <p className="text-sm text-gray-700">October 15-25, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">Final Exams</h4>
                        <p className="text-sm text-gray-700">February 20-28, 2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-school-navy rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-bold text-school-navy mb-1">Academic Session Ends</h4>
                        <p className="text-sm text-gray-700">March 20, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-md">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-school-navy mb-1">Note</h4>
                      <p className="text-sm text-gray-700">
                        All dates are subject to change. Any changes will be communicated through the school website and email to registered applicants. It is advisable to check the school website regularly for updates.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prospectus" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-school-navy mb-4">School Prospectus</h2>
                    <p className="text-gray-700 mb-6">
                      Our comprehensive prospectus provides detailed information about the school's philosophy, curriculum, facilities, admission process, fee structure, and more. Download the prospectus to learn more about what Scottish Ideal School has to offer.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <FileText className="w-8 h-8 text-school-maroon flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-school-navy mb-2">What's Inside the Prospectus?</h3>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• School history and vision</li>
                            <li>• Academic curriculum and approach</li>
                            <li>• Co-curricular activities and sports</li>
                            <li>• School infrastructure and facilities</li>
                            <li>• Admission process and eligibility criteria</li>
                            <li>• Fee structure and payment details</li>
                            <li>• School rules and regulations</li>
                            <li>• Faculty profiles and testimonials</li>
                          </ul>
                        </div>
                      </div>

                      <Button asChild className="w-full sm:w-auto bg-school-maroon hover:bg-school-maroon/90">
                        <a href="#" className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download Prospectus (PDF)
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-72 h-96 bg-gray-100 relative shadow-lg transform hover:scale-105 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-20"></div>
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div className="flex justify-center">
                          <img
                            src="/sis-logo.png"
                            alt="Scottish Ideal School Logo"
                            className="max-w-full max-h-48 object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-school-navy font-bold text-lg">PROSPECTUS</h3>
                          <p className="text-sm">2025-2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-school-navy mb-4">Fee Structure (2025-2026)</h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-school-navy text-white">
                          <th className="border border-gray-300 px-4 py-2">Class</th>
                          <th className="border border-gray-300 px-4 py-2">Admission Fee</th>
                          <th className="border border-gray-300 px-4 py-2">Annual Fee</th>
                          <th className="border border-gray-300 px-4 py-2">Tuition Fee (Per Quarter)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Nursery - KG</td>
                          <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹20,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Classes I - V</td>
                          <td className="border border-gray-300 px-4 py-2">₹20,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹25,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Classes VI - VIII</td>
                          <td className="border border-gray-300 px-4 py-2">₹25,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹30,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹17,500</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Class IX</td>
                          <td className="border border-gray-300 px-4 py-2">₹30,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹35,000</td>
                          <td className="border border-gray-300 px-4 py-2">₹20,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><span className="font-bold">Note:</span> The above fees do not include transportation, uniform, books, and stationery costs.</p>
                    <p className="mb-2"><span className="font-bold">Admission Fee:</span> One-time payment at the time of admission.</p>
                    <p className="mb-2"><span className="font-bold">Annual Fee:</span> Covers development charges, technology fee, library fee, and examination fee.</p>
                    <p><span className="font-bold">Tuition Fee:</span> Payable in four quarterly installments (April, July, October, January).</p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline" className="border-school-navy text-school-navy hover:bg-school-navy hover:text-white">
                      <a href="/contact">Contact Admissions Office</a>
                    </Button>
                    <Button asChild className="bg-school-maroon hover:bg-school-maroon/90">
                      <a href="#apply">Apply Now</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Admissions;
