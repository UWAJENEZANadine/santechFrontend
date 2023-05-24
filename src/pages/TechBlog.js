import React from "react";
import "../css/techBlog.css";
import blogs from "../assets/constants/blog.json";
import BlogCard from "../components/blogCard";
import blogUpdate from "../assets/blog.PNG"
const Blog = () => {
  return (
    <>
   
      <div className="top-part-blog container">
        <div className="row top-part-blog-combine ">
          <div className="col-sm-12 col-md-6 mb-3">
            <div className="top-part-blog-row">
              <img
                className="blog-image-container"
                src="https://pbs.twimg.com/media/Fwatpa9aUA0nvM1?format=jpg&name=4096x4096"
                style={{ width: "100%", height: "65vh" }}
              />
              <h1 className="text-white">Featured</h1>
              <p className="text-white">
                SAN TECH was founded by young Rwandan Software Engineers to
                contribute to the national
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div>
              <div className="top-part-blog-row blog-left-side">
                <img
                  className="blog-image-container"
                  src="https://pbs.twimg.com/media/Fm1dzrQWAAIxoZB?format=jpg&name=medium"
                  style={{ width: "100%", height: "34vh" }}
                />
                <h1 className="text-white">Internship</h1>
                <p className="text-white">
                  SAN TECH was founded by young 
                </p>
                <p className="user-date">Feb 23rd,2017</p>
              </div>
            </div>
            <div className="row py-3">
              <div className="col">
                <div className=" top-part-blog-row blog-left-side-bottom">
                  <img
                    className="blog-image-container"
                    src="https://pbs.twimg.com/media/Fwf47fpXoAI-Uc1?format=jpg&name=large"
                    style={{ width: "100%", height: "30vh" }}
                  />
                  <h1 className="text-white">Conference</h1>
                  <p className="text-white">
                    SAN TECH was founded by young
                  </p>
                  <p className="user-date">Feb 23rd,2017</p>
                </div>
              </div>
              <div className="col">
                <div className=" top-part-blog-row blog-left-side-bottom-right">
                  <img
                    className="blog-image-container"
                    src="https://pbs.twimg.com/media/Fwf48kRX0AAg1pZ?format=jpg&name=large"
                    style={{ width: "100%", height: "30vh" }}
                  />
                  <h1 className="text-white">Others</h1>
                  <p className="text-white">
                    SAN TECH was founded by young 
                  </p>
                  <p className="user-date">Feb 23rd,2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
        <div className="blog-update-container">
        <img src={blogUpdate}  style={{height:"5vh"}}/>
          {blogs.map((data) => (
            <BlogCard data={data} />
          ))}
        </div>

     
      
    </>
  );
};

export default Blog;
