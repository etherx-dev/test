import { FunctionComponent } from "react";
import styles from "./HomeContainer.module.css";
const HomeContainer: FunctionComponent = () => {
  return (
    <div className={styles.removebgPreview1Parent}>
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/9-2removebgpreview-1@2x.png"
      />
      <div className={styles.link}>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.link}>
        <div className={styles.home}>Product</div>
      </div>
      <div className={styles.link}>
        <div className={styles.home}>About</div>
      </div>
      <div className={styles.link}>
        <div className={styles.home}>Contact</div>
      </div>
    </div>
  );
};

export default HomeContainer;
