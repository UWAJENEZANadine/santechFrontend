import React, { useEffect } from "react";
import "../css/techBlog.css";
// import blogs from "../assets/constants/blog.json";
import BlogCard from "../components/blogCard";
import { Link } from "react-router-dom";
import PageLayout from "./pageLayout";
import { useState } from "react";
import axios from "axios";
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4040/post");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <PageLayout>
        <div className="Tech-container">
          <div
            className="container-fluid Tech-container-head"
            style={{ backgroundColor: "#000" }}
          >
            <div className="text-white align-items-center Tech-container-content">
              <div className="mb-5 ">
                <h1 className="text-center">News, Events & Resources </h1>
              </div>
            </div>
          </div>
          <div className="d-sm-flex flex-row header-update">
            <div>
              <h1>
                {" "}
                <Link to="/blog" className="active-blog active-blog-all">
                  All
                </Link>
              </h1>
            </div>
            <div>
              <h1>
                {" "}
                <Link to="/blog" className="active-blog">
                  Events
                </Link>
              </h1>
            </div>
            <div>
              <h1>
                {" "}
                <Link to="/blog" className="active-blog">
                  News
                </Link>
              </h1>
            </div>
            <div>
              <h1>
                {" "}
                <Link to="/blog" className="active-blog">
                  Resources
                </Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card-data-displayed">
           
                {posts.map((data) => (
                  <BlogCard data={data} />
                ))}
              </div>
            </div>
          
      </PageLayout>
    </>
  );
};

export default Blog;
