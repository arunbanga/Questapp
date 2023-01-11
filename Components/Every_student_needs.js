import React from "react";
import styles from "../styles/Everystudent.module.css";
import Image from "next/image";
const Every_student_needs = () => {
  return (
    <>
      <div>
        <section className={styles.every_student_needs_personalised}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h2>
                  Every Student needs a Personalised Study Plan as everyone has
                  different <span>learning needs</span> & <span>speeds</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className={styles.learning_needs_inner_con}>
                  <button type="button" className="next-test-btn">
                    When is your next test?
                  </button>
                  <button type="button" className="prepared-btn">
                    How prepared are you?
                  </button>
                  <button type="button" className="chapters-coming-btn">
                    How many chapters are coming?
                  </button>
                  <button type="button" className="weakest-subject-btn">
                    Which is your weakest subject?
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.learning_needs_inner_con}>
                  <Image
                    src="/images/nework-search-img.png"
                    alt=""
                    width={355.99}
                    height={331.19}
                    className={styles.network}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.learning_needs_inner_con}>
                  <Image
                    src="/images/mobile-img.jpg"
                    alt=""
                    width={394}
                    height={364}
                    className={styles.network}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className={styles.student_input_details}>
                  <h3>
                    Student’s Inputs
                    <Image
                      className={styles.arrow_right_one}
                      src="/images/arrow-right.png"
                      alt=""
                      width={191}
                      height={16}
                    />
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.student_input_details}>
                  <h3>
                    Questt AI
                    <Image
                      className={styles.arrow_right_two}
                      src="/images/arrow-right.png"
                      alt=""
                      width={191}
                      height={16}
                    />
                  </h3>
                </div>
              </div>
              <div className="col-md-2">
                <div className={styles.student_input_details}>
                  <h3 className="std-plan-title">Study Plan</h3>
                </div>
              </div>
              <div className={styles.our_study_plan}>
                <p>
                  Our Study Plan understands the students current position,
                  based on which the Coach uses Questt’s AI to create the most
                  suited Study Plan
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Every_student_needs;
