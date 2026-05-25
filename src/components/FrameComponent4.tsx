import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import Layouts from "./Layouts";
import Logo from "./Logo";
import Component5 from "./Component5";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.studyTitlesParent, className].join(" ")}>
      <Box className={styles.studyTitles}>
        <Typography
          className={styles.ourCaseStudies}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{
            fontWeight: "400",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
          }}
        >
          Our Case Studies
        </Typography>
      </Box>
      <Box className={styles.frameParent}>
        <Box className={styles.layoutsParent}>
          <Layouts property1="Frame 61" />
          <section className={styles.zoomerrCaseStudy}>
            <Box className={styles.zoomerrContent}>
              <Box className={styles.zoomerrIcons}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/Frame-263.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Frame-263.svg"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/Frame-263.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Frame-263.svg"
                />
              </Box>
            </Box>
            <Box className={styles.caseStudyDetails}>
              <Box className={styles.frameGroup}>
                <Box className={styles.frameContainer}>
                  <Box className={styles.gettingStartedParent}>
                    <div className={styles.gettingStarted}>getting started</div>
                    <Typography
                      className={styles.howWeHelp}
                      variant="inherit"
                      variantMapping={{ inherit: "h1" }}
                      sx={{
                        fontFamily: "Archivo",
                        fontWeight: "400",
                        fontSize: "43px",
                        lineHeight: "120%",
                      }}
                    >
                      How we help brand reach out to more people
                    </Typography>
                    <Box className={styles.imagePlaceholder} />
                  </Box>
                  <Logo
                    name1="Zoomerr"
                    logoSegments="/Vector.svg"
                    sHELLS="Zoomerr"
                    sHELLSMargin="0"
                  />
                </Box>
                <Button
                  className={styles.frameChild}
                  disableElevation
                  variant="outlined"
                  sx={{
                    color: "rgba(233, 244, 249, 0.5)",
                    fontSize: "12",
                    borderColor: "rgba(233, 244, 249, 0.5)",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "rgba(233, 244, 249, 0.5)" },
                  }}
                >
                  read more
                </Button>
              </Box>
            </Box>
          </section>
          <Layouts
            layoutsMarginLeft="-797.6px"
            elementStudyPadding="22.3px 10px 25.1px 21px"
            property1="Frame 61"
          />
        </Box>
        <Box className={styles.frameWrapper}>
          <Box className={styles.frameDiv}>
            <Box className={styles.frameParent2}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/Frame-107.svg"
              />
              <Box className={styles.ellipseParent}>
                <Box className={styles.frameInner} />
                <Box className={styles.rectBackground} />
                <Box className={styles.frameInner} />
                <Box className={styles.frameInner} />
              </Box>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/Frame-107.svg"
              />
            </Box>
            <Box className={styles.component5Wrapper}>
              <Component5 property1="Frame 61" />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent4;
