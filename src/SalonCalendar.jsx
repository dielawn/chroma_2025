// // SalonCalendar.js
// import React, { useState } from 'react';
// import { Calendar, Clock, User } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import './SalonCalendar.css';

// const SalonCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);

//   // Sample salon services
//   const services = [
//     { id: 1, name: 'Haircut', duration: 60, price: 50 },
//     { id: 2, name: 'Color', duration: 120, price: 120 },
//     { id: 3, name: 'Blowout', duration: 45, price: 35 },
//   ];

//   // Generate available time slots
//   const generateTimeSlots = () => {
//     const slots = [];
//     let startTime = new Date();
//     startTime.setHours(9, 0, 0); // Salon opens at 9 AM
    
//     while (startTime.getHours() < 17) { // Salon closes at 5 PM
//       slots.push(new Date(startTime));
//       startTime = new Date(startTime.getTime() + 30 * 60000); // 30-minute intervals
//     }
//     return slots;
//   };

//   const timeSlots = generateTimeSlots();

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null); // Reset time when date changes
//   };

//   return (
//     <div className="calendar-container">
//       <Card>
//         <CardHeader>
//           <CardTitle className="calendar-title">
//             <Calendar className="calendar-icon" />
//             Salon Appointment Scheduler
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="calendar-grid">
//             {/* Services Selection */}
//             <div className="services-section">
//               <h3 className="section-title">Select Service</h3>
//               <div className="services-list">
//                 {services.map((service) => (
//                   <div
//                     key={service.id}
//                     className={`service-item ${
//                       selectedService?.id === service.id ? 'selected' : ''
//                     }`}
//                     onClick={() => setSelectedService(service)}
//                   >
//                     <div className="service-header">
//                       <span className="service-name">{service.name}</span>
//                       <span className="service-price">${service.price}</span>
//                     </div>
//                     <div className="service-duration">
//                       Duration: {service.duration} min
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Time Slots */}
//             <div className="time-section">
//               <h3 className="section-title">Select Time</h3>
//               <div className="time-slots-grid">
//                 {timeSlots.map((time, index) => (
//                   <button
//                     key={index}
//                     className={`time-slot ${
//                       selectedTime?.getTime() === time.getTime() ? 'selected' : ''
//                     }`}
//                     onClick={() => setSelectedTime(time)}
//                   >
//                     {time.toLocaleTimeString([], {
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Booking Summary */}
//           {selectedService && selectedTime && (
//             <div className="booking-summary">
//               <h3 className="section-title">Booking Summary</h3>
//               <div className="summary-details">
//                 <div className="summary-item">
//                   <Clock className="summary-icon" />
//                   <span>
//                     {selectedTime.toLocaleTimeString([], {
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </span>
//                 </div>
//                 <div className="summary-item">
//                   <User className="summary-icon" />
//                   <span>{selectedService.name} (${selectedService.price})</span>
//                 </div>
//               </div>
//               <button className="book-button">
//                 Book Appointment
//               </button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SalonCalendar;