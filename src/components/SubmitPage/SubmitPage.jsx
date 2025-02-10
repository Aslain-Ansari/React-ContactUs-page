import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
  let navigate = useNavigate();
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div
        className="ui centered grid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="ui card" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="image">
            <img
              src="/images/smiley-thanks.jpg"
              alt="Thank You"
              className="ui fluid image"
            />
          </div>
          <div className="content" style={{ textAlign: "center" }}>
            <div className="header">Thank You!</div>
            <div className="description">
              Your request is submitted! We will get back to you soon.
            </div>
          </div>
        </div>

        <button
          className="ui primary fluid button"
          style={{ marginTop: "20px", maxWidth: "200px" }}
          onClick={() => navigate("/home")}
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};

export default SubmitPage;
