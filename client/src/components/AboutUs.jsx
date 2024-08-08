import React from "react";
import image from "../images/secndimgg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="about-img">
            <img 
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            We are dedicated to ensuring your health and well-being.
            Our mission revolves around providing exceptional healthcare services tailored to meet your needs.
            Our dedicated team and state-of-the-art facilities offer comprehensive medical care, from preventive measures to advanced treatments.
            We prioritize your health through personalized attention, cutting-edge technology, and ongoing staff training. 
            Committed to creating a supportive environment, we aim to foster overall health and wellness through education and community outreach for a healthier, happier future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
