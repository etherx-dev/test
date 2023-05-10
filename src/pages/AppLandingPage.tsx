import { FunctionComponent } from "react";
import FuseBanner from "../components/FuseBanner";
import FuseContainer from "../components/FuseContainer";
import ContactForm from "../components/ContactForm";
import FooterContainer from "../components/FooterContainer";
import styles from "./AppLandingPage.module.css";
const AppLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.appLandingPage}>
      <div className={styles.header}>
        <div className={styles.header1}>
          <img className={styles.listIcon} alt="" src="/list.svg" />
          <img className={styles.logoIcon} alt="" src="/logo3@2x.png" />
        </div>
      </div>
      <FuseBanner />
      <div className={styles.footer}>
        <FuseContainer />
        <ContactForm />
        <FooterContainer />
        <div className={styles.footerChild} />
      </div>
    </div>
  );
};

export default AppLandingPage;
