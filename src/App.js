import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { privateRoutes, publicRoutes } from './components/routes';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(false);
  console.log(user);
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
