import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ContactHeader from "../ContactHeader/ContactHeader";

function ContactForm() {
  let [data, setData] = useState({
    name: "",
    email: "",
    text: "",
  });
  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    navigate("/submitted");
  };

  return (
    <section
      className={`ui container ${styles.container}`}
      style={{ marginTop: "30px" }}
    >
      <ContactHeader />

      {/* Responsive Grid Layout */}
      <div className="ui stackable two column grid">
        <div className="column">
          <div className={styles.contact_form}>
            <div className="ui two buttons">
              <Button
                text="VIA SUPPORT CHAT"
                icon={<MdMessage fontSize="24px" />}
                className="ui fluid button"
              />
              <Button
                text="VIA CALL"
                icon={<FaPhoneAlt fontSize="24px" />}
                className="ui fluid button"
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button
                isOutline={true}
                text="VIA EMAIL FORM"
                icon={<HiMail fontSize="24px" />}
                className="ui fluid button"
              />
            </div>

            <form onSubmit={onSubmit} className="ui form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="ui input fluid"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="ui input fluid"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="text">Message</label>
                <textarea
                  name="text"
                  rows="5"
                  className="ui textarea fluid"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="ui primary fluid button" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Contact Image */}
        <div className="column">
          <img
            src="/images/contact.jpg"
            alt="Contact"
            className="ui fluid image"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
