import React from 'react';
import { Briefcase, GraduationCap, Heart, Home, FileText, Phone } from 'lucide-react';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Partner With Us</h1>
          <p className="page-subtitle">
            Professional partnerships that close the gaps in support
          </p>
        </div>
      </section>

      {/* Partner Introduction */}
      <section className="section">
        <div className="container">
          <div className="partner-intro">
            <h2>Work With DNA Pathways</h2>
            <p className="lead">
              Are you a school, local authority, or NHS team looking for specialist support? 
              We offer bespoke services designed to enhance your existing provision and fill 
              the gaps where families are falling through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Partners */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Services for Professional Partners</h2>
          <div className="partner-services-grid">
            <div className="partner-service-card">
              <div className="partner-icon">
                <GraduationCap size={40} />
              </div>
              <h3>Bespoke Inclusion Training</h3>
              <p>
                Practical, trauma-informed training for school staff on supporting 
                children with SEND and their families. Based on lived experience 
                and professional expertise.
              </p>
              <ul>
                <li>SEND awareness workshops</li>
                <li>Trauma-informed approaches</li>
                <li>Family engagement strategies</li>
                <li>Crisis prevention techniques</li>
              </ul>
            </div>

            <div className="partner-service-card">
              <div className="partner-icon">
                <FileText size={40} />
              </div>
              <h3>EHCP Advocacy Workshops</h3>
              <p>
                Help your families navigate the EHCP process with confidence. 
                We provide workshops and resources that demystify applications 
                and appeals.
              </p>
              <ul>
                <li>Parent information sessions</li>
                <li>Staff training on EHCP law</li>
                <li>Template resources</li>
                <li>Appeal preparation support</li>
              </ul>
            </div>

            <div className="partner-service-card">
              <div className="partner-icon">
                <Home size={40} />
              </div>
              <h3>Family Safeguarding Consultancy</h3>
              <p>
                Expert consultation on complex cases where families need 
                multi-agency support. We help coordinate care and advocate 
                for family-centered approaches.
              </p>
              <ul>
                <li>Case consultation</li>
                <li>Multi-agency coordination</li>
                <li>Safeguarding reviews</li>
                <li>Family voice advocacy</li>
              </ul>
            </div>

            <div className="partner-service-card">
              <div className="partner-icon">
                <Heart size={40} />
              </div>
              <h3>Trauma-Informed Sport Coaching</h3>
              <p>
                Train your sports coaches and PE staff to create truly 
                inclusive environments where every child can participate 
                and thrive.
              </p>
              <ul>
                <li>Coach training programs</li>
                <li>Inclusive PE curriculum</li>
                <li>Sensory-friendly strategies</li>
                <li>Parent engagement in sport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Partner With DNA Pathways?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Lived Experience Expertise</h3>
              <p>
                We bring authentic understanding alongside professional qualifications, 
                offering insights that traditional training often misses.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Proven Track Record</h3>
              <p>
                Already working with professionals across Gloucestershire to improve 
                outcomes for families with additional needs.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Flexible Delivery</h3>
              <p>
                From one-off workshops to ongoing consultancy, we adapt our services 
                to meet your specific needs and budget.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Measurable Impact</h3>
              <p>
                Our partnerships lead to reduced exclusions, improved family engagement, 
                and better multi-agency working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Who We Work With</h2>
          <div className="partner-types">
            <div className="partner-type">
              <Briefcase size={30} />
              <h3>Schools & Academies</h3>
              <p>Primary, secondary, and special schools across Gloucestershire</p>
            </div>
            <div className="partner-type">
              <Briefcase size={30} />
              <h3>Local Authorities</h3>
              <p>Social care teams, SEND departments, and early help services</p>
            </div>
            <div className="partner-type">
              <Briefcase size={30} />
              <h3>NHS Teams</h3>
              <p>CAMHS, community pediatrics, and therapy services</p>
            </div>
            <div className="partner-type">
              <Briefcase size={30} />
              <h3>Voluntary Sector</h3>
              <p>Charities and community organizations supporting families</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="partner-cta">
            <h2>Let's Close the Gaps Together</h2>
            <p>
              Ready to explore how DNA Pathways can support your organization? 
              Let's have a conversation about your needs and how we can help.
            </p>
            <div className="partner-cta-actions">
              <a href="#" className="btn btn-primary">
                <FileText size={20} />
                Request Service Brochure
              </a>
              <a href="/get-support" className="btn btn-secondary">
                <Phone size={20} />
                Book a Partnership Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;