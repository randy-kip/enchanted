// import React from 'react';
import './App.css';
import './styles/global.css';
import './styles/Notebook.css';

import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Notebook from './components/Notebook';
// import ProposalPage from './components/ProposalPage';  // Ensure this component exists

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notebook />} />
                {/* <Route path="/proposal" element={<ProposalPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
