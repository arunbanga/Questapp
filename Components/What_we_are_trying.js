import React from "react";
import styles from "../styles/Trying.module.css";
const What_we_are_trying = () => {
  return (
    <>
      <div>
        <section className={styles.trying_to_solve_sec}>
          <div className="container">
            <div className="row">
              <h1 className={styles.heading_title}>
                Students spend 8+ hours of their day learning and still come out
                confused
              </h1>
              <div className="col-md-3">
                <div className={styles.student}>
                  <img
                    className={styles.student_img}
                    src="images/student.png"
                    alt=""
                  />
                  <img
                    className={styles.student_arrow_img}
                    src="images/Vector 19.png"
                    alt=""
                  />
                  <h2>Student</h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.school}>
                  <h2>School</h2>
                  <img
                    className={styles.school_arrow_img}
                    src="images/Vector 20.png"
                    alt=""
                  />
                  <img
                    className={styles.school_img}
                    src="images/school-img.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.tuition}>
                  <h2>Tuition</h2>
                  <img
                    className={styles.tuition_img}
                    src="images/tuition-img.jpg"
                    alt=""
                  />
                  <img
                    className={styles.tuition_arrow_img}
                    src="images/Vector 21.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.still_confused}>
                  <img
                    className="still-confused-img"
                    src="images/still-confused-new.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default What_we_are_trying;
