import React, { useState } from "react";
import axios from "axios";

const OurPartners = () => {
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
      await axios.post(`http://localhost:4040/partner`, {
        img: file ? imgUrl : "",
      });
    } catch (err) {
      console.log(err);
    }

    setFile("");
  };
  return (
    <>
      <div className="Testmonial-container">
        <h1 className="text-center text-decoration-underline mb-5">
          Clients & Partners
        </h1>
        <div className="content-Testmonial">
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

export default OurPartners;
