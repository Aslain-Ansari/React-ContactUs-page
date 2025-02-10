import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="ui container"
      style={{ marginTop: "50px", textAlign: "center" }}
    >
      <h1 className="ui header">Welcome to Our Website</h1>
      <p className="ui large text">
        We are committed to providing the best services to our customers. Our
        platform ensures a seamless experience with top-notch quality and
        support. Stay connected and explore more.
      </p>

      <div
        className="ui centered card"
        style={{ padding: "20px", maxWidth: "500px", width: "100%" }}
      >
        <h3 className="ui header">Get Started Today</h3>
        <p>
          Join us and be part of something amazing. Click below to proceed to
          the form.
        </p>
        <Link to="/form" className="ui primary fluid button">
          Go to Form
        </Link>
      </div>
    </div>
  );
}

export default Home;
