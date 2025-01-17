import React from 'react';
import { Check, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import './BookingSuccess.css';

const BookingSuccess = () => {
  return (
    <div className="booking-success">
      <div className="success-container">
        {/* Success Icon */}
        <div className="success-icon-container">
          <div className="success-icon">
            <Check />
          </div>
        </div>

        {/* Success Message */}
        <div className="success-message">
          <h2>Booking Confirmed</h2>
          <p>Thank you for choosing Chroma Salon. We're looking forward to seeing you!</p>
        </div>

        {/* Reminder Info */}
        <div className="reminder-info">
          <div className="info-item">
            <Calendar className="icon" />
            <p>
              You'll receive a confirmation email with your appointment details shortly.
              We'll also send you a reminder 24 hours before your appointment.
            </p>
          </div>
          
          <div className="info-item">
            <MapPin className="icon" />
            <p>
              We're located at 123 Style Street, City, State 12345.
              Free parking is available in front of the salon.
            </p>
          </div>
        </div>

        {/* Preparation Tips */}
        <div className="prep-tips">
          <h3>Preparing for your visit</h3>
          <ul>
            <li>Please arrive 5-10 minutes before your appointment</li>
            <li>Bring reference photos if you have a specific style in mind</li>
            <li>Let us know if you have any allergies or sensitivities</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="actions">
          <a href="/" className="home-link">
            <ArrowLeft className="icon" />
            <span>Return to Homepage</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;