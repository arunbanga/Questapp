import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/Footer.module.css";
import Modal from "react-modal";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Footer_section = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <div className={styles.footer}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className={styles.footer_menu}>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className={styles.social_icon}>
                  <Link
                    href={"https://www.facebook.com/questtapp"}
                    target={"_blank"}
                  >
                    {/* <Image
                      className="facebook-icon"
                      src="/images/fb-icon.png"
                      alt=""
                      width={32}
                      height={32}
                    /> */}

                    <p className={styles.facebook}>
                      <AiFillFacebook
                        style={{ width: "32px", height: "32px" }}
                      />
                    </p>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/questtapp"}
                    target={"_blank"}
                  >
                    {/* <Image
                      className={styles.instagram_icon}
                      src="/images/instagram-icon.png"
                      alt=""
                      width={32}
                      height={32}
                    /> */}
                    <p className={styles.instagram}>
                      <AiFillInstagram
                        style={{ width: "32px", height: "32px" }}
                      />
                    </p>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/company/questtapp"}
                    target={"_blank"}
                  >
                    <p className={styles.linkedin}>
                      <AiFillLinkedin
                        style={{ width: "32px", height: "32px" }}
                      />
                    </p>
                  </Link>
                  <Link
                    href={"https://twitter.com/questtapp"}
                    target={"_blank"}
                  >
                    <p className={styles.twitter}>
                      <AiOutlineTwitter
                        style={{ width: "32px", height: "32px" }}
                      />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Popup start// */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className={`${styles.modal_dialog} modal-content`}>
          <div className={styles.modal_content}>
            <button
              type="button"
              className={styles.close}
              data-dismiss="modal"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
              <span className={styles.sr_only}>Close</span>
            </button>

            <div
              className="modal-body"
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              <iframe
                src="https://studyplan.questt.com/study-plan-student-input-page"
                width="100%"
                height="100%"
                title="Popup"
                className={styles.iframe}
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
      {/* //Popup end */}
    </>
  );
};

export default Footer_section;
