import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../css/LayoutDash.css";
import "../../css/techBlog.css";

const Blogs = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="main-content">
      <div className="add">
        <div className="content-blog">
          <input type="text" placeholder="Title" />
          <div className="editor-container">
            <ReactQuill
              theme="snow"
              className="editor"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu-blog">
          <div className="item-blog">
            <h1>Publish</h1>
            <span style={{ fontSize: "1.3rem" }}>
              <b>Status:</b> Draft
            </span>
            <span style={{ fontSize: "1.3rem" }}>
              <b>Visibility:</b> Public
            </span>
            <input type="file" name="" id="file" style={{ display: "none" }} />
            <label htmlFor="file" className="file">
              Upload image
            </label>
            <div className="buttons">
              <button>Save as draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item-blog">
            <h1>Category</h1>
            <div className="blog-radio">
              <input type="radio" name="inspiration" value="art" id="events" />

              <label htmlFor="events">Events</label>
            </div>
            <div className="blog-radio">
              <input type="radio" name="inspiration" value="art" id="news" />
              <label htmlFor="news">News</label>
            </div>
            <div className="blog-radio">
              <input
                type="radio"
                name="inspiration"
                value="art"
                id="resources"
              />
              <label htmlFor="resources">Resources</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
