import React from "react";
import "../css/blogCard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";
const BlogCard = ({ data }) => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <>
      <div className="row blog-card-page">
        <div className="blog-card-container">
          <div className="image">
            <img src={`../uploads/${data.img}`} style={{ opacity: ".7" }} />

            <h1>News</h1>
          </div>
          <div className="card-data-detail">
            <h3>{getText(data.title)}</h3>
            <p>{getText(data.description)}</p>
            <button className="button-blog">
              <Link to={`/post/${data.id}`} style={{textDecoration:"none"}}>Read More </Link>
              <span>&rarr;</span>
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
                <span>{data?.posted_time}</span>.{moment(data.date).fromNow()}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
