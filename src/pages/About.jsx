import React from 'react';
import { Heart, Shield, Users, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">
            Professionals who've lived it, supporting families through crisis
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <Target size={60} />
            </div>
            <h2>Our Mission</h2>
            <p className="mission-statement">
              To stand beside families in crisis — with expert, compassionate support 
              that breaks through red tape and builds real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="story-content">
            <h2>Who We Are</h2>
            <p>
              We're a husband-and-wife team with over 30 years' combined experience in 
              social care, safeguarding, and institutional advocacy. We're also parents 
              to a disabled child.
            </p>
            <p>
              We understand what it means to feel invisible, unheard, or blamed by the 
              very systems meant to help. DNA Pathways was built to change that.
            </p>
            <p>
              Our journey began when we faced our own battles with broken systems. We saw 
              firsthand how families fall through the cracks, how professional language 
              becomes a barrier, and how exhausted parents are expected to become experts 
              overnight.
            </p>
            <p>
              That's why we created DNA Pathways — to be the support we wished we'd had.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="differences-grid">
            <div className="difference-card">
              <div className="difference-icon">
                <Heart size={40} />
              </div>
              <h3>Professional insight with lived experience</h3>
              <p>
                We bring both professional expertise and personal understanding. 
                We've been in your shoes, and we know the system inside out.
              </p>
            </div>

            <div className="difference-card">
              <div className="difference-icon">
                <Users size={40} />
              </div>
              <h3>Work with families, not just for them</h3>
              <p>
                You're the expert on your family. We're here to amplify your voice, 
                not replace it. Every decision is made together.
              </p>
            </div>

            <div className="difference-card">
              <div className="difference-icon">
                <Shield size={40} />
              </div>
              <h3>Casework, coaching, and community combined</h3>
              <p>
                We don't just fill forms. We provide emotional support, practical coaching, 
                and a community where your family belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Dignity First</h3>
              <p>Every family deserves respect, regardless of their circumstances.</p>
            </div>
            <div className="value-item">
              <h3>No Judgment</h3>
              <p>We meet you where you are, without assumptions or blame.</p>
            </div>
            <div className="value-item">
              <h3>Persistent Advocacy</h3>
              <p>We don't give up when systems say no. We find another way.</p>
            </div>
            <div className="value-item">
              <h3>True Partnership</h3>
              <p>Your goals are our goals. Your wins are our wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>
              Let's talk about how we can support your family through whatever you're facing.
            </p>
            <a href="/get-support" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;