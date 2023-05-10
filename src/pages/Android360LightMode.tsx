import { FunctionComponent } from "react";
import styles from "./Android360LightMode.module.css";
const Android360LightMode: FunctionComponent = () => {
  return (
    <div className={styles.android360Lightmode}>
      <div className={styles.mobileHeader05}>
        <div className={styles.hero}>
          <div className={styles.mobileFrame}>
            <div className={styles.mobileNavbar}>
              <div className={styles.bxbxMenuAltRightWrapper}>
                <img
                  className={styles.bxbxMenuAltRightIcon}
                  alt=""
                  src="/bxbxmenualtright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.textContent}>
            <div className={styles.secondHeadline}>
              <div className={styles.workAtTheContainer}>
                <p className={styles.workAtThe}>{`Work at the `}</p>
                <p className={styles.workAtThe}>{`speed of `}</p>
                <p className={styles.workAtThe}>thought.</p>
              </div>
            </div>
            <div className={styles.subHeading}>
              <div className={styles.mostCalendarsAreContainer}>
                <p
                  className={styles.workAtThe}
                >{`Most calendars are designed for teams. `}</p>
                <p
                  className={styles.workAtThe}
                >{`Slate is designed for freelancers who `}</p>
                <p
                  className={styles.workAtThe}
                >{`want a simple way to plan `}</p>
                <p className={styles.workAtThe}>their schedule.</p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.secondHeadline}>
                <div className={styles.tryForFree}>Try For Free</div>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.secondHeadline}>
                <div className={styles.tryForFree}>Learn More</div>
              </div>
            </div>
          </div>
          <div className={styles.screens}>
            <div className={styles.screens1}>
              <img
                className={styles.dashboard1Icon}
                alt=""
                src="/dashboard-11@2x.png"
              />
              <img
                className={styles.chatBotIcon}
                alt=""
                src="/chat-bot1@2x.png"
              />
              <img className={styles.boardsIcon} alt="" src="/boards1@2x.png" />
            </div>
            <div className={styles.gradient} />
          </div>
        </div>
      </div>
      <img className={styles.icon} alt="" src="/9-2-3-21@2x.png" />
    </div>
  );
};

export default Android360LightMode;
