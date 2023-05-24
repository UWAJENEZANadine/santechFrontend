import React from "react";
import "../css/blogCard.css";
import { FaRegCalendarAlt } from "react-icons/fa"
import { MdOutlineTextsms } from "react-icons/md"

const BlogCard = ({ data }) => {
  return (
    <>
      <div className="d-flex blog-card-page">
        <div className="blog-card-container">
          <div className="image">
            <img src={data.image[0]} style={{ opacity: ".7" }} />
            <h1>Travel</h1>
          </div>
          <div className="card-data-detail">
          <h3>{data.title}</h3>
          <h1><FaRegCalendarAlt/> <span style={{color:"grey", marginLeft:"2rem", fontSize:"1.5rem"}} >{data.posted_date} </span> </h1>
           <hr />
          <h2><MdOutlineTextsms /> <span style={{color:"grey", marginLeft:"2rem", fontSize:"1.5rem"}} >{data.message} </span></h2>
          </div>
        </div>
        <div className="blog-card-container" style={{ marginLeft: "2rem" }}>
          <div className="image">
            <img src={data.image[0]} />
            <h1>Travel</h1>
          </div>
          <div className="card-data-detail">
          <h3 className="Text-center">{data.title}</h3>
          <h1><FaRegCalendarAlt/><span style={{color:"grey", marginLeft:"2rem", fontSize:"1.5rem"}} >{data.posted_date} </span> </h1>
          <hr />
          <h2><MdOutlineTextsms /><span style={{color:"grey", marginLeft:"2rem", fontSize:"1.5rem"}} >{data.message} </span> </h2>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default BlogCard;
