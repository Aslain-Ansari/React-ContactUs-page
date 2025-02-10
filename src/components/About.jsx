import React from "react";

function About() {
  return (
    <div
      className="ui container"
      style={{ marginTop: "50px", textAlign: "center" }}
    >
      <h1 className="ui header">About Us</h1>
      <p className="ui large text">
        We are a passionate team dedicated to delivering high-quality services
        and solutions. Our goal is to create a seamless experience for our users
        with innovation and efficiency.
      </p>

      <div
        className="ui centered card"
        style={{ padding: "20px", maxWidth: "500px", width: "100%" }}
      >
        <h3 className="ui header">Our Mission</h3>
        <p>
          Our mission is to provide reliable and user-friendly solutions that
          help people achieve their goals effortlessly. We believe in quality,
          commitment, and excellence.
        </p>
      </div>
    </div>
  );
}

export default About;
