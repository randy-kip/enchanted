// src/components/SuccessPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to SpotlightPage after 5 seconds (5000 milliseconds)
        const timeoutId = setTimeout(() => {
            navigate('/spotlight'); // Redirects to SpotlightPage
        }, 5000);

        // Cleanup the timeout if the component is unmounted before the timeout completes
        return () => clearTimeout(timeoutId);
    }, [navigate]);

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
