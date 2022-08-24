import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import App from './App';
import AuthContextProvider from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
);
