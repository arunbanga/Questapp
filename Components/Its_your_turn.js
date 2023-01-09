import React from "react";
import styles from "../styles/Yourturn.module.css";
import Link from "next/link";
const Its_your_turn = () => {
  return (
    <>
      <div>
        <section className={styles.your_turn_sec}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.your_turn_con}>
                  <p>
                    <span>2M</span> students are taking control of their
                    education.
                  </p>
                  <h2>Its your turn.</h2>
                  <Link
                    href={"https://questt.onelink.me/7IhK/72udd25d"}
                    target={"_blank"}
                    className="a"
                  >
                    <img
                      className={styles.gPay_play_btn}
                      src="images/google-play-btn.png"
                    />
                  </Link>
                  <Link
                    href={"https://questt.onelink.me/7IhK/72udd25d"}
                    target={"_blank"}
                    className="a"
                  >
                    <img src="images/App_Store.png" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.your_turn_img}>
                  <img src="images/mobile-img-new2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Its_your_turn;
