import React from "react";
import "../css/home.css";
import Carousel from "react-bootstrap/Carousel";
import { FcAbout, FcElectricity, FcRadarPlot } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <Carousel fade className="home-container" data-interval="1000">
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FvTKHGrWAAwDv73?format=jpg&name=large"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              First slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FbCQsE7XwAATF4L?format=jpg&name=medium"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              Second slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FuFZBfWXwAA5m2X?format=jpg&name=medium"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              Third slide label
            </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FuFZBfUXsAAVBQ6?format=jpg&name=medium"
            alt="four slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              Four slide label
            </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/Ft_eOG_XsAAh2Tb?format=jpg&name=medium"
            alt="five slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              Five slide label
            </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/FaX8yoFXoAAdwsb?format=jpg&name=medium"
            alt="six slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-content text-white display-4">
              Six slide label
            </h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="second-part">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              <h1 className="display-6">
                <FcAbout className="about-icon" />
                <span className="about-icon-header">SAN TECH HUB</span>
              </h1>
              <ul className="about-content">
                <li>About</li>
                <li>online business registration</li>
                <li>Requirements</li>
                <li>Legal documents</li>
                <li>Post registration filling</li>
              </ul>
            </div>
            <div className="col">
              <h1 className="display-6">
                <FcElectricity className="about-icon" />
                <span className="about-icon-header">E-vistors system</span>
              </h1>
              <ul className="about-content">
                <li>About</li>
                <li>online business registration</li>
                <li>Requirements</li>
                <li>Legal documents</li>
                <li>Post registration filling</li>
              </ul>
            </div>
            <div className="col">
              <h1 className="display-6">
                <FcRadarPlot className="about-icon" />
                <span className="about-icon-header">E-vistors system</span>
              </h1>
              <ul className="about-content">
                <li>About</li>
                <li>online business registration</li>
                <li>Requirements</li>
                <li>Legal documents</li>
                <li>Post registration filling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4">
        <h1 className="text-center">Latest News</h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5622AQESC-7FYkRrrA/feedshare-shrink_2048_1536/0/1640688328088?e=1686182400&v=beta&t=TnsAm4JwJb_2fxbfCO1c6s7aY3KMULBSZ7Pozla4VZ0" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://igihe.com/local/cache-vignettes/L1000xH666/niyonzima_claudine_avuga_ko_san_tech_yiyeyemeje_guteza_imbere_ikoranabuhanga_rigamije_koroshya_zimwe_muri_serivisi_abantu_bakenera-8007e.jpg?1649864117" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://igihe.com/local/cache-vignettes/L1000xH833/nyuma_yo_kurangiza_muri_kaminuza_y_u_rwanda_muri_cst_bahise_bakora_ikoranabuhanga_ririnda_abantu_gutonda_imirongo_biyandikisha-7baf4.jpg?1649864117" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
