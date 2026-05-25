import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Component3.module.css";

export type Component3Type = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <Box
      className={[styles.component3, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.learnMoreParent}>
        <div className={styles.learnMore}>learn more</div>
        <img className={styles.spacersIcon} alt="" src="/Spacers@2x.png" />
      </Box>
      <Box className={styles.component3Child} />
    </Box>
  );
};

export default Component3;
