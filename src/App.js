import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedNavbar from './SharedNavbar';
import SharedFooter from './SharedFooter';
import Landing from './Landing';
import AboutUsPage from './AboutUs';
import HowItWorksPage from './HowItWorks';
import FAQPage from './FAQ';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <SharedNavbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <SharedFooter />
      </div>
    </Router>
  );
}

export default App;
