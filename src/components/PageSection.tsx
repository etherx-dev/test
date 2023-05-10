import { FunctionComponent } from "react";
import styles from "./PageSection.module.css";
const PageSection: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupContainer}>
        <div className={styles.pagesParent}>
          <div className={styles.pages}>Pages</div>
          <div className={styles.home}>Home</div>
          <div className={styles.product}>Product</div>
          <div className={styles.pricing}>Pricing</div>
          <div className={styles.about}>About</div>
        </div>
        <div className={styles.supportParent}>
          <div className={styles.support}>Support</div>
          <div className={styles.account}>Account</div>
          <div className={styles.supportCenter}>Support Center</div>
          <div className={styles.feedback}>Feedback</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
        <div className={styles.resourcesParent}>
          <div className={styles.resources}>Resources</div>
          <div className={styles.help}>Help</div>
          <div className={styles.learn}>Learn</div>
          <div className={styles.claims}>Claims</div>
          <div className={styles.complaints}>Complaints</div>
        </div>
      </div>
      <div className={styles.socialMediaParent}>
        <div className={styles.socialMedia}>
          <img
            className={styles.antDesigntwitterOutlinedIcon}
            alt=""
            src="/antdesigntwitteroutlined.svg"
          />
          <img
            className={styles.antDesigntwitterOutlinedIcon}
            alt=""
            src="/antdesignfacebookfilled.svg"
          />
          <img
            className={styles.antDesigntwitterOutlinedIcon}
            alt=""
            src="/antdesignlinkedinfilled.svg"
          />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.getStarted}>Get Started</div>
            </div>
          </div>
          <div className={styles.subscribeToOur}>
            Subscribe to our Newsletter
          </div>
          <div className={styles.input}>
            <div className={styles.yourEmail}>Your Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
