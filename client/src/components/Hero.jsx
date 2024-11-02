import React from "react";
import image from "../images/firstimgg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Your Wellness,  <br />Our Commitment.
        </h1>
        <p>
        We connect you with trusted doctors and simplify healthcare.
        From booking appointments to securely managing records, we ensure your well-being with efficiency and care.
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
