import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDoamjAZTPbIiu1pjMnVdqxCiYTxPaXR6g',
    authDomain: 'chat-mui.firebaseapp.com',
    projectId: 'chat-mui',
    storageBucket: 'chat-mui.appspot.com',
    messagingSenderId: '47635667049',
    appId: '1:47635667049:web:b765a23f4427d4fd15eaf8',
    measurementId: 'G-SZP0B2S4MK',
  });
  const auth = firebase.auth();
  const analytics = getAnalytics();

  const firestore = firebase.firestore();
  return (
    <AuthContext.Provider value={{ firebase, auth, firestore }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
