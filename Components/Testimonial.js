import React from "react";
import styles from "../styles/Testimonial.module.css";
import { Testimonialdata } from "./Data/Testimonialdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 3,
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
        <section className={styles.testimonial_sec}>
          <div className="container">
            <div className="row">
              <div className="page_title">
                <h2>Hear it from our Users</h2>
              </div>
              <div className={`${styles.testimonial}`}>
                <Slider {...settings}>
                  {Testimonialdata.map((val) => {
                    return (
                      <>
                        <div key={val.id}>
                          <div className={styles.testimonial_info}>
                            <div className={styles.testimonial_inner_block}>
                              <h5>
                                {val.name}
                                <img
                                  className="star_icon"
                                  src={val.img}
                                  alt={val.rating}
                                />
                              </h5>
                              <p>{val.event}</p>
                            </div>
                            <div className={styles.testimonial_description}>
                              <p>{val.review}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
