import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FuseBanner.module.css";
const FuseBanner: FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.banner1}>
            <div className={styles.frameParent}>
              <div className={styles.beyondUsingStartFusingParent}>
                <div className={styles.beyondUsingStart}>
                  Beyond using, Start Fusing!
                </div>
                <div className={styles.uniteForA}>
                  Unite for a sucessful journey
                </div>
              </div>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevron-right.svg"
              />
              <img
                className={styles.chevronLeftIcon}
                alt=""
                src="/chevron-left.svg"
              />
              <img className={styles.frameChild} alt="" src="/group-14.svg" />
              <img className={styles.frameItem} alt="" src="/group-16.svg" />
              <img className={styles.frameInner} alt="" src="/group-15.svg" />
              <button className={styles.buttons}>
                <div className={styles.base}>
                  <div className={styles.containter}>
                    <img className={styles.lIcon} alt="" />
                    <div className={styles.text}>Download App</div>
                    <img className={styles.lIcon} alt="" />
                  </div>
                </div>
              </button>
              <img
                className={styles.image24Icon}
                alt=""
                src="/image-24@2x.png"
              />
              <img
                className={styles.image25Icon}
                alt=""
                src="/image-25@2x.png"
              />
            </div>
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-57@2x.png" />
      </div>
    </div>
  );
};

export default FuseBanner;
