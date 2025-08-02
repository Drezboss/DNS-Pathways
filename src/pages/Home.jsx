import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">No More Falling Through the Cracks</h1>
            <p className="hero-subtitle">
              Family-centred support for when the system fails — combining expert advocacy, 
              care navigation, and inclusive football for children with additional needs.
            </p>
            <div className="hero-actions">
              <Link to="/get-support" className="btn btn-primary">
                Get Support Now <ArrowRight size={20} />
              </Link>
              <a href="#book-call" className="btn btn-outline">
                Book a Free Intro Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>We're DNA Pathways</h2>
            <p className="lead">
              A Community Interest Company run by professionals who've lived it. When your child 
              is excluded, your care plan is ignored, or your EHCP gets lost in the system, 
              we're the team that steps in. With social care, advocacy, and community support 
              in one place, we help families rebuild from breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How We Help</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Shield size={40} />
              </div>
              <h3>Social Care Pathway</h3>
              <p>
                Navigate care assessments, safeguarding, and crisis coordination with expert support.
              </p>
              <Link to="/services#social-care" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={40} />
              </div>
              <h3>Institutional Advocacy</h3>
              <p>
                EHCP applications, benefits appeals, and discrimination cases — we fight your corner.
              </p>
              <Link to="/services#advocacy" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Heart size={40} />
              </div>
              <h3>Football & Family</h3>
              <p>
                Inclusive football sessions where every child belongs, plus family support drop-ins.
              </p>
              <Link to="/services#football" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Families Say</h2>
          <div className="testimonials-grid">
            <blockquote className="testimonial">
              <p>
                "DNA Pathways did more in 2 weeks than the council did in 2 years."
              </p>
              <cite>— Parent, Forest of Dean</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>
                "My son's football sessions are the highlight of his week. He feels safe, happy, and included."
              </p>
              <cite>— Parent, Cheltenham</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" id="book-call">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p className="cta-text">
              Book a free 15-minute call to discuss how we can support your family. 
              No waiting lists, no red tape — just real help when you need it.
            </p>
            <div className="cta-actions">
              <Link to="/get-support" className="btn btn-primary">
                Book Your Free Call
              </Link>
              <a href="mailto:support@dnasupport.org.uk" className="btn btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;