import React from "react";
import styles from "../styles/Trying.module.css";
import Image from "next/image";
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
                  <Image
                    className={styles.student_img}
                    src="/images/student.png"
                    alt=""
                    width={129}
                    height={326}
                  />

                  <Image
                    className={styles.student_arrow_img}
                    src="/images/Vector 19.png"
                    alt=""
                    width={255}
                    height={92.57}
                  />

                  <h2>Student</h2>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.school}>
                  <h2>School</h2>
                  <Image
                    className={styles.school_arrow_img}
                    src="/images/Vector 20.png"
                    alt=""
                    width={265}
                    height={57.35}
                  />

                  <Image
                    className={styles.school_img}
                    src="/images/school-img.png"
                    alt=""
                    width={245}
                    height={200}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.tuition}>
                  <h2>Tuition</h2>
                  <Image
                    className={styles.tuition_img}
                    src="/images/tuition-img.jpg"
                    alt=""
                    width={245}
                    height={270}
                  />

                  <Image
                    className={styles.tuition_arrow_img}
                    src="/images/Vector 21.png"
                    alt=""
                    width={225}
                    height={83}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.still_confused}>
                  <Image
                    className={styles.confused_img}
                    src="/images/still-confused-new.png"
                    alt=""
                    width={237}
                    height={323}
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
