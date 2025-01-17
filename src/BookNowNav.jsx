import { useEffect } from 'react';
import './BookNow.css';

const BookNowNav = () => {
    
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://www.vagaro.com//resources/WidgetWindowLoader/OZqqD3WpD2PqFJ5y79oz34mC2PlFK9lRsiWJcyxapkUcvCu7gCmjZcoapOUcPCvdfQOW?v=TNVKEPcm3XkTEHGOqLKCH4s8a8KY7y4R5UuzpTpirmN#";
        script.async = true;
        
        // Add script to the vagaro div instead of body
        const vagaroDiv = document.getElementById('vagaro-widget');
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
        <div 
            id="vagaro-widget"
            className="vagaro" 
            style={{
                width: '250px',
                padding: 0,
                border: 0,
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '14px',
                color: '#AAA'
            }}
        >
            <a href="https://www.vagaro.com/pro/" style={{fontSize: '14px', color: '#AAA', textDecoration: 'none'}}>
                Powered by Vagaro
            </a>
            &nbsp;
            <a href="https://www.vagaro.com/pro/salon-software" style={{fontSize: '14px', color: '#AAA', textDecoration: 'none'}}>
                Salon Software
            </a>
            ,&nbsp;
            <a href="https://www.vagaro.com/pro/spa-software" style={{fontSize: '14px', color: '#AAA', textDecoration: 'none'}}>
                Spa Software
            </a>
            &nbsp;&amp;&nbsp;
            <a href="https://www.vagaro.com/pro/fitness-software" style={{fontSize: '14px', color: '#AAA', textDecoration: 'none'}}>
                Fitness Software
            </a>
        </div>
    );
};

export default BookNowNav;