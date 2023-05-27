import React from "react";
import "../css/blogCard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";

const BlogCard = ({ data }) => {
  return (
    <>
      <div className="d-flex blog-card-page">
        <div className="blog-card-container">
          <div className="image">
            <img src={data.image[0]} style={{ opacity: ".7" }} />
            <h1>News</h1>
          </div>
          <div className="card-data-detail">
            <h3>{data.title[0]}</h3>
            <p>{data.detail}</p>
            <button className="btn-inline">
              Read More <span>&rarr;</span>
            </button>

            <hr />
            <h1>
              <FaRegCalendarAlt />
              <span
                style={{
                  color: "grey",
                  marginLeft: "2rem",
                  fontSize: "1.5rem",
                }}
              >
                <span>{data.posted_time}</span>.{data.posted_date}{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="blog-card-container" style={{ marginLeft: "2rem" }}>
          <div className="image">
            <img src={data.image[1]} />
            <h1>News</h1>
          </div>
          <div className="card-data-detail">
            <h3 className="Text-center">
              <span>{data.title[1]}</span>
            </h3>
            <p>{data.detail}</p>
            <button className="btn-inline">
              Read More <span>&rarr;</span>
            </button>

            <hr />
            <h1>
              <FaRegCalendarAlt />
              <span
                style={{
                  color: "grey",
                  marginLeft: "2rem",
                  fontSize: "1.5rem",
                }}
              >
               <span>{data.posted_time}</span>.{data.posted_date}{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
