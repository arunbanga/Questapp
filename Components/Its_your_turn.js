import React from "react";
import styles from "../styles/Yourturn.module.css";
import Link from "next/link";
import Image from "next/image";
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
                    <Image
                      className={styles.gPay_play_btn}
                      src="/images/google-play-btn.png"
                      alt=""
                      width={136}
                      height={41}
                    />
                  </Link>
                  <Link
                    href={"https://questt.onelink.me/7IhK/72udd25d"}
                    target={"_blank"}
                    className="a"
                  >
                    <Image
                      src="/images/App_Store.png"
                      alt=""
                      width={120}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.your_turn_img}>
                  <Image
                    src="/images/mobile-img-new2.jpg"
                    alt=""
                    width={284}
                    height={330}
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

export default Its_your_turn;
