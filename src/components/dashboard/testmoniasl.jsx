import React from "react";
import "../../css/DashTestimonial.css";
import { Button } from "bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const Testmonials = () => {

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:4040/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      await axios.post(`http://localhost:4040/testimonial`, {
        title,
        details,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setFile("");
    setDetails("");
  };

  // console.log(value);
  return (
    <>
      <div className="Testmonial-container">
        <h1 className="text-center text-decoration-underline mb-5">
          Add Testmonials
        </h1>
        <div className="content-Testmonial">
          <div>
            <input
              type="text"
              placeholder="Full name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Type testmonial"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              name=""
              id="file"
              // style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <button type="button" class="btn btn-primary" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonials;
