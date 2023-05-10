import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./LandingPage.module.css";
const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
      <img className={styles.logoIcon1} alt="" src="/logo2@2x.png" />
      <div className={styles.wellLetYouKnowWhenThingsParent}>
        <div className={styles.wellLetYou}>
          We’ll let you know when things are good to go
        </div>
        <div className={styles.textField}>
          <div className={styles.inputContainer}>
            <div className={styles.placeholder}>Email</div>
          </div>
        </div>
        <Button
          className={styles.buttons}
          variant="solid"
          w="170px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Subscribe
        </Button>
      </div>
      <b className={styles.beyondUsingStartContainer}>
        <p className={styles.beyondUsingStart}>Beyond using, start fusing!</p>
      </b>
      <div className={styles.uniteForA}> Unite for a successful journey.</div>
      <div className={styles.landingPageInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.enquiries}>Enquiries</div>
        </div>
      </div>
      <CompanyContainer
        productId="/group-561.svg"
        becomeAPartnerTop="915px"
        becomeAPartnerWidth="1440px"
      />
    </div>
  );
};

export default LandingPage;
