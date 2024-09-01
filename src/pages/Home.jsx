import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import cover from "/cover-image/coverimage-crop-new-portrait.png";
import './CommonPageStyle.css'
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
function Home() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center container mt-5 rounded-5 shadow fade-in"
        style={{ backgroundColor: "black", color: "white" , height:"80vh", marginTop: "80px" }}
      >
        <Row>
          <Col lg={1} md={2} sm={1}></Col>
          <Col lg={6} md={5} sm={5}>
            <h2 className="mt-5 display-4">
              Track Your Activities With a Single Click
            </h2>
            <p className="">
              Not having enough time for your activities?.{" "}
              <span style={{ color: "#54ea54", margin: "0px", padding: "0px" }}>
                Boosted
              </span>{" "}
              let's you track your time and helps you work more productively.
            </p>
            <button className="btn btn-warning my-1 px-5 rounded-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.boostedproductivity.app&hl=en_US&pli=1"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                Get the App →
              </a>
            </button>
            <Row className="mt-4">
              <Col xs={6}>
                <div className="mt-3">
                  <div>
                    <h3> 4.6</h3>
                    <p>Rating in GooglePlayStore</p>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
              <div className="mt-3">
                  <div>
                    <h3> 1M+</h3>
                    <p>Downloads</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={5}>
            <div>
              <Image src={cover} width={"280rem"} height={"500rem"} className="img-fluid" />
            </div>
          </Col>
          <Col lg={1} md={1} sm={1}></Col>
        </Row>
      </div>
      <div className="container-fluid p-5">
      <Features/>

      </div>
      <div className="container-fluid p-5">
        <Testimonials/>
      </div>

      <div className="container-fluid p-5">
        <Pricing/>
      </div>
      
    </>
  );
}

export default Home;
