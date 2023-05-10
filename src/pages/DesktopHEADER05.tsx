import { FunctionComponent } from "react";
import HomeContainer from "../components/HomeContainer";
import styles from "./DesktopHEADER05.module.css";
const DesktopHEADER05: FunctionComponent = () => {
  return (
    <div className={styles.desktopHeader05}>
      <div className={styles.navbar}>
        <div className={styles.menu}>
          <HomeContainer />
        </div>
        <div className={styles.button}>
          <div className={styles.text}>
            <div className={styles.login}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.text1}>
        <div className={styles.text}>
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
      <div className={styles.buttons}>
        <div className={styles.button1}>
          <div className={styles.text}>
            <div className={styles.login}>Try For Free</div>
          </div>
        </div>
        <div className={styles.button2}>
          <div className={styles.text}>
            <div className={styles.login}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHEADER05;
