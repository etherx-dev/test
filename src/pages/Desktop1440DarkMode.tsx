import { FunctionComponent } from "react";
import styles from "./Desktop1440DarkMode.module.css";
const Desktop1440DarkMode: FunctionComponent = () => {
  return (
    <div className={styles.desktop1440Darkmode}>
      <div className={styles.tablet11Darkmode} />
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
    </div>
  );
};

export default Desktop1440DarkMode;
