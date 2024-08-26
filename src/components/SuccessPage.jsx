// src/components/SuccessPage.jsx
// import React from 'react';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
    return (
        <div className="container">
            <div>
                <h1 className="header_text">Hurrayyyy!!</h1>
            </div>
            <div className="gif_container">
                <img
                    src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
                    alt="Cute animated illustration"
                />
            </div>
        </div>
    );
};

export default SuccessPage;
