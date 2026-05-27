import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import Component3 from "./Component3";
import styles from "./FeatureContainers1.module.css";

export type FeatureContainers1Type = {
  className?: string;
  separators?: string;
  loanOriginationSystem?: string;
  property1?: string;

  /** Style props */
  frameBoxPadding?: CSSProperties["padding"];
};

const FeatureContainers1: FunctionComponent<FeatureContainers1Type> = ({
  className = "",
  frameBoxPadding,
  separators,
  loanOriginationSystem,
  property1,
}) => {
  const frameBox4Style: CSSProperties = useMemo(() => {
    return {
      padding: frameBoxPadding,
    };
  }, [frameBoxPadding]);

  return (
    <Box className={[styles.featureContainers, className].join(" ")}>
      <Box className={styles.separatorsParent} style={frameBox4Style}>
        <img
          className={styles.separatorsIcon}
          loading="lazy"
          alt=""
          src={separators}
        />
        <div className={styles.nbfc}>NBFC</div>
      </Box>
      <Box className={styles.loanOriginationSystemParent}>
        <Typography
          className={styles.loanOriginationSystem}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400", lineHeight: "120%" }}
        >
          {loanOriginationSystem}
        </Typography>
        <div
          className={styles.n7BringsFull}
        >{`N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients `}</div>
      </Box>
      <Component3 property1={property1} />
    </Box>
  );
};

export default FeatureContainers1;
