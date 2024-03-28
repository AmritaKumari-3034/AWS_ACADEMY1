import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/index.css";
import { AuthProvider } from './components/Home/auth';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);


