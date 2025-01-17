import React, { useState } from 'react';
import { stylists } from './salon_info';

import fbIcon from './assets/f_logo_RGB-Black_58.png'
import instaIcon from './assets/Instagram_Glyph_Black.png'

import expandUp from './assets/expand_circle_up_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import expandDn from './assets/expand_circle_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'

import './Stylists.css'

const StylistCard = () => {

    const [expandedBios, setExpandedBios] = useState({});

    const toggleBio = (index) => {
        setExpandedBios(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const formatPhoneNumber = (phoneNumberString) => {
        const cleaned = phoneNumberString.toString().replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumberString;
    };

    

    return (
        <div className="stylist-container">
        <h2 className="services-title">Our Stylists</h2>
        <div className="stylist-grid">
            {stylists.map((stylist, index) => (
                <div key={index} className="stylist-card">
                    <h3 className="stylist-name">{stylist.name}</h3>
                    <p className="stylist-title">{stylist.title}</p>
                    <img src={stylist.image} alt={`${stylist.name}`} className="stylist-img" />
                    
                    <div className="stylist-contact">
                        <a href={`tel:${stylist.phone}`} className="phone-link">
                            <p>{formatPhoneNumber(stylist.phone)}</p>
                        </a>
                        {stylist.email && 
                            <a href={`mailto:${stylist.email}`} className="email-link">
                                {stylist.email}
                            </a>
                        }
                        {stylist.website && 
                            <a href={stylist.website} className="website-link">
                                {stylist.website.slice(12)}
                            </a>
                        }
                    </div>

                    <div className="bio-container">
                        <p className={`stylist-bio ${expandedBios[index] ? 'expanded' : ''}`}>
                            {stylist.bio}
                        </p>
                        <button 
                            className="read-more-btn"
                            onClick={() => toggleBio(index)}
                        >
                            {expandedBios[index] ? <img className='expand-icon' src={expandUp}/> : <img className='expand-icon' src={expandDn}/>}
                        </button>
                    </div>

                    <div className="social-links">
                        {stylist.facebook && 
                            <a href={stylist.facebook} className="fb-link">
                                <img src={fbIcon} alt="Facebook icon" className="fb-icon" />
                            </a>
                        }
                        {stylist.instagram && 
                            <a href={stylist.instagram} className="insta-link">
                                <img src={instaIcon} alt="Instagram Icon" className="insta-icon" />
                            </a>
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default StylistCard