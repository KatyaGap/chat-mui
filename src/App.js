import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
