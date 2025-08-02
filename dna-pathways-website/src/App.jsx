import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>DNA Pathways CIC</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>No More Falling Through the Cracks</h2>
            <p>
              Family-centred support for when the system fails — combining expert advocacy, 
              care navigation, and inclusive football for children with additional needs.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Support Now</button>
              <button className="btn btn-secondary">Book a Free Intro Call</button>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <h2>We're DNA Pathways</h2>
            <p>
              A Community Interest Company run by professionals who've lived it. When your child 
              is excluded, your care plan is ignored, or your EHCP gets lost in the system, 
              we're the team that steps in. With social care, advocacy, and community support 
              in one place, we help families rebuild from breakdown.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Social Care Pathway</h3>
                <p>Navigate care assessments, safeguarding, and crisis coordination with expert support.</p>
              </div>
              <div className="service-card">
                <h3>Institutional Advocacy</h3>
                <p>EHCP applications, benefits appeals, and discrimination cases — we fight your corner.</p>
              </div>
              <div className="service-card">
                <h3>Football & Family</h3>
                <p>Inclusive football sessions where every child belongs, plus family support drop-ins.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 DNA Pathways CIC. All rights reserved.</p>
          <p>Email: support@dnasupport.org.uk | Based in Gloucestershire, UK</p>
        </div>
      </footer>
    </div>
  );
}

export default App;