import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import PromoPage from './pages/PromoPage';
import SalesPage from './pages/SalesPage';
import PositioningPage from './pages/PositioningPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/1" element={<Navigate to="/" replace />} />
            <Route path="/2" element={<LandingPage />} />
            <Route path="/3" element={<PromoPage />} />
            <Route path="/4" element={<SalesPage />} />
            <Route path="/5" element={<PositioningPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;