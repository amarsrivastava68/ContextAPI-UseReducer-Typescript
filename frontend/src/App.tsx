import React from 'react';
import LandingPage from './components/LandingPage';
import { AuthProvider } from './context/AuthContext';
const App: React.FC = () => {
  return (
    <AuthProvider>
    <div className="App">
      <LandingPage />
    </div>
    </AuthProvider>
  );
}

export default App;
