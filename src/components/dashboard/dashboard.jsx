import React from "react";
import Chart from "react-apexcharts";
import { Table, Divider, Tag } from "antd";
import "../../css/LayoutDash.css";
import { Link } from "react-router-dom";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const Dashboard = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />
          <a className="text-success" style={{ textDecoration: "none" }}>
            Accept
          </a>
          <Divider type="vertical" />
          <a className="text-info" style={{ textDecoration: "none" }}>
            update
          </a>
          <Divider type="vertical" />
          <a className="text-danger" style={{ textDecoration: "none" }}>
            Delete
          </a>
        </span>
      ),
    },
  ];

  const data1 = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "Kigali,Nyarugenge ",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "Kigali,Gasabo",
    },
    {
      key: "3",
      name: "keza Tessy",
      age: 32,
      address: "Kigali,Nyarugenge",
    },
  ];
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "Day",
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "sun"],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="analytics">
            <div className="card card1">
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

            <div className="card card1">
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

            <div className="card card1">
              <div className="card-head">
                <h2>500</h2>
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

                <button>
                  <Link to="testmonials" style={{textDecoration:"none", color:"white"}}> Add Testmonials</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex flex-row gap-5 align-items-center">
          <div
            className="card CustomerReview p-3 mt-3"
            style={{ marginLeft: "2rem", marginBottom: "4rem" }}
          >
            <Chart options={data.options} series={data.series} type="area" />
          </div>
          <div>
            <h1 className="text-center mb-3">Applicants Tainee</h1>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
