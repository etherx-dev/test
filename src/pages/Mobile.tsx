import { FunctionComponent, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./Mobile.module.css";
const Mobile: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.mobile}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.logoIcon}
          alt=""
          src="/logo4.svg"
          data-animate-on-scroll
        />
        <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
        <Input
          className={styles.frameItem}
          variant="flushed"
          width="582.3994750976562px"
          value="Email"
          placeholder="We’ll let you know when things are good to go"
          w="582.3994750976562px"
        />
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
        <img className={styles.vectorIcon} alt="" src="/vector37.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector38.svg" />
        <img
          className={styles.illustrationMoneyTree}
          alt=""
          src="/-illustration-money-tree2.svg"
        />
      </div>
      <div className={styles.mobileChild} />
      <div className={styles.subscribeToOurNewsletterParent}>
        <div className={styles.subscribeToOur}>Subscribe to our Newsletter</div>
        <Input
          className={styles.input}
          variant="outline"
          placeholder="Your Email"
        />
        <Button
          className={styles.frameInner}
          variant="solid"
          colorScheme="fuze"
          size="lg"
          rightIcon={<ArrowForwardIcon />}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Mobile;
