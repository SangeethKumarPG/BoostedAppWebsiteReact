import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-evenly mb-3 mt-5">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img
            alt=""
            src="./boosted-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Boosted
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <Link to="/features" style={{ textDecoration: "none", color: "black" }}>
          Features
        </Link>
        <Link
          to="/testimonials"
          style={{ textDecoration: "none", color: "black" }}
        >
          Testimonials
        </Link>
        <Link to="/pricing" style={{ textDecoration: "none", color: "black" }}>
          Pricing
        </Link>
        <a href="https://www.instagram.com/boosted_productivity/" target="_blank" style={{textDecoration:"none", color:"black"}}>Instagram</a>
        <a href="mailto:app.boosted@gmail.com" style={{textDecoration:"none", color:"black"}}>Contact us</a>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <p style={{color:"grey", fontSize:"0.75rem"}}>Copyright ©️ 2024 Boosted</p>
      </div>
    </>
  );
}

export default Footer;
