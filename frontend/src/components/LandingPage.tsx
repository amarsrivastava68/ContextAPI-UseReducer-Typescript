import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LandingPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our App</h1>
        <p className="text-gray-600 mt-4">Sign in to access your account or create a new one.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {showLogin ? <LoginForm /> : <SignupForm />}
        <button 
          onClick={handleToggle} 
          className="mt-4 text-blue-500 hover:underline">
          {showLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
