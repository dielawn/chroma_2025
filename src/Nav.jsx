import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BookNowNav from './BookNowNav';
import './Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle smooth scrolling
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-brand">
                    
                    <a className='nav-name' href="#" onClick={(e) => scrollToSection(e, 'hero')}>CHROMA SALON</a>
                </div>

                {/* Mobile menu button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Navigation links */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#services" 
                       onClick={(e) => scrollToSection(e, 'services')} 
                       className="nav-link">Services</a>
                    <a href="#stylist" 
                       onClick={(e) => scrollToSection(e, 'stylists')} 
                       className="nav-link">Stylists</a>
                    <a href="#gallery" 
                        onClick={(e) => scrollToSection(e, 'gallery')} 
                        className="nav-link">Gallery</a>
                    <a href="#products" 
                       onClick={(e) => scrollToSection(e, 'products')} 
                       className="nav-link">Products</a>
                    <a href="#contact" 
                       onClick={(e) => scrollToSection(e, 'contact')} 
                       className="nav-link">Contact</a>
                     <div className="nav-book-now">
                        <BookNowNav />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;