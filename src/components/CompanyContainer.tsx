import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CompanyContainer.module.css";

type CompanyContainerType = {
  productId?: string;

  /** Style props */
  becomeAPartnerTop?: Property.Top;
  becomeAPartnerWidth?: Property.Width;
  becomeAPartnerHeight?: Property.Height;
};

const CompanyContainer: FunctionComponent<CompanyContainerType> = ({
  productId,
  becomeAPartnerTop,
  becomeAPartnerWidth,
  becomeAPartnerHeight,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      top: becomeAPartnerTop,
      width: becomeAPartnerWidth,
      height: becomeAPartnerHeight,
    };
  }, [becomeAPartnerTop, becomeAPartnerWidth, becomeAPartnerHeight]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerInner}>
        <img className={styles.frameChild} alt="" src={productId} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.companyParent}>
          <div className={styles.company}>Company</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.aboutUs}>News</div>
          <div className={styles.aboutUs}>Careers</div>
          <div className={styles.aboutUs}>How we work</div>
        </div>
        <div className={styles.companyParent}>
          <div className={styles.company}>Support</div>
          <div className={styles.aboutUs}>FAQ</div>
          <div className={styles.aboutUs}>US Office</div>
          <div className={styles.aboutUs}>Asia Office</div>
          <div className={styles.aboutUs}>Help Center</div>
        </div>
        <div className={styles.moreParent}>
          <div className={styles.company}>More</div>
          <div className={styles.aboutUs}>Become a partner</div>
          <div className={styles.aboutUs}>Partner Support</div>
          <div className={styles.aboutUs}>Driver Requirements</div>
        </div>
        <div className={styles.moreParent}>
          <div className={styles.company}>App</div>
          <div className={styles.aboutUs}>Report Bug</div>
          <div className={styles.aboutUs}>App Helpdesk</div>
          <div className={styles.aboutUs}>Mobile app links</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyContainer;
