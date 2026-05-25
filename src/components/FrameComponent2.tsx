import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import Component4 from "./Component4";
import Regulation from "./Regulation";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.instanceParent, className].join(" ")}>
      <FrameComponent property1="Default" />
      <Box className={styles.n7Parent}>
        <Typography
          className={styles.n7}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "500", lineHeight: "120%" }}
        >
          N7
        </Typography>
        <Box className={styles.frameChild} />
        <Typography
          className={styles.whitespace}
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "500", fontSize: "1524.1px", lineHeight: "120%" }}
        >
          7
        </Typography>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/Frame-26.svg"
        />
        <Box className={styles.frameItem} />
        <Box className={styles.frameInner} />
        <Box className={styles.componentContainer}>
          <section className={styles.frameParent}>
            <Box className={styles.innerContentParent}>
              <Box className={styles.innerContent}>
                <Typography
                  className={styles.digitalBankingOutOfTheBox}
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontWeight: "400",
                    lineHeight: "120%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Digital banking out-of-the-box
                </Typography>
                <div className={styles.n7HelpsYour}>
                  N7 helps your financial institution improve the client
                  experience, automate and optimize procedures
                </div>
              </Box>
              <Button
                className={styles.frameButton}
                disableElevation
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
            <Component4 property1="Frame 61" />
          </section>
          <Box className={styles.regulationParent}>
            <Regulation
              iPhone13Pro="/iPhone-13-Pro2@2x.png"
              fullyCompliantWithRegulatory="Fully compliant with regulatory requirement"
              theGovernanceOfRiskManagement="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures."
              preIntegratedSecuritySystem="Pre-integrated Security System"
              fullyCompliantWithRegulatory1="Fully Compliant With Regulatory Requirement"
              digitallyConnectedCore="Digitally Connected Core"
            />
            <section className={styles.frameGroup}>
              <Box className={styles.frameContainer}>
                <Box className={styles.frameDiv}>
                  <Box className={styles.frameParent2}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/Individual.svg"
                    />
                    <div className={styles.noLegacyIt}>
                      No legacy IT systems
                    </div>
                  </Box>
                  <div className={styles.ourDigitalBanking}>
                    Our Digital Banking solution and multilayered approach help
                    financial institutions take advantage of digital
                    transformation by ensuring customer trust and regulatory
                    compliance.
                  </div>
                </Box>
                <Box className={styles.monetization}>
                  <Box className={styles.interfaces}>
                    <img
                      className={styles.interfacesChild}
                      loading="lazy"
                      alt=""
                      src="/Individual.svg"
                    />
                    <div
                      className={styles.adaptiveIntelligent}
                    >{`Adaptive & Intelligent API monetization`}</div>
                  </Box>
                  <Box className={styles.interfaces}>
                    <img
                      className={styles.interfacesChild}
                      loading="lazy"
                      alt=""
                      src="/Individual.svg"
                    />
                    <div className={styles.ambientUserExperience}>
                      Ambient User Experience
                    </div>
                  </Box>
                  <Box className={styles.interfaces}>
                    <img
                      className={styles.interfacesChild}
                      loading="lazy"
                      alt=""
                      src="/Individual.svg"
                    />
                    <div className={styles.cloudNativeWithLower}>
                      Cloud-native With lower TCO
                    </div>
                  </Box>
                </Box>
              </Box>
              <img
                className={styles.iphone13Pro}
                loading="lazy"
                alt=""
                src="/iPhone-13-Pro1@2x.png"
              />
            </section>
            <Regulation
              iPhone13Pro="/iPhone-13-Pro@2x.png"
              fullyCompliantWithRegulatory="No traditional branches"
              theGovernanceOfRiskManagement="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’"
              frameBoxWidth="unset"
              preIntegratedSecuritySystem={`Branchless & Paperless Banking`}
              preIntegratedSecuritySystemFlex="unset"
              preIntegratedSecuritySystemWidth="268.4px"
              preIntegratedSecuritySystemDisplay="inline-block"
              transformationWidth="unset"
              transformationAlignItems="center"
              fullyCompliantWithRegulatory1="Digital Transformation Capability"
              fullyCompliantWithFlex="unset"
              fullyCompliantWithWidth="268.4px"
              fullyCompliantWithDisplay="inline-block"
              digitalSystemWidth="unset"
              digitalSystemJustifyContent="unset"
              digitallyConnectedCore="Optimized, Adoptable and Scalable"
              digitallyConnectedCoreFlex="unset"
              digitallyConnectedCoreWidth="268.4px"
              digitallyConnectedCoreDisplay="inline-block"
            />
          </Box>
        </Box>
        <Box className={styles.n7Group}>
          <Typography
            className={styles.n72}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "500", lineHeight: "120%" }}
          >
            N7
          </Typography>
          <Box className={styles.takeTheFullAdvantageOfGoiParent}>
            <Typography
              className={styles.takeTheFull}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
              }}
            >
              Take the full advantage of going paper-less now.
            </Typography>
            <div
              className={styles.n7HelpsYour2}
            >{`N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </Box>
          <Box className={styles.frameWrapper}>
            <Box className={styles.instanceGroup}>
              <Button
                className={styles.frameChild2}
                disableElevation
                variant="outlined"
                sx={{
                  color: "#e9f4f9",
                  fontSize: "15",
                  borderColor: "#e9f4f9",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#e9f4f9" },
                }}
              >
                Contact Us
              </Button>
              <Button
                className={styles.frameButton}
                disableElevation
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                  },
                }}
              >
                REQUEST DEMO
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent2;
