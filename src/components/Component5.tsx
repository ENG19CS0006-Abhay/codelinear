import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Component5.module.css";

export type Component5Type = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <Box
      className={[styles.component5, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.linkLabel}>
        <div className={styles.viewAll}>view all</div>
        <img className={styles.icon} alt="" src="/Spacers@2x.png" />
      </Box>
      <Box className={styles.component5Child} />
    </Box>
  );
};

export default Component5;
