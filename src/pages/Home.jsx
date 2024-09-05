import React, { useEffect, useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import cover from "/cover-image/coverimage-crop-new-portrait.png";
import "./CommonPageStyle.css";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import MockupAnimation from "../components/MockupAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const sectionRefs = useRef([]);
  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center container mt-5 rounded-5 shadow fade-in"
        style={{
          backgroundColor: "black",
          color: "white",
          height: "80vh",
          marginTop: "80px",
        }}
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <Row className="align-items-center h-100">
          <Col lg={1} md={2} sm={1}></Col>
          <Col lg={6} md={5} sm={12} className="text-center text-md-start">
            <h2 className="mt-5 display-4">
              Track Your Activities With a Single Click
            </h2>
            <p>
              Not having enough time for your activities?{" "}
              <span style={{ color: "#54ea54" }}>Boosted</span> lets you track
              your time and helps you work more productively.
            </p>
            <button className="btn btn-warning my-1 px-5 rounded-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.boostedproductivity.app&hl=en_US&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Get the App →
              </a>
            </button>
            <Row className="mt-4">
              <Col xs={6}>
                <div className="mt-3">
                  <div>
                    <h3>4.6</h3>
                    <p>Rating in Google Play Store</p>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="mt-3">
                  <div>
                    <h3>1M+</h3>
                    <p>Downloads</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} className="text-center">
            {/* <Image src={cover} fluid className="img-fluid custom-image"/> */}
            <MockupAnimation />
          </Col>
          <Col lg={1} md={1} sm={1}></Col>
        </Row>
      </div>

      <div
        className="container-fluid p-5"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <Features />
      </div>
      <div
        className="container-fluid p-5"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <Testimonials />
      </div>
      <div
        className="container-fluid p-5"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <Pricing />
      </div>
    </>
  );
}

export default Home;
