import React from "react";
import styles from "../styles/Get3steps.module.css";
import Image from "next/image";
const Get_start3_steps = () => {
  return (
    <>
      <div>
        <section className={styles.get_started_steps}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.get_started_steps_title}>
                  <h2>Get started in just 3 steps!</h2>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className={styles.step_one_content}>
                <div className="col-lg-12">
                  <div className={styles.step_one_inner_div}>
                    <div className="stepOneTitle">
                      <h2>1</h2>
                    </div>
                    <div className="stepOneParagraph">
                      <p>
                        All you have to do is set your goal. Questt AI will
                        understand your Strengths and Weaknesses and generate a
                        Personalised Study Plan for you.
                      </p>
                    </div>
                    <div className="stepOneImg">
                      <Image
                        src="/images/step-1-img.png"
                        width={206}
                        height={144}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={styles.step_tow_content}>
                <div className="col-lg-12">
                  <div className={styles.step_tow_inner_div}>
                    <div className="steptowImg">
                      <Image
                        src="/images/step-2-img.png"
                        width={279}
                        height={157}
                      />
                    </div>
                    <div className="steptowParagraph">
                      <p>
                        A dedicated Study Coach will share a timetable till your
                        exam, aided with Daily Tasks and Personalised Quizzes
                        everyday to help achieve 100% mastery
                      </p>
                    </div>
                    <div className="steptowTitle">
                      <h2>2</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-5">
              <div className={styles.step_three_content}>
                <div className="col-lg-12">
                  <div className={styles.step_three_inner_div}>
                    <div className="stepthreeTitle">
                      <h2>3</h2>
                    </div>
                    <div className="stepthreeParagraph">
                      <p>
                        Wherever you are stuck, get notes, video links and
                        solved answers from your coach
                      </p>
                    </div>
                    <div className="stepthreeImg">
                      <Image
                        src="/images/step-3-img.png"
                        width={164}
                        height={176}
                      />
                    </div>
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

export default Get_start3_steps;
