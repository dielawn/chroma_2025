import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import logoBlk from '/src/assets/logo-chroma-blk.png'

import StylistCard from '/src/Stylists.jsx'
import { stylists } from './salon_info';
import BookNowNav from './BookNowNav';
import {BookNowButton, BookNowLink} from './BookNow';

import Nav from './Nav';
import fbIcon from './assets/f_logo_RGB-White_58.png'
import instaIcon from './assets/Instagram_Glyph_White.png'
import './Home.css'
import Products from './Producsts';
import Gallery from './Gallery';
import chromaIcon from './assets/chroma_icon.png'
import { services } from './salon_info';

const HomePage = () => {
  // Sample services data

  return (
    <div className="homepage">
      <Nav />
      {/* Hero Section */}
      <div id="hero" className="hero">
        <div className="hero-overlay" />
       
        <div className="hero-content">
          <h1 className="hero-title">CHROMA SALON</h1>
          <p className="hero-subtitle">ELEVATE YOUR STYLE</p>
        </div>
        <img src={chromaIcon} alt="Icon" className="chromaIcon" />
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="about-title">WELCOME TO CHROMA</h2>
        <p className="about-text">
          At Chroma Salon, we pride ourselves on our commitment to a fun, luxury guest experience, with a warm welcoming atmosphere that keeps our clients returning again and again. We know you'll love it as much as we do.
        </p>
        <BookNowButton />
      </section>

      {/* Services Grid */}
      <section id="services" className="services">
        <div className="services-container">
          <h2 className="services-title">OUR SERVICES</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Stylist Section */}
      <section id='stylists'  className="stylist">
        <StylistCard />
      </section>

      <section id='gallery' className="gallery">
            <Gallery />
      </section>

      <section id="products" className='products'>
        <Products />
      </section>

      {/* Info Section */}
      <section id='info' className="info">
        <div className="info-container">
          <div>
            <h2 className="info-title">LOCATION & HOURS</h2>
            <div className="info-content  ">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <a href="https://www.google.com/maps/place/Chroma+Salon/@47.2496855,-122.483303,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe6fd442cbcebf794!8m2!3d47.2496855!4d-122.483303"> <p>1201 S Union Ave Suite 1<br />Tacoma, WA 98405</p> </a>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:2537526955"><p>(253) 752-6955</p></a>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <p>Monday - Saturday: 9am - 5pm</p>
                  <p>Sunday: Closed</p>
                  <p>*evenings available by appt</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="info-title">BOOK WITH US</h2>
            <p className="info-content">
              Ready to transform your look? Schedule your appointment online 
              or give us a call. New clients are always welcome.
            </p>
            <BookNowLink />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='footer' className="footer">
        <div className="footer-container">
          <div>
            <h3 className="footer-title">CHROMA SALON</h3>
            <p className="footer-text">Elevating beauty through exceptional service</p>
          </div>
          <div>
            <h3 className="footer-title">CONTACT</h3>
            <a href="tel:2537526955"><p className="footer-text">(253) 752-6955</p></a>
          </div>
          <div id='contact'>
            <h3 className="footer-title">FOLLOW US</h3>
            <div className="social-links">
             <a className='insta-link' href="https://www.facebook.com/ChromaSalonTacoma/"><img src={instaIcon}className="insta-icon"  alt="" /></a>
             <a className='fb-link' href="https://www.instagram.com/chromasalontacoma/"><img src={fbIcon}className="insta-icon"  alt="" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default HomePage;