import React from "react";
import styles from "../styles/Moreabout.module.css";
import { Aboutdata } from "./Data/Aboutdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight } from "react-icons/hi";
const More_about_us = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <section
          className={`${styles.more_about_us} more_about_us instagram-slider-sec`}
        >
          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-12">
                <div className={styles.page_title}>
                  <h2>More about us</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.instagram_slider}>
            <Slider {...settings}>
              {Aboutdata.map((val) => {
                return (
                  <>
                    <div>
                      <div
                        className={`${styles.slick_slide} instagram-slider-info`}
                      >
                        <div className={styles.instagram_slider_img}>
                          <img
                            className="rounded-top rounded-right"
                            src={val.image}
                            alt="Slider"
                          />
                          <div className={styles.slider_content}>
                            <h5>{val.headingone}</h5>
                            <h3>{val.headingtwo}</h3>
                            <div className={styles.readMore_details}>
                              <div className={styles.view_article}>
                                <p>{val.para}</p>
                              </div>
                              <div className={styles.view_article_arrow}>
                                <p>
                                  <span>
                                    <i className="fa-solid fa-arrow-right">
                                      <HiArrowNarrowRight />
                                    </i>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default More_about_us;