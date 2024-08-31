import React from "react";
import "./CommonPageStyle.css";
import { Col, Row, Card } from "react-bootstrap";

function Testimonials() {
  return (
    <>
      <div className="p-5 fade-in">
        <Row className="mb-5">
            <Col xs={12} md={4}>
                <h3>Testimonials</h3>
            </Col>
            <Col xs={12} md={4}>
                Don't just take our word for it. Hear from our statisfied users who have experienced the transformative impact
            </Col>
            <Col xs={12} md={4}>
                Learn how this simple tool has revelutionazed their work and accelerated their success.
            </Col>

        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card
              className="rounded-5 shadow my-2"
              style={{ backgroundColor: "cyan" }}
            >
              <Card.Body className="p-3">
                <Card.Text>
                  Great design and no ads make this app a pleasure to use. I
                  would love to see my projects list on app startup and have a
                  widget for the home screen. A date picker to jump to any date
                  would also be great.
                  <div className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    Avinash
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="rounded-5 shadow my-2"
              style={{ backgroundColor: "lemonchiffon" }}
            >
              <Card.Body className="p-3">
                <Card.Text>
                  Wonderful app with no ads and visually appealing design. Would
                  love some updates like checking off entire projects and more
                  features in the free version. Looking forward to seeing this
                  app achieve great heights!
                  <div className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    study addict
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="rounded-5 shadow my-2"
              style={{ backgroundColor: "pink" }}
            >
              <Card.Body className="p-3">
                <Card.Text>
                  One of the best apps for students to enhance productivity and
                  track time. It’s lightweight with no ads, and offers
                  customisable timers and useful reports. I’m grateful for the
                  lifetime premium!
                  <div className="mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    Chytanya S Agarwal
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
