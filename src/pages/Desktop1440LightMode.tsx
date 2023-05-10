import { FunctionComponent } from "react";
import MoneyTreeContainer from "../components/MoneyTreeContainer";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./Desktop1440LightMode.module.css";
const Desktop1440LightMode: FunctionComponent = () => {
  return (
    <div className={styles.desktop1440Lightmode}>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
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
        <b className={styles.beyondUsingStartContainer}>
          <p className={styles.beyondUsingStart}>Beyond using, start fusing!</p>
        </b>
        <div className={styles.uniteForA}> Unite for a successful journey.</div>
        <div className={styles.frameWrapper}>
          <div className={styles.enquiriesWrapper}>
            <div className={styles.enquiries}>Enquiries</div>
          </div>
        </div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.emojiEvergreenTree}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.emojiEvergreenTree1}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        </div>
        <MoneyTreeContainer />
        <CompanyContainer
          productId="/group-56.svg"
          becomeAPartnerTop="804px"
          becomeAPartnerWidth="1555px"
          becomeAPartnerHeight="233px"
        />
      </div>
    </div>
  );
};

export default Desktop1440LightMode;
