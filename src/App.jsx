// import React from 'react';
import './App.css';
import './styles/global.css';
import './styles/Notebook.css';

import { Routes, Route } from 'react-router-dom';
import InvitePage from './components/InvitePage';
import SuccessPage from './components/SuccessPage';
import Notebook from './components/Notebook';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notebook />} />
                <Route path="/invite" element={<InvitePage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </div>
    );
}

export default App;
