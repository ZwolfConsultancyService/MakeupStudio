import React from "react";
import '../pagesCss/AboutFounder.css';

const AboutFounder = () => {
  return (
    <section className="dance-instructor-section mt-4 p-5 bgcolor">
      <div className="container ">
        <div className="pb-5">
        <h2 className=" text-center fonts"><strong>About <span className="texts">Founder</span> </strong></h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-7 text-center text-dark">
            <h5 className="display-4 custom-heading">SHARANYA </h5>
            <h5 className="display-4 custom-heading">BISHT</h5>
            <span className="font">(Makeup Artist & Founder)</span>
          </div>
          <div className="col-md-5 text-center image">
            <img
              src="/images/founder.jpeg"
              alt="Dance Instructor"
              className="img-fluid rounded"
            />
          </div>
          <p className="mt-4 text-dark text-column text-justify">
          At SB Makeup Studio & Academy, our passion for beauty and dedication to excellence are embodied by our founder, Sharanya Bisht. With a deep-rooted love for makeup artistry and a commitment to enhancing natural beauty, Sharanya Bisht has been a driving force behind our studio’s success.

<h3 className="pt-4 pb-2 h3fonts ">Background and Expertise -</h3>

Sharanya Bisht brings 12+ years of experience in the beauty industry.

Driven by a belief that makeup is more than just an enhancement—it’s a form of self-expression and empowerment—Sharanya Bisht ensures that SB Makeup Studio & Academy embodies this philosophy in every service we offer. They have curated a team of talented artists who share their passion for creativity and dedication to client satisfaction.



As a leader in the industry, Sharanya Bisht stays ahead of trends and techniques, continuously seeking innovation and inspiration to deliver cutting-edge makeup solutions. Their vision for SB Makeup Studio & Academy is rooted in creating a welcoming space where clients can feel comfortable, confident, and beautiful.


Beyond their expertise in makeup artistry, Sharanya Bisht is committed to giving back to the community and supporting causes that uplift and empower individuals. Their dedication to ethical practices and sustainable beauty resonates throughout SB Makeup Studio & Academy.


Inspired by Sharanya Bisht's passion and expertise, SB Makeup Studio & Academy invites you to experience personalized beauty solutions that celebrate your unique style and enhance your natural radiance. Discover why Sharanya Bisht's vision has made SB Makeup Studio & Academy a trusted destination for discerning clients seeking quality and innovation in makeup artistry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
