import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages/HomePages';
import AboutPage from './pages/AboutPage/AboutPage';
import EventPage from './pages/EventPage/EventPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './index.css';
import PengurusPage from './pages/PengurusPage.jsx/PengurusPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/pengurus" element={<PengurusPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
