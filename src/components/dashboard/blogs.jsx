import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../css/LayoutDash.css";
import "../../css/techBlog.css";
import axios from "axios";
import moment from "moment";

const Blogs = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:4040/api/upload", formData);
      return res.data
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload()
    try {
      await axios.post(`http://localhost:4040/posts/`,{
        title,
        description: value,
        img: file ? imgUrl:"",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

      })
      
    } catch (err) {
      console.log(err)
      
    }
    setTitle("")
    setValue("")
    setFile("")
    setCategory("")

  };

  console.log(value);
  return (
    <div className="main-content">
      <div className="add">
        <div className="content-blog">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
            <input
              type="file"
              name=""
              id="file"
              // style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file" className="file">
              Upload image
            </label>
            <div className="buttons">
              <button>Save as draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item-blog">
            <h1>Category</h1>
            <div className="blog-radio">
              <input
                type="radio"
                name="inspiration"
                value="events"
                id="events"
                checked={category == "events"}
                onChange={(e) => setCategory(e.target.value)}
              />

              <label htmlFor="events">Events</label>
            </div>
            <div className="blog-radio">
              <input
                type="radio"
                name="inspiration"
                value="news"
                id="news"
                checked={category == "news"}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="news">News</label>
            </div>
            <div className="blog-radio">
              <input
                type="radio"
                name="inspiration"
                value="resources"
                id="resources"
                checked={category == "resources"}
                onChange={(e) => setCategory(e.target.value)}
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
