import { FunctionComponent } from "react";
import styles from "./FuseContainer.module.css";
const FuseContainer: FunctionComponent = () => {
  return (
    <div className={styles.whyDigicare}>
      <div className={styles.whyDigicareInner}>
        <div className={styles.whatIsFuseParent}>
          <b className={styles.whatIsFuse}>What is Fuse?</b>
          <div className={styles.hereAreThe}>
            Here are the features that can be really helpful
          </div>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.buttons}>
          <div className={styles.text}>Fuse</div>
        </div>
        <div className={styles.buttons1}>
          <div className={styles.text}>tech</div>
        </div>
        <div className={styles.buttons1}>
          <div className={styles.text}>digital</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-29.svg" />
        <div className={styles.weWillMake}>
          We will make sure you have plenty of schedule options.
        </div>
      </div>
    </div>
  );
};

export default FuseContainer;
