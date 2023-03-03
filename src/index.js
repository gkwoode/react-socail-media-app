import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './context/darkModeAPI';
import { AuthContextProvider } from './context/authAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
