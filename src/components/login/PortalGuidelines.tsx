
import React from 'react';

const PortalGuidelines = () => {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold text-school-navy mb-4 text-center">Portal Guidelines</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-school-navy mb-2">Security Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Keep your login credentials confidential.</li>
            <li>• Change your password regularly.</li>
            <li>• Log out after completing your session, especially on shared devices.</li>
            <li>• Do not share your account with others.</li>
            <li>• Ensure you are logging into the official school website (check the URL).</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-school-navy mb-2">Technical Requirements</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Use updated browsers: Chrome, Firefox, Safari, or Edge.</li>
            <li>• Enable cookies and JavaScript for full functionality.</li>
            <li>• Minimum Internet speed: 1 Mbps</li>
            <li>• Supported devices: Computers, tablets, and smartphones.</li>
            <li>• For optimal experience, use a device with at least a 10-inch screen.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          For technical support or assistance, please contact our IT support team at <a href="mailto:sisbareta@gmail.com" className="text-school-maroon hover:underline">sisbareta@gmail.com</a> or call +91 62060 01004 during school hours.
        </p>
      </div>
    </div>
  );
};

export default PortalGuidelines;
