import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div>
        <header className={`${styles.header} header`}>
          <div className="container">
            <nav
              className={`${styles.navbar_expand_lg} navbar navbar-expand-lg`}
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <Image
                    src="/images/qustt-new-logo.png"
                    width={174}
                    height={55}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`${styles.navbar_collapse} collapse navbar-collapse`}
                  id="navbarNavAltMarkup"
                >
                  <div className={`${styles.navbar_nav} navbar-nav`}>
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                    <Link
                      href={"https://questt.onelink.me/7IhK/72udd25d"}
                      target={"_blank"}
                    >
                      <Image
                        src="/images/App_Store.png"
                        width={120}
                        height={40}
                      />
                    </Link>
                    <Link
                      href={"https://questt.onelink.me/7IhK/72udd25d"}
                      target={"_blank"}
                    >
                      <Image
                        className="gPay-play-btn"
                        src="/images/google-play-btn.png"
                        width={136}
                        height={41}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
