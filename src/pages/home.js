import React, { useEffect } from "react";
import "../css/home.css";
import Carousel from "react-bootstrap/Carousel";
import { FcAbout, FcElectricity, FcRadarPlot } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FiCommand } from "react-icons/fi";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { GoFileSymlinkFile } from "react-icons/go";
import pic1 from "../assets/IMG-20230508-WA0012.jpg";
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 6000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);

  return (
    <>
      <section className="homepage-container">
        <Carousel fade className="home-container" data-interval="1000">
          <Carousel.Item style={{ height: "80vh" }}>
            <img className="d-block w-100" src={pic1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="carousel-content text-white display-6">
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
              <h3 className="carousel-content text-white display-6">
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
              <h3 className="carousel-content text-white display-6">
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
              <h3 className="carousel-content text-white display-6">
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
              <h3 className="carousel-content text-white display-6">
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
              <h3 className="carousel-content text-white display-6">
                Six slide label
              </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="first-part">
          <div className="first-part-content container d-flex justify-content-between align-items-center">
            <div className="p-5">
              <TbDeviceComputerCamera className="service-icon" />
              <h1 className="num" data-val="150">
                000
              </h1>
              <p>SanTech Hub</p>
            </div>
            <div>
              <FiCommand className="service-icon" />

              <h1 className="num" data-val="164">
                000
              </h1>
              <p>E-vistors</p>
            </div>
            <div className="p-5">
              <GoFileSymlinkFile className="service-icon" />
              <h1 className="num" data-val="1">
                0
              </h1>
              <p>Annika Technology</p>
            </div>
          </div>
        </div>
        <section className="second-part container-fluid">
          <div className="second-part-service">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div className="col bg-white p-5">
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
              <div className="col bg-white p-5">
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
              <div className="col bg-white p-5">
                <h1 className="display-6">
                  <FcRadarPlot className="about-icon" />
                  <span className="about-icon-header">Annika Technology</span>
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

        <div className="latest-news-container p-4">
          <h1 className="latest-news-container-header text-uppercase">
            Latest News
          </h1>

          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5">
              <div className="col mb-5">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/Fm1dzrQWAAIxoZB?format=jpg&name=medium"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card fs-2 text-center text-uppercase fw-bold mb-5">
                      SanTech Event
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. up the bulk of the
                      card's
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".7rem" }}
                    >
                      View more &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col mb-5">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://igihe.com/local/cache-vignettes/L1000xH666/niyonzima_claudine_avuga_ko_san_tech_yiyeyemeje_guteza_imbere_ikoranabuhanga_rigamije_koroshya_zimwe_muri_serivisi_abantu_bakenera-8007e.jpg?1649864117"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card  fs-2 text-center text-uppercase fw-bold mb-5">
                      Expert{" "}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".5rem" }}
                    >
                      View more &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col mb-5">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/FvUFWOcWcAA_Rj0?format=jpg&name=4096x4096"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card  fs-2 text-center text-uppercase fw-bold mb-5">
                      Inspiration
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".7rem" }}
                    >
                      View More &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/FvRyNBWXwAACgSM?format=jpg&name=large"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card  fs-2 text-center text-uppercase fw-bold mb-5">
                      Inspiration
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".7rem" }}
                    >
                      View More &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/Ft_kVHzXsAM68MI?format=jpg&name=900x900"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card  fs-2 text-center text-uppercase fw-bold mb-5">
                      Inspiration
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".7rem" }}
                    >
                      View More &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card
                  style={{
                    width: "35rem",
                    boxShadow: ".2rem .2rem .5rem #d4d4d8",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/media/Fuz9E06WAAQEw4l?format=jpg&name=4096x4096"
                  />
                  <Card.Body>
                    <Card.Title className="latest-news-container-header-card  fs-2 text-center text-uppercase fw-bold mb-5">
                      Inspiration
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "100%", padding: ".7rem" }}
                    >
                      View More &rarr;
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="Testmonial-container container-fluid">
          <h1 className="text-center">Testmonial</h1>
          <div className="Testmonial">
            <div className="description">
              <h2 className="Testmonial-heading">It was a great Experience</h2>
              <p>
                <span>
                  <AiFillStar className="testmonial-star" />
                </span>
                <span>
                  <AiFillStar className="testmonial-star testmonial-star-2" />
                </span>
                <span>
                  <AiFillStar className="testmonial-star testmonial-star-2" />
                </span>
                <span>
                  <AiFillStar className="testmonial-star testmonial-star-2" />
                </span>
                <span>
                  <AiFillStar className="testmonial-star testmonial-star-2" />
                </span>
              </p>
              <p className="paragraph">
                We had a brilliant experience working with SanTech. They
                delivered great solutions using cutting edge techniques. The
                quality of their work was excellent and We had a brilliant
                experience working with SanTech. They delivered great
                solutions using cutting edge techniques.
              </p>
              <p className="paragraph">
                We had a brilliant experience working with SanTech. They
                delivered great solutions using cutting edge techniques. The
                quality of their work was excellent and
              </p>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friend gives testmonial.
                </p>
                <div className="recommend__friends">
                  <img
                    src="https://img.freepik.com/premium-photo/profile-side-view-man-sit-table-desk-work-pc-computer-drink-coffee_274222-20145.jpg"
                    className="recommend__photo"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224__340.jpg"
                    className="recommend__photo"
                  />
                  <img
                    src="https://st2.depositphotos.com/1017986/10233/i/950/depositphotos_102331244-stock-photo-male-friends-with-tablet-pc.jpg"
                    className="recommend__photo"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1ywcBYzCNEJ9YysSwoWiCiO-mp_h3vjybACUF1Tsxwj7jol9T5uQqg8TBKVnzWkDStE&usqp=CAU"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>
            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review__text">
                  I just wanted to share a quick note and let you know that you
                  guys do a really good job.
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src="https://img.freepik.com/premium-photo/profile-side-view-man-sit-table-desk-work-pc-computer-drink-coffee_274222-20145.jpg"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Kalisa Eric</p>
                    <p className="review__user-date">Feb 23rd,2017</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="review__text">
                  I'm glad I decided to work with you. It's really great how
                  easy your websites are update
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224__340.jpg"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Mary Thomas</p>
                    <p className="review__user-date">sept 13th,2017</p>
                  </div>
                  <div className="review__rating">9.8</div>
                </figcaption>
              </figure>
              <button className="btn-inline">
                show all <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="our-partners-container">
          <h1 className="our-partners text-uppercase text-center font-weight-bold mb-5">
            <img
              className=""
              src="https://www.girlsinict.rw/images/title-design.png"
            />
            <span className="p-5"> Our Partners</span>
            <img
              className=""
              src="https://www.girlsinict.rw/images/title-design.png"
            />
          </h1>

          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img
                  src="https://pbs.twimg.com/profile_images/1014071220583784448/ZGDmicJm_400x400.jpg"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/250px-Coat_of_arms_of_Rwanda.svg.png"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://www.learningpassport.org/sites/unicef.org.learningpassport/files/styles/crop_thumbnail/public/partner-logo_Generation-Unlimited.png?itok=DTCZ6Hcv"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/UNICEF_logo_2016.png?itok=HpdSOUoY"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://pbs.twimg.com/profile_images/1512032108876865536/s2MqZaRv_400x400.jpg"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://www.adaptation-fund.org/wp-content/uploads/2017/07/Youth-as-agents-of-Community-Development-United-Nations-Development-Programme.jpg"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>

              <div className="slide">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
              <div className="slide">
                <img
                  src="https://www.risa.org.za/static/images/risa-logo.png"
                  alt="logo"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
