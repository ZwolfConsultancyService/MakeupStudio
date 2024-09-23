import React from 'react';
import '../pagesCss/About.css';

const About = () => {
  return (
    <div className="about-section mt-4 pt-5">
      <div className="content-container">
        <div className="logo-container pt-4">
          <h3 className="fw-bold text-dark fonts">
            About
            <span className="texts"> SB MakeUp Studio </span>
          </h3>
          <div className="row about-s pt-5">
            <div className="col-lg-4 col-md-12 pt-5 mt-2 logo-column">
              <img src="/images/pic14.jpeg" alt="Nartan Academy Logo" className="logo-img" />
            </div>
            <div className="col-lg-8 col-md-12 text-column">
              <p className="text-dark">
                Welcome to SB MakeUp Studio & Academy, your premier destination for exquisite makeup artistry. We specialize in enhancing your natural beauty and transforming your look with precision and care.
              </p>
              <p className="text-dark">
                At SB Makeup Studio, our mission is simple yet profound: to empower every client with confidence through personalized, expert makeup services. We believe that makeup is a powerful tool for self-expression and celebration of individuality.
              </p>
              <p className="text-dark">
                We use only the highest quality makeup products from trusted brands to ensure long-lasting, stunning results. Our commitment to excellence means you can relax knowing you’re receiving the best care possible.
              </p>
              <p className="text-dark">
                At SB Makeup Studio, we are committed to providing an exceptional experience from the moment you walk through our doors. Whether you’re seeking a glamorous makeover or a subtle enhancement, our friendly and professional team is here to make you feel beautiful inside and out.
              </p>
              <p className="text-dark">
                Our team of skilled makeup artists brings years of experience and a passion for creativity to every appointment. Whether you’re preparing for a wedding, special event, or simply a day to pamper yourself, we are dedicated to delivering flawless results that exceed your expectations.
              </p>
              <p className="text-dark">
                We understand that each face is unique. That’s why we offer personalized consultations to understand your preferences, style, and skincare needs. Your satisfaction and comfort are our top priorities.
              </p>
              <p className="text-dark">
                We use only the highest quality makeup products from trusted brands to ensure long-lasting, stunning results. Our commitment to excellence means you can relax knowing you’re receiving the best care possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
