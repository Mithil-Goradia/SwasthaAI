import React, { useState } from "react";
import Navbar from "../components/Navbar";

const NatureScan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      setResponse({
        plantName: "Neem",
        benefits: "Neem leaves are known for their antibacterial and antifungal properties.",
        uses: "Used in skincare, dental care, and for boosting immunity."
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100"
    style={{ 
        backgroundImage: "url('./bg2.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}>
      <Navbar />
      <div className="max-w-5xl mx-auto py-10 px-5 bg-white/80 mt-20 rounded-xl">
        <h1 className="text-4xl font-bold text-green-900 text-center">NatureScan</h1>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Experience the power of nature through AI-powered scanning and analysis of natural herbs, plants, and their medicinal properties.
        </p>

        {/* Image Upload Box */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-center">
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button
            onClick={handleUpload}
            className="bg-green-900 text-white py-2 px-4 rounded-lg"
            disabled={!selectedFile || isLoading}
          >
            {isLoading ? "Analyzing..." : "Upload & Scan"}
          </button>
        </div>

        {/* AI Response Box */}
        {response && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-900">🌿 Scan Result</h2>
            <p className="mt-2"><strong>Plant Name:</strong> {response.plantName}</p>
            <p className="mt-2"><strong>Benefits:</strong> {response.benefits}</p>
            <p className="mt-2"><strong>Uses:</strong> {response.uses}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NatureScan;
