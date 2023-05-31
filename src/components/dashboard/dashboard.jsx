import React from "react";

import "../../css/LayoutDash.css";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const Dashboard = () => {
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "average rate of training in period of Month ",
        data: [2, 5, 6, 7, 3, 3, 4],
        backgroundColor: "#014b7c",
        borderWidth: 1,
        borderColor: "#000000",
      },
    ],
  };

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="analytics">
            <div className="card">
              <div className="card-head">
                <h2>1000</h2>
                <span className="las la-user-friends"></span>
              </div>
              <div className="card-progress">
                <small>User activity this month</small>
                <div className="card-indicator">
                  <div className="indicator one"></div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <h2>230</h2>
                <span className="las la-eye"></span>
              </div>
              <div className="card-progress">
                <small>Page views</small>
                <div className="card-indicator">
                  <div className="indicator two"></div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <h2>653,200</h2>
                <span className="las la-shopping-cart"></span>
              </div>
              <div className="card-progress">
                <small>Monthly revenue growth</small>
                <div className="card-indicator">
                  <div className="indicator three"></div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <h2>47,500</h2>
                <span className="las la-envelope"></span>
              </div>
              <div className="card-progress">
                <small>New E-mails received</small>
                <div className="card-indicator">
                  <div className="indicator four"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="records table-responsive">
            <div className="record-header">
              <div className="add">
                <span>Entries</span>

                <button>Add record</button>
              </div>

              <div className="browse">
                <input
                  type="search"
                  placeholder="Search"
                  className="record-search"
                />
                <select name="" id="">
                  <option value="">Status</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-body">
          <div className="chart-container">
            <MDBContainer>
              <Bar data={data} style={{ maxHeight: "600px" }} />
            </MDBContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
