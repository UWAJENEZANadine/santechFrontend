import React from "react";
import "../css/story.css";
import Button from "react-bootstrap/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
const Story = () => {
  return (
    <>
      <div className="Success-Story-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ marginTop: "6rem" }}
        >
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black"  data-aos="fade-up-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="540"
                    height="315"
                    src="https://www.youtube.com/embed/UX1opjeTeOw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> SAN TECH was founded </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/feH7Qj3E2r8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> Santech Industries </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="540"
                    height="315"
                    src="https://www.youtube.com/embed/UX1opjeTeOw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> SAN TECH was founded </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="540"
                    height="315"
                    src="https://www.youtube.com/embed/UX1opjeTeOw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> SAN TECH was founded </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="540"
                    height="315"
                    src="https://www.youtube.com/embed/UX1opjeTeOw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> SAN TECH was founded </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "4rem" }}>
            <div className="Success-Story-whole-part ">
              <h1 className="text-center text-black">
                Success <span style={{ color: "#03037f" }}> Stories </span>
              </h1>
              <div className="d-sm-flex flex-row justify-content-around align-items-center">
                <div className="m-4">
                  <iframe
                    width="540"
                    height="315"
                    src="https://www.youtube.com/embed/UX1opjeTeOw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="Success-video-detail">
                  <div className="Success-video-detail-in">
                    <h2> SAN TECH was founded </h2>

                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <p>
                      SAN TECH was founded by young Rwandan Software Engineers
                      to contribute to the national and regional IT sector,
                      driving technology evolution towards next
                    </p>
                    <Button
                      variant="primary"
                      className="fs-5"
                      style={{ width: "70%", padding: "1.5rem", marginTop:"3rem" }}
                    >
                      Read More &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Story;
