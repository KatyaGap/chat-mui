import './App.css';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/Context/Context';

import Loader from './components/Loader';

export default function App() {
  const { auth } = useContext(AuthContext);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
