import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessPage.css';

function SuccessPage() {
    const location = useLocation();
    const orderData = location.state;

    return (
        <div className="success-container">
            <header className="success-header">
                <img src="images/iteration-1-images/logo.svg" alt="Workintech Logo" className="success-logo" />
            </header>
            <main className="success-message">
                <h1>TEBRİKLER!</h1>
                <h1>SİPARİŞİNİZ ALINDI!</h1>
            </main>
        </div>
    );
}

export default SuccessPage;
