import React from "react";
import "../css/techBlog.css";
import blogs from "../assets/constants/blog.json";
import BlogCard from "../components/blogCard";
import { Link } from "react-router-dom"
import PageLayout from "./pageLayout";
const Blog = () => {
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

            <h1> <Link to="/blog" className="active-blog active-blog-all">All</Link></h1>
          </div>
          <div>

            <h1> <Link to="/blog" className="active-blog" >Events</Link></h1>
          </div>
          <div>

            <h1> <Link to="/blog" className="active-blog" >News</Link></h1>
          </div>
          <div>

            <h1> <Link to="/blog" className="active-blog" >Resources</Link></h1>
          </div>
        </div>
      </div>

      <div className="blog-update-container">
        {blogs.map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
      </PageLayout>
    </>
  );
};

export default Blog;
