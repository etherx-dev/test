import { FunctionComponent } from "react";
import styles from "./FooterContainer.module.css";
const FooterContainer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.fuseBringsAllYourEssentialParent}>
        <div className={styles.fuseBringsAllContainer}>
          <b>Fuse</b>
          <span>{`  brings all your essential needs in one place, making them accessible through cutting-edge technology. `}</span>
        </div>
        <img className={styles.frameChild} alt="" src="/group-562.svg" />
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.about}>About</div>
        <div className={styles.servicesParent}>
          <div className={styles.services}>Services</div>
          <div className={styles.pricing}>Pricing</div>
          <div className={styles.contact}>Contact</div>
          <div className={styles.careers}>Careers</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.about}>Company</div>
        <div className={styles.helpCenterParent}>
          <div className={styles.pricing}>Help Center</div>
          <div className={styles.services}>Community</div>
          <div className={styles.contact}>Support</div>
        </div>
      </div>
      <div className={styles.fusemoneyAllRightsContainer}>
        <span>{`© 2023 `}</span>
        <span className={styles.fusemoney}>fuseMoney</span>
        <span>. All rights reserved</span>
      </div>
    </div>
  );
};

export default FooterContainer;
