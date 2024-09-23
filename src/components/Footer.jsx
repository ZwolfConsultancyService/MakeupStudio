import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../componentCss/Footer.css';

const Footer = () => {
  return (
    <footer className="bgColor text-white mt-5">
      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="narac col-lg-4 col-md-6 mb-4 text-md-left">
            <Link to="/" className="text-decoration-none">
              <img
                src="/images/logo.jpeg"
                alt="Logo"
                className="h-10 w-10 object-contain mr-2"
                style={{
                  height: "55px",
                  width: "55px",
                  objectFit: "contain",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              />
              <span className="text-xl font-bold text-white logo-head">
                SB Makeup Studio
              </span>
            </Link>
            <p className="text-white pt-2 ptext">
              Welcome to SB MakeUp Studio & Academy, your premier destination for exquisite makeup artistry. We specialize in enhancing your natural beauty and transforming your look with precision and care. At SB MakeUp Studio & Academy, our mission is simple yet profound: to empower every client with confidence through personalized, expert makeup services. We believe that makeup is a powerful tool for self-expression and celebration of individuality.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 text-center text-md-left">
            <h1 className="h5">
              <strong>Contact Us</strong>
            </h1>
            <p className="pt-2">
              <a
                className="text-white text-decoration-none ptext"
                href="tel:+916386475068"
              >
                📞 +91 6386475068
              </a>
            </p>
            <p>
              📧{" "}
              <a
                className="text-white text-decoration-none ptext"
                href="mailto:sharanyabishtmakeovers@gmail.com"
              >
                sharanyabishtmakeovers@gmail.com
              </a>
            </p>
            <p className="ptext">
              📍2nd floor Akbari market lahanga bazar gali badlapur padav Jaunpur 222002 Uttar Pradesh
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 text-center">
            <h1 className="h5">
              <strong>Quick Links</strong>
            </h1>
            <div className="d-flex gap-5 pt-3 justify-content-center">
              <div>
                <Link
                  to="/about-us"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  About Us
                </Link>
                <Link
                  to="/our-services"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Services
                </Link>
                <Link
                  to="/our-portfolio"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Portfolio
                </Link>
              </div>
              <div>
                <Link
                  to="/terms-conditions"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/refund-policy"
                  className="text-white d-block mb-2 text-decoration-none"
                >
                  Refund Policy
                </Link>
              </div>
            </div>

            <div className="d-flex gap-4 mt-3 justify-content-center">
              <a
                href="https://youtube.com/@sharanyabishtmakeover?si=C_k9_ulGJju3hWUg"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaYoutube color="red" size={30} />
              </a>
              <a
                href="https://wa.me/916386475068"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="lightgreen" size={30} />
              </a>
              <a
                href="https://www.instagram.com/sb_makeup_studio_?igsh=em56d2p2dW5vcmZx"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#E1306C" size={30} />
              </a>
              <a
                href="https://www.facebook.com/sharanya.best?mibextid=ZbWKwL"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#1877F2" size={30} />
              </a>
              <a
                href="https://x.com/meckover?t=7kp506Z9x7Y_AlgQ6QLImA&s=09"
                target="_blank"
                className="icon-hover cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaXTwitter color="#000000" size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-secondary text-center py-3">
        <p className="mb-0 fw-bold text-white">&copy; 2024 SB Makeup Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
