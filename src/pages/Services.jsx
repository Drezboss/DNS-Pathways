import React from 'react';
import { Shield, Users, Heart, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="page-subtitle">
            Three powerful support pathways that work together or separately
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section">
        <div className="container">
          <div className="services-intro">
            <p className="lead">
              We offer three powerful support pathways. Families can access one, two, or all three — 
              depending on what they need. Each service is designed to work alone or in combination, 
              creating a comprehensive support network around your family.
            </p>
          </div>
        </div>
      </section>

      {/* Social Care Pathway */}
      <section className="section section-alt" id="social-care">
        <div className="container">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon-large">
                <Shield size={50} />
              </div>
              <h2>Social Care Pathway</h2>
              <p className="service-tagline">
                For families who need help navigating services, safeguarding, or care assessments.
              </p>
            </div>

            <div className="service-content">
              <div className="service-features">
                <h3>What We Provide</h3>
                <ul className="feature-list">
                  <li>
                    <CheckCircle size={20} />
                    <span>Care Act & Children Act navigation</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Safeguarding advocacy</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Social worker meeting preparation</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Crisis coordination</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Multi-agency meeting support</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Care plan reviews and challenges</span>
                  </li>
                </ul>
              </div>

              <div className="service-testimonial">
                <MessageCircle size={30} />
                <blockquote>
                  "We were finally listened to — and things started moving fast."
                </blockquote>
                <cite>— Parent, Gloucester</cite>
              </div>
            </div>

            <div className="service-cta">
              <Link to="/get-support" className="btn btn-primary">
                Book Social Care Support <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Advocacy Pathway */}
      <section className="section" id="advocacy">
        <div className="container">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon-large">
                <Users size={50} />
              </div>
              <h2>Institutional Advocacy Pathway</h2>
              <p className="service-tagline">
                For education, benefits, housing, or employment system support.
              </p>
            </div>

            <div className="service-content">
              <div className="service-features">
                <h3>What We Provide</h3>
                <ul className="feature-list">
                  <li>
                    <CheckCircle size={20} />
                    <span>EHCP applications & appeals</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Benefits (PIP, DLA, UC) advocacy</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Discrimination & complaints escalation</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Tribunal preparation & documentation</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>School exclusion challenges</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Housing adaptations support</span>
                  </li>
                </ul>
              </div>

              <div className="service-testimonial">
                <MessageCircle size={30} />
                <blockquote>
                  "We won our appeal because of them. I can finally breathe."
                </blockquote>
                <cite>— Parent, Stroud</cite>
              </div>
            </div>

            <div className="service-cta">
              <Link to="/get-support" className="btn btn-primary">
                Get Advocacy Help <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Football & Family Pathway */}
      <section className="section section-alt" id="football">
        <div className="container">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon-large">
                <Heart size={50} />
              </div>
              <h2>Football & Family Pathway</h2>
              <p className="service-tagline">
                For children with SEND to build confidence and community through inclusive sport.
              </p>
            </div>

            <div className="service-content">
              <div className="service-features">
                <h3>What We Provide</h3>
                <ul className="feature-list">
                  <li>
                    <CheckCircle size={20} />
                    <span>Inclusive football sessions</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Peer play for siblings</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Family drop-in support</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>School holiday clubs</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Sensory-friendly environment</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Parent networking opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="service-testimonial">
                <MessageCircle size={30} />
                <blockquote>
                  "My son is included for the first time in his life."
                </blockquote>
                <cite>— Parent, Cheltenham</cite>
              </div>
            </div>

            <div className="service-cta">
              <Link to="/get-support#football" className="btn btn-primary">
                See Football Timetable <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Get in Touch</h3>
              <p>Call, email, or book online. We'll arrange a free 15-minute chat to understand your needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Create Your Plan</h3>
              <p>Together, we'll identify which pathways suit your family and set clear, achievable goals.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Start Support</h3>
              <p>Whether it's advocacy, football, or crisis support, we'll be there every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Access Support?</h2>
            <p>
              No waiting lists, no complicated forms. Just real help when you need it most.
            </p>
            <Link to="/get-support" className="btn btn-primary">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;