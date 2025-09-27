import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingParallax from './pages/LandingParallax';
// import AboutPage from './components/About';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingParallax />} />
        {/* <Route path="/blog" element={<BlogPage />} />just  */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/docs" element={<DocsPage />} /> */}
      </Routes>
    </Router>
  );
}
