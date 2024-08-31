import React from "react";
import "./CommonPageStyle.css";
function Pricing() {
  return (
    <>
      <div className="container-fluidp-2">
        <div
          className="bg-dark rounded-5 shadow p-5 fade-in"
          style={{ color: "white" }}
        >
          <h3>Choose premium plan to unlock more features</h3>
          <div className="d-flex align-items-center justify-content-center">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Free</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time Tracking</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Tasks</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Timers</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Calender</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Organizing Projects with 50+ color badges</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>Free</td>
                  <td>
                    <strong>$9.99</strong> life time
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="d-flex flex-column align-items-start justify-content-center text-center text-md-start mb-3 mb-md-0">
              <h3>Try it now</h3>
              <p>
                The very first step to improve your time management is tracking
                your time. Start today for FREE!
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src="/pricing.png"
                className="img-fluid"
                style={{ maxWidth: "10rem", maxHeight: "30rem" }}
                alt="Pricing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
