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
            Welcome to MEDNEST, where healthcare seamlessly integrates with technology to enhance your medical experience. 
            Our mission is to create a streamlined platform for patients and healthcare providers, facilitating effortless appointment management and access to certified doctors.
            We emphasize efficiency and trust, enabling secure handling of medical records in one convenient place.
            Committed to providing a transparent and user friendly experience, we prioritize your health above all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
