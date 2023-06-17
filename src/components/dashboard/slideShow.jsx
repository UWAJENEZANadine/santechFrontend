import React, { useState } from "react";
import axios from "axios";
import "../../css/dashSlideShow.css";

const SlideShow = () => {
  const [tittle, setTittle] = useState("");
  const [captionn, setCaptionn] = useState("");
  const [file, setFile] = useState(null);


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
      await axios.post(`http://localhost:4040/homeslides`, {
        tittle,
        captionn,
        imag: file ? imgUrl : "",
      });
    } catch (err) {
      console.log(err);
    }
    setTittle("");
    setCaptionn("");
    setFile("");
  };

  // console.log(value);
  return (
    <>
      <div className="Slide-show-container">
        <h1 className="text-center text-decoration-underline mb-5">
          Upload Slide Image
        </h1>
        <div className="content-slides">
          <div>
            <input
              type="text"
              placeholder="caption Heading"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>

          <div>
            <textarea
              type="text"
              placeholder="caption Image"
              value={captionn}
              onChange={(e) => setCaptionn(e.target.value)}
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
              upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
