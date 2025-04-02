import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const doshaQuestions = [
  {
    question: "How would you describe your body type?",
    options: ["Slim & light (Vata)", "Medium & athletic (Pitta)", "Heavy & broad (Kapha)"]
  },
  {
    question: "How is your digestion?",
    options: ["Irregular (Vata)", "Strong & fast (Pitta)", "Slow but steady (Kapha)"]
  },
  {
    question: "How do you react to stress?",
    options: ["Anxious & restless (Vata)", "Irritated & intense (Pitta)", "Calm & composed (Kapha)"]
  },
  {
    question: "What is your skin type?",
    options: ["Dry & rough (Vata)", "Sensitive & acne-prone (Pitta)", "Oily & soft (Kapha)"]
  }
];

const doshaInfo = {
  Vata: {
    characteristics: "Vata is characterized by qualities of air and space. Vata individuals are typically creative, energetic, and quick-thinking, but can be prone to anxiety and irregular habits.",
    balanceTips: "Regular routines, warm foods, calming activities, and staying warm and grounded help balance Vata."
  },
  Pitta: {
    characteristics: "Pitta embodies fire and water elements. Pitta types are usually intelligent, focused, and ambitious with strong digestion, but can be prone to irritability and inflammation.",
    balanceTips: "Cooling foods, moderate exercise, avoiding excessive heat, and practicing patience help balance Pitta."
  },
  Kapha: {
    characteristics: "Kapha represents earth and water qualities. Kapha individuals tend to be strong, calm, and compassionate, but may be prone to weight gain and resistance to change.",
    balanceTips: "Regular exercise, stimulating activities, warm and spicy foods, and variety help balance Kapha."
  }
};

const KYD = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [viewMode, setViewMode] = useState("quiz"); // quiz, result, upload
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiPrediction, setAiPrediction] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
    
    if (currentQuestion < doshaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateDosha(newAnswers);
      setViewMode("result");
    }
  };

  const calculateDosha = (answers) => {
    const doshaCount = { Vata: 0, Pitta: 0, Kapha: 0 };
    
    answers.forEach(answer => {
      if (answer.includes("Vata")) doshaCount.Vata++;
      else if (answer.includes("Pitta")) doshaCount.Pitta++;
      else if (answer.includes("Kapha")) doshaCount.Kapha++;
    });
    
    const dominantDosha = Object.keys(doshaCount).reduce((a, b) => 
      doshaCount[a] > doshaCount[b] ? a : b
    );
    
    setResult(dominantDosha);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = () => {
    // Placeholder for AI prediction
    // In a real implementation, this would call an API endpoint
    const randomDosha = ["Vata", "Pitta", "Kapha"][Math.floor(Math.random() * 3)];
    setAiPrediction(randomDosha);
  };

  const resetQuiz = () => {
    setResult(null);
    setAnswers([]);
    setCurrentQuestion(0);
    setViewMode("quiz");
    setSelectedImage(null);
    setAiPrediction(null);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./bg.png')" }}>
      <Navbar />
      
      <div className="flex justify-evenly pt-20">
        <div className="p-6 max-w-lg mx-auto mt-0 bg-white/80 bg-opacity-90 shadow-lg rounded-lg text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Know Your Dosha</h2>
          
          <div className="mb-6">
            <button 
              onClick={() => setViewMode("quiz")} 
              className={`mr-2 py-2 px-4 rounded ${viewMode === "quiz" ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Quiz
            </button>
            <button 
              onClick={() => setViewMode("upload")} 
              className={`py-2 px-4 rounded ${viewMode === "upload" ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              AI Analysis
            </button>
          </div>
          
          {viewMode === "quiz" && !result && (
            <div className="mt-5 p-4 shadow-md rounded-lg bg-white">
              <p className="text-lg font-semibold">{doshaQuestions[currentQuestion].question}</p>
              <div className="mt-4">
                {doshaQuestions[currentQuestion].options.map(option => (
                  <button 
                    key={option} 
                    className="block w-full mt-2 bg-green-700 text-white py-2 rounded hover:bg-green-600"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Question {currentQuestion + 1} of {doshaQuestions.length}
              </div>
            </div>
          )}
          
          {viewMode === "result" && result && (
            <div className="mt-5 p-4 shadow-md rounded-lg bg-white">
              <h3 className="text-2xl font-semibold text-green-800">Your Dominant Dosha: {result}</h3>
              
              <div className="mt-4 text-left p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-lg">Characteristics:</h4>
                <p className="text-gray-700">{doshaInfo[result].characteristics}</p>
                
                <h4 className="font-semibold text-lg mt-3">Balance Tips:</h4>
                <p className="text-gray-700">{doshaInfo[result].balanceTips}</p>
              </div>
              
              <button
                onClick={resetQuiz}
                className="mt-6 bg-green-700 text-white py-2 px-6 rounded hover:bg-green-600"
              >
                Take Again
              </button>
            </div>
          )}
          
          {viewMode === "upload" && (
            <div className="mt-5 p-4 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Upload Your Photo for AI Dosha Analysis</h3>
              
              <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
                {selectedImage ? (
                  <div className="mb-4">
                    <img 
                      src={selectedImage} 
                      alt="Selected" 
                      className="max-h-48 mx-auto rounded"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500 mb-4">Upload a clear photo of your face for analysis</p>
                )}
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                >
                  {selectedImage ? "Change Photo" : "Select Photo"}
                </button>
              </div>
              
              {selectedImage && !aiPrediction && (
                <button
                  onClick={handleImageSubmit}
                  className="mt-4 bg-green-700 text-white py-2 px-6 rounded hover:bg-green-600"
                >
                  Analyze Photo
                </button>
              )}
              
              {aiPrediction && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-800">AI Prediction: {aiPrediction}</h4>
                  <p className="mt-2 text-gray-700">{doshaInfo[aiPrediction].characteristics}</p>
                  
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setAiPrediction(null);
                    }}
                    className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Try Another Photo
                  </button>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">About Doshas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {Object.keys(doshaInfo).map(dosha => (
                <div key={dosha} className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-semibold">{dosha}</h4>
                  <p className="text-sm text-gray-700">{doshaInfo[dosha].characteristics.split('.')[0]}.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYD;