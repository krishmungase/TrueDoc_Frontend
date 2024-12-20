import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 z-10">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4">
        {/* Solutions Section */}
        <div>
          <h4 className="text-lg font-bold text-black mb-4">Solutions</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Identity Verification</a></li>
            <li><a href="#" className="text-primary hover:underline">Document Checking</a></li>
            <li><a href="#" className="text-primary hover:underline">Fraud Detection</a></li>
            <li><a href="#" className="text-primary hover:underline">AI-Powered Tools</a></li>
            <li><a href="#" className="text-primary hover:underline">SDK Integration</a></li>
          </ul>
        </div>

        {/* Challenges We Solve Section */}
        <div>
          <h4 className="text-lg font-bold text-black mb-4">Challenges we solve</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Compliance</a></li>
            <li><a href="#" className="text-primary hover:underline">Customer Acquisition</a></li>
            <li><a href="#" className="text-primary hover:underline">Reducing Costs</a></li>
            <li><a href="#" className="text-primary hover:underline">Fraud Prevention</a></li>
          </ul>
        </div>

        {/* Industries Section */}
        <div>
          <h4 className="text-lg font-bold text-black mb-4">Industries</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Financial Services</a></li>
            <li><a href="#" className="text-primary hover:underline">Healthcare</a></li>
            <li><a href="#" className="text-primary hover:underline">Retail & eCommerce</a></li>
            <li><a href="#" className="text-primary hover:underline">Gaming</a></li>
            <li><a href="#" className="text-primary hover:underline">Telecommunications</a></li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h4 className="text-lg font-bold text-black mb-4">Our company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">About Us</a></li>
            <li><a href="#" className="text-primary hover:underline">Why Choose Us?</a></li>
            <li><a href="#" className="text-primary hover:underline">Partners</a></li>
            <li><a href="#" className="text-primary hover:underline">Certifications</a></li>
            <li><a href="#" className="text-primary hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-bold text-black mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Blog</a></li>
            <li><a href="#" className="text-primary hover:underline">Developer Hub</a></li>
            <li><a href="#" className="text-primary hover:underline">API Documentation</a></li>
            <li><a href="#" className="text-primary hover:underline">Support</a></li>
            <li><a href="#" className="text-primary hover:underline">Release Notes</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
