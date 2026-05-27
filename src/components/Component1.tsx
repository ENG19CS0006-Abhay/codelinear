import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <Box
      className={[styles.component1, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.readAllInsightsParent}>
        <div className={styles.readAllInsights}>read all insights</div>
        <img className={styles.spaceIcon} alt="" src="/Spacers@2x.png" />
      </Box>
      <Box className={styles.guidance} />
    </Box>
  );
};

export default Component1;
