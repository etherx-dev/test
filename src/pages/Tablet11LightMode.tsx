import { FunctionComponent } from "react";
import PageSection from "../components/PageSection";
import styles from "./Tablet11LightMode.module.css";
const Tablet11LightMode: FunctionComponent = () => {
  return (
    <div className={styles.tablet11Lightmode}>
      <div className={styles.desktop1440Lightmode}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-11.svg" />
          <div className={styles.groupItem} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
          <b className={styles.beyondUsingStartContainer}>
            <p className={styles.beyondUsingStart}>
              Beyond using, start fusing!
            </p>
          </b>
          <div className={styles.uniteForA}>
            {" "}
            Unite for a successful journey.
          </div>
          <div className={styles.wellLetYouKnowWhenThingsParent}>
            <div className={styles.wellLetYou}>
              We’ll let you know when things are good to go
            </div>
            <div className={styles.textField}>
              <div className={styles.inputContainer}>
                <div className={styles.placeholder}>Email</div>
              </div>
            </div>
            <div className={styles.buttons}>
              <b className={styles.learnMore}>Subscribe</b>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupInner} />
              <div className={styles.enquiries}>Enquiries</div>
            </div>
          </div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <PageSection />
          <img
            className={styles.emojiEvergreenTree}
            alt=""
            src="/-emoji-evergreen-tree.svg"
          />
          <img
            className={styles.emojiEvergreenTree1}
            alt=""
            src="/-emoji-evergreen-tree1.svg"
          />
          <img
            className={styles.illustrationMoneyTree}
            alt=""
            src="/-illustration-money-tree.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Tablet11LightMode;
