import React from "react";
import image from "../images/firstimgg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Your Wellness,  <br />
          Our Commitment.
        </h1>
        <p>
        We are dedicated to ensuring your well-being through personalized care and holistic health solutions.
        We empower individuals to achieve optimal health through innovative solutions and compassionate care.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
