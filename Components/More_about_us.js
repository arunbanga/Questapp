import React, { useState, useEffect } from "react";
import styles from "../styles/Moreabout.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
const More_about_us = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const res = await fetch("https://questt.com/blog/wp-json/wp/v2/posts");
    setUsers(await res.json());
  };
  useEffect(() => {
    getUser();
  }, []);
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
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
          <div className={`${styles.instagram_slider} container`}>
            <Slider {...settings}>
              {users.map((val) => {
                return (
                  <>
                    <div key={val.id}>
                      <div
                        className={`${styles.slick_slide} instagram-slider-info`}
                      >
                        <div className={styles.instagram_slider_img}>
                          <Image
                            className="rounded-top rounded-right"
                            src={val.featured_image_url}
                            alt="Slider"
                            width={285}
                            height={174.41}
                          />

                          <div className={styles.slider_content}>
                            <Link href={val.link} className={styles.Link}>
                              <h3>{val.slug}</h3>
                            </Link>

                            <div className={styles.readMore_details}>
                              <div className={styles.view_article}>
                                <Link href={val.link} className={styles.Link}>
                                  <p>View Full Article</p>
                                </Link>
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
