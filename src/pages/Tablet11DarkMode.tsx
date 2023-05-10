import { FunctionComponent } from "react";
import styles from "./Tablet11DarkMode.module.css";
const Tablet11DarkMode: FunctionComponent = () => {
  return (
    <div className={styles.tablet11Darkmode}>
      <div className={styles.text}>
        <div className={styles.headline}>
          <div className={styles.workAtTheContainer}>
            <p className={styles.workAtThe}>{`Work at the speed `}</p>
            <p className={styles.workAtThe}>of thought</p>
          </div>
        </div>
        <div className={styles.subHeading}>
          <div className={styles.mostCalendarsAreContainer}>
            <p
              className={styles.workAtThe}
            >{`Most calendars are designed for teams. Slate is designed for `}</p>
            <p className={styles.workAtThe}>
              freelancers who want a simple way to plan their schedule.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mobileHeader05}>
        <div className={styles.hero}>
          <div className={styles.mobileFrame}>
            <div className={styles.mobileNavbar}>
              <div className={styles.buttonParent}>
                <div className={styles.button}>
                  <div className={styles.headline}>
                    <div className={styles.login}>Login</div>
                  </div>
                </div>
                <img
                  className={styles.bxbxMenuAltRightIcon}
                  alt=""
                  src="/bxbxmenualtright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.textContent}>
            <div className={styles.headline}>
              <div className={styles.workAtTheContainer1}>
                <p className={styles.workAtThe}>{`Work at the `}</p>
                <p className={styles.workAtThe}>{`speed of `}</p>
                <p className={styles.workAtThe}>thought.</p>
              </div>
            </div>
            <div className={styles.subHeading1}>
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
            <div className={styles.button1}>
              <div className={styles.headline}>
                <div className={styles.login}>Try For Free</div>
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.headline}>
                <div className={styles.login}>Learn More</div>
              </div>
            </div>
          </div>
          <div className={styles.screens}>
            <div className={styles.screens1}>
              <img
                className={styles.dashboard1Icon}
                alt=""
                src="/dashboard-1@2x.png"
              />
              <img
                className={styles.chatBotIcon}
                alt=""
                src="/chat-bot@2x.png"
              />
              <img className={styles.boardsIcon} alt="" src="/boards@2x.png" />
            </div>
            <div className={styles.gradient} />
          </div>
        </div>
      </div>
      <img className={styles.icon} alt="" src="/9-2-3-2@2x.png" />
    </div>
  );
};

export default Tablet11DarkMode;
