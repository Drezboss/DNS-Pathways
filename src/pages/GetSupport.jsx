import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Users, School, Heart } from 'lucide-react';
import './GetSupport.css';

const GetSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will get back to you within 24 hours.');
  };

  return (
    <div className="get-support">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Get Support</h1>
          <p className="page-subtitle">
            We're here to help. Reach out in whatever way works best for you.
          </p>
        </div>
      </section>

      {/* Referral Info */}
      <section className="section">
        <div className="container">
          <div className="referral-info">
            <h2>We Accept Referrals From:</h2>
            <div className="referral-sources">
              <div className="referral-card">
                <Users size={30} />
                <h3>Parents & Carers</h3>
                <p>Self-refer directly — no waiting lists</p>
              </div>
              <div className="referral-card">
                <School size={30} />
                <h3>Schools & SENCOs</h3>
                <p>Professional referrals welcome</p>
              </div>
              <div className="referral-card">
                <Heart size={30} />
                <h3>Health & Social Services</h3>
                <p>GPs, social workers, youth services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Ways to Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <Calendar size={40} />
              <h3>Book a Free Call</h3>
              <p>15-minute intro call to discuss your needs</p>
              <a href="#contact-form" className="btn btn-primary">Book Now</a>
            </div>

            <div className="contact-card">
              <Phone size={40} />
              <h3>Call Us</h3>
              <p>Mon-Fri, 9am-5pm</p>
              <a href="tel:+441234567890" className="contact-link">01234 567 890</a>
            </div>

            <div className="contact-card">
              <Mail size={40} />
              <h3>Email Us</h3>
              <p>We respond within 24 hours</p>
              <a href="mailto:support@dnasupport.org.uk" className="contact-link">support@dnasupport.org.uk</a>
            </div>

            <div className="contact-card">
              <MapPin size={40} />
              <h3>Location</h3>
              <p>Based in Gloucestershire</p>
              <span className="contact-link">Supporting families countywide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" id="contact-form">
        <div className="container">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p className="form-intro">
              Tell us a bit about your situation and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Which service are you interested in?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Please select...</option>
                  <option value="social-care">Social Care Pathway</option>
                  <option value="advocacy">Institutional Advocacy</option>
                  <option value="football">Football & Family</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="unsure">Not Sure Yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help? *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your situation and what support you're looking for..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Football Timetable */}
      <section className="section section-alt" id="football">
        <div className="container">
          <h2 className="section-title">Football Sessions</h2>
          <div className="timetable">
            <div className="timetable-card">
              <h3>Cheltenham</h3>
              <p><strong>Saturdays</strong> 10:00 - 11:30 AM</p>
              <p>All abilities welcome, ages 5-16</p>
            </div>
            <div className="timetable-card">
              <h3>Gloucester</h3>
              <p><strong>Sundays</strong> 2:00 - 3:30 PM</p>
              <p>Inclusive sessions with sibling play</p>
            </div>
            <div className="timetable-card">
              <h3>Holiday Clubs</h3>
              <p><strong>School Holidays</strong> Various times</p>
              <p>Full day programs with lunch included</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Do you charge for services?</h3>
              <p>We offer a sliding scale based on what families can afford. No one is turned away due to inability to pay.</p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you help?</h3>
              <p>We aim to respond within 24 hours and can often start support within a week. Crisis support is available immediately.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with other agencies?</h3>
              <p>Yes, we regularly collaborate with schools, social services, and health teams to ensure coordinated support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetSupport;