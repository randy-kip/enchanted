// import React from 'react';
import './App.css';
import './styles/global.css';

import { Routes, Route } from 'react-router-dom';
import Notebook from './components/Notebook';
import InvitePage from './components/InvitePage';
import SuccessPage from './components/SuccessPage';
import SpotlightPage from './components/SpotlightPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notebook />} />
                <Route path="/invite" element={<InvitePage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/spotlight" element={<SpotlightPage />} />
            </Routes>
        </div>
    );
}

export default App;
