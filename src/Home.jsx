import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import logoBlk from '/src/assets/logo-chroma-blk.png'
import sign from '/src/assets/sign.webp'
import storeFront from '/src/assets/store-front.webp'
import StylistCard from '/src/Stylists.jsx'
import { stylists } from './salon_info';

const HomePage = () => {
  // Sample services data
const services = [
  {
    name: 'HAIRCUT',
    description: 'Precision cut tailored to you.',
  },
  {
    name: 'STYLE',
    description: 'Professional styling tailored to your face shape and lifestyle.',
  },
  {
    name: 'COLOR & HIGHLIGHTS',
    description: 'Full color, or dimensional highlights using premium products.',
  },
  {
    name: 'BALAYAGE',
    description: "If you're seeking a sun-kissed glow or something more dramatic yet easy to grow out, you'll want to schedule a balayage appointment with one of our highly trained artists.",
  },
  {
    name: 'AIRBRUSH TANNING',
    description: 'Airbrush tanning is a popular choice for those who want a natural-looking, sun-kissed glow without the harmful effects of UV rays.'
  }
];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay" />
       
        <div className="hero-content">
          <h1 className="hero-title">CHROMA SALON</h1>
          <p className="hero-subtitle">ELEVATE YOUR STYLE</p>
        </div>
      </div>

      {/* About Section */}
      <section className="about">
        <h2 className="about-title">WELCOME TO CHROMA</h2>
        <p className="about-text">
          At Chroma Salon, we pride ourselves on our commitment to a fun, luxury guest experience, with a warm welcoming atmosphere that keeps our clients returning again and again. We know you'll love it as much as we do.
        </p>
        <button className="button">BOOK NOW</button>
      </section>

      {/* Services Grid */}
      <section className="services">
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

      <div></div>

      {/* Stylist Section */}
      <section className="stylist">
        <div className="stylist-container">
          <h2 className="services-title">Our Stylists</h2>
         <div className="stylist-grid">
          {stylists.map((stylist, index) => (
            <div key={index} className="stylist-card">
              <h3 className="stylist-name">{stylist.name}</h3>
              
            </div>
          ))}
         </div>

        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="info-container">
          <div>
            <h2 className="info-title">LOCATION & HOURS</h2>
            <div className="info-content">
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
            <button className="button">SCHEDULE NOW</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h3 className="footer-title">CHROMA SALON</h3>
            <p className="footer-text">Elevating beauty through exceptional service</p>
          </div>
          <div>
            <h3 className="footer-title">CONTACT</h3>
            <a href="tel:2537526955"><p className="footer-text">(253) 752-6955</p></a>
          </div>
          <div>
            <h3 className="footer-title">FOLLOW US</h3>
            <div className="social-links">
              <button className="social-link">Instagram</button>
              <button className="social-link">Facebook</button>
              <button className="social-link">Pinterest</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default HomePage;