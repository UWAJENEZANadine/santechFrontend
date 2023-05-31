import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/LayoutDash.css";
import "../../css/techBlog.css";

const Blogs = () => {
  const [fname, setFname] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="main-content form-container-part">
      <div className="container mt-3 py-5 form-container">
      
        <h1>New blogs<span> post Entery</span></h1>
        <Form className="card px-5 py-5 form-party" >
          <Form.Group className="mb-5">
            <Form.Control
              type="text"
              placeholder="Blog title"
              name="fname"
              onChange={(event) => {
                setFname(event.target.value);
              }}
              style={{ height: "6vh", fontSize: "1.5rem" }}
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <textarea
              className="form-control"
              placeholder="description"
              rows="5"
              style={{fontSize: "1.5rem" }}
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Control
              type="date"
              id="start"
              min="2000-01-01"
              max="2023-12-31"
              name="fname"
              onChange={(event) => {
                setFname(event.target.value);
              }}
              style={{ height: "6vh", fontSize: "1.5rem" }}
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Control
              type="time"
              id="appt"
              min="09:00"
              max="18:00"
              onChange={(event) => {
                setFname(event.target.value);
              }}
              style={{ height: "6vh", fontSize: "1.5rem" }}
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Control
              type="file"
              placeholder="Boh image"
              name="photo"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
              style={{ height: "6vh", fontSize: "1.6rem" }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "40%" }}>
            upload
          </Button>
        </Form>
      </div>
    </div>
 
  );
};

export default Blogs;
