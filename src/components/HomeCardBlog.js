import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/home.css"
import { Link } from "react-router-dom";
const HomeCardBlog = ({ data }) => {

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  
  return (
    
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5">
        <div
          className="col mb-5"
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Card
            style={{
              width: "35rem",
              boxShadow: ".2rem .2rem .5rem #d4d4d8",
            }}
          >
            <Card.Img
              variant="top"
              src={`../uploads/${data.img}`}
              style={{ height: "38vh" }}
            />
            <Card.Body>
              <Card.Title className="latest-news-container-header-card fs-2 text-center text-uppercase fw-bold mb-5">
                SanTech Event
              </Card.Title>
              <Card.Text style={{overflow:"hidden"}}>
                {getText(data.description)}
              </Card.Text>
              <Button
                variant="primary"
                className="fs-5"
                style={{ width: "100%", padding: ".7rem" }}
              >
                <Link to="/blog" style={{textDecoration:"none", color:"white"}}> View more </Link>&rarr;
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    
  );
};

export default HomeCardBlog;
