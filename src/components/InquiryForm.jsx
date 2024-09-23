import React, { useState } from "react";
import "../componentCss/InquiryForm.css";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const InquiryForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, contact, message });

    const serviceId = "service_zwvv09h";
    const templateId = "template_qggr3v3";
    const publicKey = "lSj6_9eJBFjwET4K4";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_contact: contact,
      to_name: "SB Makeup Studio",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Enquiry sent successfully!", response);
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
        toast.success("Enquiry sent successfully! We will contact you soon.");
        onClose(); 
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="inquiry-form-overlay">
      <div className="inquiry-form">
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <h2><strong>Enquiry <span className="texts">Form</span></strong></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="tel"
              value={contact}
              onChange={handleContactChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
