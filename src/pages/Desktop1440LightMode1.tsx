import { FunctionComponent } from "react";
import TextContainer from "../components/TextContainer";
import styles from "./Desktop1440LightMode1.module.css";
const Desktop1440LightMode1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1440Lightmode}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
        <TextContainer />
        <b className={styles.beyondUsingStartContainer}>
          <p className={styles.beyondUsingStart}>Beyond using, start fusing!</p>
        </b>
        <div className={styles.uniteForA}> Unite for a successful journey.</div>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.enquiries}>Enquiries</div>
          </div>
        </div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.groupParent}>
          <div className={styles.pagesParent}>
            <div className={styles.pages}>Pages</div>
            <div className={styles.home}>Home</div>
            <div className={styles.product}>Product</div>
            <div className={styles.pricing}>Pricing</div>
            <div className={styles.about}>About</div>
            <div className={styles.support}>Support</div>
            <div className={styles.account}>Account</div>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.feedback}>Feedback</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.resources}>Resources</div>
            <div className={styles.help}>Help</div>
            <div className={styles.learn}>Learn</div>
            <div className={styles.claims}>Claims</div>
            <div className={styles.complaints}>Complaints</div>
          </div>
          <div className={styles.socialMediaParent}>
            <div className={styles.socialMedia}>
              <img
                className={styles.antDesigntwitterOutlinedIcon}
                alt=""
                src="/antdesigntwitteroutlined1.svg"
              />
              <img
                className={styles.antDesigntwitterOutlinedIcon}
                alt=""
                src="/antdesignfacebookfilled1.svg"
              />
              <img
                className={styles.antDesigntwitterOutlinedIcon}
                alt=""
                src="/antdesignlinkedinfilled1.svg"
              />
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.groupFrame}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
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
        <img
          className={styles.emojiEvergreenTree}
          alt=""
          src="/-emoji-evergreen-tree2.svg"
        />
        <img
          className={styles.emojiEvergreenTree1}
          alt=""
          src="/-emoji-evergreen-tree3.svg"
        />
        <img
          className={styles.illustrationMoneyTree}
          alt=""
          src="/-illustration-money-tree1.svg"
        />
      </div>
    </div>
  );
};

export default Desktop1440LightMode1;
