// BookNowButton.jsx - For the main button
import { useEffect } from 'react';
import './BookNow.css';

const BookNowButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.vagaro.com//resources/WidgetWindowLoader/OZqqD3WpD2PqFJ5y79oz34mC2PlFK9lRsiWJcyxapkUcvCu7gCmjZcoapOUcPCvdfQOW?v=TNVKEPcm3XkTEHGOqLKCH4s8a8KY7y4R5UuzpTpirmN#';
        script.async = true;

        const vagaroDiv = document.getElementById('vagaro-button');
        if (vagaroDiv) {
            vagaroDiv.appendChild(script);
        }

        return () => {
            if (vagaroDiv && script.parentNode) {
                vagaroDiv.removeChild(script);
            }
        };
    }, []);

    return (
        <div id="vagaro-button" className="vagaro">
            <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
            <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>
        </div>
    );
};

// BookNowLink.jsx - For other locations where you want the link
const BookNowLink = () => {
    return (
        <div className="vagaro-link">
            <a href="https://www.vagaro.com//chromasalon" className="book-now-link">
                Book Now
            </a>
        </div>
    );
};

export { BookNowButton, BookNowLink };