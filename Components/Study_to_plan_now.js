import React from "react";
import styles from "../styles/Header.module.css";
const Study_to_plan_now = () => {
  return (
    <>
      <div>
        <section className={`${styles.study_plan_now}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div
                  className={`${styles.study_plan_inner_con} study_plan_inner_con`}
                >
                  <h2 className={`${styles.heading_title} heading_title`}>
                    Get your study plan now
                  </h2>
                  <p>
                    Created by Questt AI and
                    <br /> guided by your Study Coach
                  </p>
                  <button type="button" className={styles.downloadBtn}>
                    Download App
                  </button>
                  <button type="button" className={styles.start_nowBtn}>
                    Start My Plan
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className={styles.study_plan_right_sec}>
                  <div className={styles.study_plan_leftTop_div}>
                    <img src="images/school-plan-img.png" />
                    <p>
                      <span>1300+</span>school
                    </p>
                  </div>
                  <div className={styles.study_plan_rightTop_div}>
                    <p>
                      <span>600M+</span>learning data
                      <br /> points captured
                    </p>

                    <img src="images/student-img.png" />
                  </div>
                  <div className={styles.study_plan_middle_img}>
                    <img src="images/Rectangle.png" alt="" />
                    <img
                      className={styles.trophy_img}
                      src="images/trophy_flat.png"
                      alt=""
                    />
                    <div className="btn-shap-area">
                      <div
                        className={`${styles.btn_shap_right} arrow-right`}
                      ></div>
                      <h2 className={styles.heading_title}>Best App of 2022</h2>
                      <div
                        className={`${styles.btn_shap} ${styles.arrow}`}
                      ></div>
                    </div>
                    <p className={styles.paragraph_title}>
                      Award by Google Play
                    </p>
                  </div>
                  <div className={styles.study_plan_leftbottom_div}>
                    <img src="images/learning-data-img.png" alt="" />
                    <p>
                      <span>2M+</span>Students
                    </p>
                  </div>
                  <div className={styles.study_plan_rightbottom_div}>
                    <p>
                      <span>30%</span>Average
                      <br />
                      Improvement in
                      <br />
                      Students’ Learning
                    </p>
                    <img src="images/average-improvement.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Study_to_plan_now;
