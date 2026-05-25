import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import MaskGroup from "./MaskGroup";
import styles from "./ContactFooter.module.css";

export type ContactFooterType = {
  className?: string;
};

const ContactFooter: FunctionComponent<ContactFooterType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.contactFooter, className].join(" ")}>
      <Box className={styles.contactFooterChild} />
      <Box className={styles.infoLayout}>
        <MaskGroup property1="Default" />
        <Box className={styles.contentDivision}>
          <Box className={styles.officeColumn}>
            <Box className={styles.officeData}>
              <div className={styles.london}>London</div>
              <div className={styles.linktiaInfosystemsLtd}>
                Linktia Infosystems Ltd – CB7,
                <br />
                26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
              </div>
            </Box>
            <Box className={styles.officeData}>
              <div className={styles.london}>Solutions</div>
              <Box className={styles.serviceColumnParent}>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>Core Banking CB7</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    loading="lazy"
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>Digital Banking N7</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    loading="lazy"
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>Open Banking</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    loading="lazy"
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn4}>
                  <div className={styles.openBanking}>
                    Loan Origination System
                  </div>
                  <img
                    className={styles.serviceEmptyIcon}
                    loading="lazy"
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn4}>
                  <div className={styles.openBanking}>
                    Loan Management System
                  </div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn4}>
                  <div className={styles.openBanking}>
                    Digital Transformation
                  </div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dubaiBlock}>
            <Box className={styles.officeData}>
              <div className={styles.london}>Dubai</div>
              <div className={styles.linktiaInfosystemsLtd}>
                Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5
                Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </div>
            </Box>
            <Box className={styles.officeData}>
              <div className={styles.london}>N7 Banking</div>
              <Box className={styles.serviceColumnParent}>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>About Us</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>Solutions</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>Contact</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.miscArea}>
                  <div className={styles.openBanking}>Company</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.miscArea}>
                  <div className={styles.openBanking}>Careers</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.miscArea}>
                  <div className={styles.openBanking}>Insights</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.miscArea}>
                  <div className={styles.openBanking}>Core Team</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
              </Box>
              <Box className={styles.miscArea}>
                <div className={styles.openBanking}>Brand Center</div>
                <img
                  className={styles.serviceEmptyIcon}
                  alt=""
                  src="/Spacers@2x.png"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.londonSecond}>
            <Box className={styles.officeData}>
              <div className={styles.london}>London</div>
              <div className={styles.linktiaInfosystemsLtd3}>
                Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road,
                Pune, Maharashtra, 411041, India
              </div>
            </Box>
            <Box className={styles.officeData}>
              <div className={styles.london}>Our Socials</div>
              <Box className={styles.serviceColumnParent}>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>LinkedIn</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
                <Box className={styles.serviceColumn}>
                  <div className={styles.openBanking}>X</div>
                  <img
                    className={styles.serviceEmptyIcon}
                    alt=""
                    src="/Spacers@2x.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.copyrightNotice}>
        <div className={styles.copyright2022}>
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </div>
      </Box>
    </footer>
  );
};

export default ContactFooter;
