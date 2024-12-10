import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicyPage from './pages/PrivacyPolicy';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Route pour la page d'accueil */}
                <Route path="/" element={<Home />} />

                {/* Route pour la politique de confidentialité */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
