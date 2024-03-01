import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SportsNewsPage from './pages/SportsNewsPage';
import BusinessNewsPage from './pages/BusinessNewsPage';
import TechNewsPage from './pages/TechNewsPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/sports' element={<SportsNewsPage />} />
      <Route exact path='/business' element={<BusinessNewsPage />} />
      <Route exact path='/tech' element={<TechNewsPage />} />
    </Routes>
  );
}

export default App;
