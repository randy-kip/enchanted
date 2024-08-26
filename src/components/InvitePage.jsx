// src/components/InvitePage.jsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InvitePage.css';

const InvitePage = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/success'); // Navigate to a success page
    };

    const moveButton = () => {
        const noButton = document.getElementById('noButton');
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    };

    return (
        <div className="container">
            <div>
                <h1 className="header_text">Be my Girl</h1>
            </div>
            <div className="gif_container">
                <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                    alt="Cute animated illustration"
                />
            </div>
            <div className="buttons">
                <button className="btn" id="yesButton" onClick={nextPage}>
                    Yes
                </button>
                <button
                    className="btn"
                    id="noButton"
                    onMouseOver={moveButton}
                    onClick={moveButton}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default InvitePage;
