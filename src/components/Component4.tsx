import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Component4.module.css";

export type Component4Type = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <Box
      className={[styles.component4, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.learnMoreParent}>
        <div className={styles.learnMore}>learn more</div>
        <img className={styles.hiddenIcon} alt="" src="/Hidden@2x.png" />
      </Box>
      <Box className={styles.guide} />
    </Box>
  );
};

export default Component4;
