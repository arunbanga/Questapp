import Link from "next/link";
import React from "react";
import styles from "../styles/Createplan.module.css";
const Create_my_plan = () => {
  return (
    <>
      <div>
        <section className={styles.create_my_plan_sec}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link
                  href={
                    "https://studyplan.questt.com/study-plan-student-input-page"
                  }
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.createMy_plan_con}>
                    <div className={styles.create_my_plan_title}>
                      <h2>
                        Create my <br />
                        Plan
                      </h2>
                    </div>
                    <div className="abs">
                      <img src="images/schedule-img.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  href={"https://api.whatsapp.com/send?phone=9916660753"}
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.createMy_plan_con}>
                    <div className={styles.create_my_plan_title}>
                      <h2>
                        Talk to a <br />
                        Specialist
                      </h2>
                    </div>
                    <div className="abs">
                      <img src="images/talk-specialist.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Create_my_plan;
