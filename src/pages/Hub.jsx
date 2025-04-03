import React, { useState } from "react";
import Navbar from "../components/Navbar";

const doctors = [
  {
    id: 1,
    name: "Dr. Ramesh Sharma",
    specialization: "Ayurvedic General Physician",
    experience: "10+ years",
    rating: 4.8,
    image: "./doc1.png",
  },
  {
    id: 2,
    name: "Dr. Sneha Patel",
    specialization: "Herbal Medicine Expert",
    experience: "8+ years",
    rating: 4.7,
    image: "./doc2.png",
  },
  {
    id: 3,
    name: "Dr. Aman Verma",
    specialization: "Panchakarma Specialist",
    experience: "12+ years",
    rating: 4.9,
    image: "./doc3.png",
  },
];

const Hub = () => {
  const [activeTab, setActiveTab] = useState("doctors");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [articles] = useState([
    { id: 1, title: "Basics of Ayurveda", content: "Learn about the foundational principles of Ayurveda." },
    { id: 2, title: "Herbal Remedies", content: "Discover natural remedies for common ailments." },
    { id: 3, title: "Panchakarma Detox", content: "Understand the Ayurvedic cleansing process." },
  ]);

  const handleSendMessage = () => {
    if (input.trim() || file) {
      setMessages([...messages, { text: input, file }]);
      setInput("");
      setFile(null);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold text-green-900 text-center">AyuCare Hub</h1>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Book consultations with top Ayurvedic doctors, get AI-based health checks, and explore our knowledge library.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-5 mt-6">
          {[
            { key: "doctors", label: "Doctors" },
            { key: "ai", label: "AI Check" },
            { key: "library", label: "Library" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`py-2 px-4 rounded-lg font-bold border-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-green-900 text-white border-green-900"
                  : "border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Doctors Section */}
        {activeTab === "doctors" && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold text-center mt-3">{doctor.name}</h3>
                <p className="text-gray-500 text-center">{doctor.specialization}</p>
                <p className="text-gray-600 text-center text-sm">{doctor.experience}</p>
                <p className="text-yellow-500 text-center mt-2">⭐ {doctor.rating}</p>
                <button className="mt-4 bg-green-900 text-white py-2 px-4 rounded-lg w-full hover:bg-green-700 transition-all">
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        )}

        {/* AI Chat Section */}
        {activeTab === "ai" && (
          <div className="mt-10 bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-900">AI Ayurvedic Assistant</h3>
            <div className="border border-gray-300 rounded-md p-4 h-64 overflow-y-auto mt-4">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">Ask your doubts and let AI assist you..</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className="mb-3 p-2 bg-gray-100 rounded-md">
                    <p>{msg.text}</p>
                    {msg.file && <p className="text-sm text-blue-500">📎 {msg.file.name}</p>}
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 p-2 rounded-lg">📎</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-lg"
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage} className="bg-green-900 text-white py-2 px-4 rounded-lg">Send</button>
            </div>
          </div>
        )}

        {/* Library Section */}
        {activeTab === "library" && (
            <div className="bg-white p-5 rounded-lg shadow-lg mt-5">
              <h3 className="text-2xl font-semibold text-green-800">📚 Ayurvedic Library</h3>
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full border border-gray-300 p-2 rounded-lg mt-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="mt-4">
                {articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase())).map((article) => (
                  <div key={article.id} className="flex justify-between p-3 bg-gray-100 rounded-lg mb-3">
                    <div>
                        <h4 className="text-lg font-semibold">{article.title}</h4>
                        <p className="text-gray-600">{article.content}</p>
                    </div>
                    <button className="py-1 px-4 bg-green-800 text-white rounded-xl font-light mr-3">view</button>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Hub;