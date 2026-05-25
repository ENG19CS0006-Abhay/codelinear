import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import Component1 from "./Component1";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ellipseParent, className].join(" ")}>
      <Box className={styles.frameChild} />
      <section className={styles.frameParent}>
        <Box className={styles.getYourselfUpToSpeedOnAlParent}>
          <Typography
            className={styles.getYourselfUpToSpeed}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{
              fontWeight: "400",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
            }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </Typography>
          <Button
            className={styles.frameItem}
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
            Insights
          </Button>
        </Box>
        <Box className={styles.frameGroup}>
          <Box className={styles.frameWrapper}>
            <Box className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
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
                loading="lazy"
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
          <Box className={styles.frameContainer}>
            <Box className={styles.frameDiv}>
              <Box className={styles.gettingStartedParent}>
                <div className={styles.gettingStarted}>getting started</div>
                <Typography
                  className={styles.howToTransition}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontWeight: "400",
                    fontSize: "27px",
                    lineHeight: "120%",
                  }}
                >
                  How to transition from a traditional to a digital bank
                </Typography>
                <Box className={styles.profile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </Box>
              </Box>
              <Button
                className={styles.frameInner}
                disableElevation
                variant="outlined"
                sx={{
                  color: "rgba(233, 244, 249, 0.5)",
                  fontSize: "12",
                  borderColor: "rgba(233, 244, 249, 0.5)",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "rgba(233, 244, 249, 0.5)" },
                  width: 287,
                  height: 36,
                }}
              >
                read more
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
      <section className={styles.presentation}>
        <Box className={styles.tradition}>
          <Box className={styles.advancementParent}>
            <Box className={styles.advancement}>
              <Box className={styles.gettingStartedGroup}>
                <div className={styles.gettingStarted}>getting started</div>
                <Typography
                  className={styles.howToTransition2}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontWeight: "400",
                    fontSize: "27px",
                    lineHeight: "120%",
                  }}
                >
                  How to transition from a traditional to a digital bank
                </Typography>
                <Box className={styles.profile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </Box>
              </Box>
            </Box>
            <Button
              className={styles.frameButton}
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
          <Box className={styles.advancementParent}>
            <Box className={styles.advancement}>
              <Box className={styles.gettingStartedGroup}>
                <div className={styles.gettingStarted}>getting started</div>
                <Typography
                  className={styles.howToTransition2}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontWeight: "400",
                    fontSize: "27px",
                    lineHeight: "120%",
                  }}
                >
                  How to transition from a traditional to a digital bank
                </Typography>
                <Box className={styles.profile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </Box>
              </Box>
            </Box>
            <Button
              className={styles.frameButton}
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
        <Component1 property1="Frame 61" />
      </section>
    </section>
  );
};

export default FrameComponent3;
