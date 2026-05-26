import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "./Logo";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.studyTitlesParent, className].join(" ")}>
      <Typography className={styles.heading}>
        Our Case Studies
      </Typography>

      <div className={styles.caseStudyWrapper}>
        {/* Left background card */}
        <div className={styles.cardBehindLeft}>
          <div className={styles.sidePattern}>
            <img src="/Frame-263.svg" alt="" />
            <img src="/Frame-263.svg" alt="" />
          </div>
        </div>

        {/* Right background card */}
        <div className={styles.cardBehindRight}></div>

        {/* Main Card */}
        <div className={styles.mainCard}>
          {/* Left Section */}
          <div className={styles.imagePanel}>
            <div className={styles.iconGrid}>
              {[1, 2, 3, 4].map((_, index) => (
                <img
                  key={index}
                  src="/Frame-263.svg"
                  alt=""
                  className={styles.icon}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.contentPanel}>
            <Typography className={styles.subHeading}>
              GETTING STARTED
            </Typography>

            <Typography className={styles.title}>
              How we help brand reach out to more people
            </Typography>

            <div className={styles.logoWrap}>
              <Logo
                name1="Zoomerr"
                logoSegments="/Vector.svg"
                sHELLS="Zoomerr"
                sHELLSMargin="0"
              />
            </div>

            <Button
              variant="outlined"
              className={styles.readMoreBtn}
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className={styles.bottomSection}>
        <div className={styles.carouselControls}>
          <button className={styles.arrowBtn}>←</button>

          <div className={styles.pagination}>
            <span></span>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
          </div>

          <button className={styles.arrowBtn}>→</button>
        </div>

        <button className={styles.viewAllBtn}>
          VIEW ALL →
        </button>
      </div>
    </section>
  );
};

export default FrameComponent4;
