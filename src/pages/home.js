import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import { AiFillProject } from "react-icons/ai"
import { Link } from "react-router-dom";
import PageLayout from "./pageLayout";
import HomeCardBlog from "../components/HomeCardBlog";
import { BsDot } from "react-icons/bs"

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4040/post");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
      <PageLayout>
        <section className="homepage-container">
          <Carousel fade className="home-container" data-interval="1000">
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img className="d-block w-100" src={pic1} alt="First slide" />
              <Carousel.Caption>
              {/* <h3 className="carousel-content text-white display-6">
                  First slide label
                </h3> */}
                <div className="carousel-card-container carousel-content ">
                  <h1 className="text-center">Project</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    No body will remain the Identity card on entrance mostly
                    visitors, by use of E-Visitors System @NidaRwanda , It{" "}
                  </p>
                  <Button
                    
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/FbCQsE7XwAATF4L?format=jpg&name=medium"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3 className="carousel-content text-white display-6">
                  Second slide label
                </h3> */}
                <div className="carousel-card-container carousel-content">
                  <h1>Binyuza mwikoranabuhanga</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    Binyuza mwikoranabuhanga twize<a href="">@urcst</a> Ubu
                    Itsinda ry'urubyiruko( SAN TECH) ryakoze ikoranabuhanga
                  </p>
                  <Button
                    
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/FuFZBfWXwAA5m2X?format=jpg&name=medium"
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3 className="carousel-content text-white display-6">
                  Third slide label
                </h3> */}
                <div className="carousel-card-container carousel-content">
                  <h1>In SAN TECH today</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    In SAN TECH today , was a great moment with the Global
                    Engagement Institute and delegation of Pepperdine Graziadio
                  </p>
                  <Button
                  
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/FuFZBfUXsAAVBQ6?format=jpg&name=medium"
                alt="four slide"
              />

              <Carousel.Caption>
                {/* <h3 className="carousel-content text-white display-6 ">
                  Four slide label
                </h3> */}
                <div className="carousel-card-container carousel-content">
                  <h1>SAN TECH HUB</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    In SAN TECH today , was a great moment with the Global
                    Engagement Institute and delegation of Pepperdine Graziadio
                  </p>
                  <Button
                    
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/Ft_eOG_XsAAh2Tb?format=jpg&name=medium"
                alt="five slide"
              />
              <Carousel.Caption>
                {/* <h3 className="carousel-content text-white display-6">
                  Five slide label
                </h3> */}
                <div className="carousel-card-container carousel-content">
                  <h1>Last Friday 14/04/2023</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    Last Friday 14/04/2023, SAN Tech hub have witnessed a great
                    pitching session of the 2nd cohort of Level 5 participants
                  </p>
                  <Button
                    
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "80vh", backgroundColor: "rgb(0, 0, 0)" }}
            >
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/FaX8yoFXoAAdwsb?format=jpg&name=medium"
                alt="six slide"
              />

              <Carousel.Caption>
                {/* <h3 className="carousel-content text-white display-6">
                  Six slide label
                </h3> */}
                <div className="carousel-card-container carousel-content">
                  <h1>let's thank FAWE Rwanda</h1>
                  <p style={{ color: "black", marginBottom: "7rem" }}>
                    Last Friday the 12.08.2022, this happened when SAN TECH HUB
                    was launched. We may have a very big list of people to
                  </p>
                  <Button
                    
                    className="fs-5"
                    style={{
                      width: "50%",
                      padding: ".9rem",
                      borderRadius: "1px",
                      backgroundColor:"#014b7c"
                    }}
                  >
                    show more &rarr;
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="first-part">
            <div className="first-part-content d-flex justify-content-between align-items-center">
              <div className="p-5">
                <TbDeviceComputerCamera className="service-icon" />
                <h1 className="num" data-val="150"  >
                  000 
                 
                </h1>
                <span className="addition">+</span>
                <p>SanTech Hub</p>
              </div>
              <div>
                <FiCommand className="service-icon" />

                <h1 className="num" data-val="165">
                  000
                </h1>
                <span className="addition2">+</span>
                <p>E-vistors</p>
              </div>
              <div>
                <AiFillProject className="service-icon" />

                <h1 className="num" data-val="70">
                  000
                </h1>
                <span className="addition4">+</span>
                <p>Projects</p>
              </div>
              <div className="p-5">
                <GoFileSymlinkFile className="service-icon" />
                <h1 className="num" data-val="1">
                  0
                </h1>
                <span className="addition3">+</span>
                <p>Annika Technology</p>
              </div>
            </div>
          </div>
          <section className="second-part container-fluid">
            <div className="second-part-service container">
              <h1 className="core-container-header text-center">CORE PROJECTS</h1>
              <div className="row">
                <div
                  className="col p-5"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1 className="display-6">
                    <FcAbout className="about-icon" />
                    <span className="about-icon-header">SAN TECH HUB</span>
                  </h1>
                  <ul className="about-content">
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/> Provide Trainings & internship</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Access to fast internet</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Technical suppoert to students</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>ICT career guidance</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Invention & Innovation skills development</li>
                  </ul>
                </div>
                <div
                  className="col p-5"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1 className="display-6">
                    <FcElectricity className="about-icon" />
                    <span className="about-icon-header">E-vistors system </span>
                    <span className="about-icon-header-automated">Automated attendace for: </span>
                  </h1>
                  <ul className="about-content">
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Staffs</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Visitors</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Casual Workers</li>
                    <li><BsDot style={{fontSize:"3rem",color:"#014b7c"}}/>Contractors</li>
                    
                  </ul>
                  <p> <span className="about-icon-header">By use of identification Cards or Generated cards everywhere </span></p>
                </div>
                <div
                  className="col p-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1 className="display-6">
                    <FcRadarPlot className="about-icon" />
                    <span className="about-icon-header">Annika Technology</span>
                  </h1>
                  <ul className="about-content">
                    <li ><BsDot style={{fontSize:"3rem", color:"#014b7c"}}/>Value addition and climate resilient smart agriculture</li>
                    <li ><BsDot style={{fontSize:"3rem", color:"#014b7c"}}/> Agricultural  research for post-harvest</li>
                    <li ><BsDot style={{fontSize:"3rem", color:"#014b7c"}}/>High value crop for agribusiness</li>
                    <li ><BsDot style={{fontSize:"3rem", color:"#014b7c"}}/>Smart harvest drying shelters that automates the covering shapes and exposing harvest from the sun and rain</li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="latest-news-container p-4">
            <h1
              className="latest-news-container-header text-uppercase"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Latest News
            </h1>
            <div className="container home-card-blog">
              {posts.map((data) => (
                <HomeCardBlog data={data} />
              ))}
            </div>
          </div>

          <div className="Testmonial-container container-fluid">
            <h1 className="text-center mt-4">Testmonials</h1>
            <div className="Testmonial">
              <div
                className="description"
                data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="Testmonial-heading">
                  It was a great Experience
                </h2>
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
                <p
                  className="paragraph"
                  data-aos="fade-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                >
                  We had a brilliant experience working with SanTech. They
                  delivered great solutions using cutting edge techniques. The
                  quality of their work was excellent and We had a brilliant
                  experience working with SanTech. They delivered great
                  solutions using cutting edge techniques.
                </p>
                <p
                  className="paragraph"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                >
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
              <div
                className="user-reviews"
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <figure className="review">
                  <blockquote className="review__text">
                    I just wanted to share a quick note and let you know that
                    you guys do a really good job.
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
                  <Link
                    to="/story"
                    style={{ textDecoration: "none", color: "#03037f" }}
                  >
                    show all{" "}
                  </Link>{" "}
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="our-partners-container">
            <h1
              className="our-partners text-uppercase text-center font-weight-bold mb-5"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className=""
                src="https://www.girlsinict.rw/images/title-design.png"
              />
              <span className="p-5">Clients & Partners</span>
              <img
                className=""
                src="https://www.girlsinict.rw/images/title-design.png"
              />
            </h1>

            <Swiper
              className="swiper-container"
              breakpoints={{
                576: {
                  width: 350,
                  slidesPerView: 1,
                },

                768: {
                  width: 768,
                  slidesPerView: 2,
                },

                992: {
                  width: 992,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 4,
                },
                1400: {
                  width: 992,
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={2}
              navigation
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ marginTop: "6rem" }}
            >
              <SwiperSlide style={{ marginLeft: "4rem" }}>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1014071220583784448/ZGDmicJm_400x400.jpg"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/250px-Coat_of_arms_of_Rwanda.svg.png"
                    style={{ width: "93%",  height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://www.learningpassport.org/sites/unicef.org.learningpassport/files/styles/crop_thumbnail/public/partner-logo_Generation-Unlimited.png?itok=DTCZ6Hcv"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://thumbs.dreamstime.com/b/unicef-united-nations-international-children-s-emergency-fund-flag-waving-white-background-close-up-isolated-d-render-realistic-169592090.jpg"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1512032108876865536/s2MqZaRv_400x400.jpg"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://caribbean.eclac.org/sites/default/files/organizations/images/UN%20logo.png"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://thumbs.dreamstime.com/b/mastercard-logo-printed-paper-chisinau-moldova-september-mastercard-logo-printed-paper-placed-white-background-128373484.jpg"
                    style={{ width: "100%", height: "23vh" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="card partners-card"
                  style={{ width: "15rem", borderBottom: "3px solid #03037f" }}
                >
                  <img
                    src="https://www.risa.gov.rw/index.php?eID=dumpFile&t=f&f=52253&token=97a6bf4950ecf39417b4b7babc6b7a70a6712ffa"
                    style={{ width: "100%", height: "23vh" }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Home;
