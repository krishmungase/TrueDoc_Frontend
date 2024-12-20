import React from "react";
import { FaUpload, FaCheckCircle, FaSearch } from "react-icons/fa";

const LandingPageSteps = () => {
  return (
    <div
      className="z-10 text-primary p-10 rounded-lg shadow-lg max-w-5xl mx-auto relative overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-10 relative z-10 animate-fade-in">
        How its Works
      </h2>

      <div className="space-y-10 relative z-10">
        {/* Step 1 */}
        <div className="bg-secondary p-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 flex items-center space-x-4">
          <div className="text-3xl text-primary">
            <FaUpload />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Step 1: Upload</h3>
            <p className="text-sm">
              Upload your document or file to start the verification process.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-secondary p-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 flex items-center space-x-4">
          <div className="text-3xl text-primary">
            <FaSearch />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Step 2: Verification</h3>
            <p className="text-sm">
              Our system will verify the uploaded document or file.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-secondary p-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 flex items-center space-x-4">
          <div className="text-3xl text-primary">
            <FaCheckCircle />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Step 3: Verified</h3>
            <p className="text-sm">
              Once verified, you will receive confirmation of the verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSteps;
