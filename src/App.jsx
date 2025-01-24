import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages/HomePages';
import AboutPage from './pages/AboutPage/AboutPage';
import DepartementPage from './pages/DepartementPage/DepartementPage';
import EventPage from './pages/EventPage/EventPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './index.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/departement" element={<DepartementPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
