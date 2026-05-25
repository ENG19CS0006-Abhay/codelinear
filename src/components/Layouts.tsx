import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Component2 from "./Component2";
import styles from "./Layouts.module.css";

export type LayoutsType = {
  className?: string;
  property1?: CSSProperties["property1"];

  /** Style props */
  layoutsMarginLeft?: CSSProperties["marginLeft"];
  elementStudyPadding?: CSSProperties["padding"];
};

const Layouts: FunctionComponent<LayoutsType> = ({
  className = "",
  layoutsMarginLeft,
  elementStudyPadding,
  property1,
}) => {
  const layoutsStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: layoutsMarginLeft,
    };
  }, [layoutsMarginLeft]);

  const elementStudyStyle: CSSProperties = useMemo(() => {
    return {
      padding: elementStudyPadding,
    };
  }, [elementStudyPadding]);

  return (
    <section
      className={[styles.layouts, className].join(" ")}
      style={layoutsStyle}
    >
      <Box className={styles.elementStudy} style={elementStudyStyle}>
        <Box className={styles.accessPointsWrapper}>
          <Box className={styles.accessPoints}>
            <Box className={styles.analysisElements}>
              <img
                className={styles.directPointsIcon}
                alt=""
                src="/Frame-263.svg"
              />
              <img
                className={styles.directPointsIcon}
                alt=""
                src="/Frame-263.svg"
              />
              <img
                className={styles.directPointsIcon}
                alt=""
                src="/Frame-263.svg"
              />
              <img
                className={styles.directPointsIcon}
                alt=""
                src="/Frame-263.svg"
              />
            </Box>
          </Box>
        </Box>
        <Box className={styles.outreachStructures}>
          <Box className={styles.preliminaryReadings}>
            <Box className={styles.directionStudies}>
              <div className={styles.gettingStarted}>getting started</div>
              <div className={styles.howWeHelp}>
                How we help brand reach out to more people
              </div>
              <Box className={styles.analyticalDisplay} />
            </Box>
            <div className={styles.ourApiBanking}>
              Our API banking helps you to gain actionable insights, enable
              account aggregation, streamline customer onboarding, KYC, and
              payment initiation, offer predictive budgeting tools, and
              introduce enhanced credit scoring.
              <br />
              Our API banking helps you to gain actionable insights, enable
              account aggregation, streamline customer onboarding, KYC, and
              payment initiation, offer predictive budgeting tools, and
              introduce enhanced credit scoring.
            </div>
          </Box>
          <Component2 property1={property1} />
        </Box>
      </Box>
    </section>
  );
};

export default Layouts;
