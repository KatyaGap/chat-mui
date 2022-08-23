import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
