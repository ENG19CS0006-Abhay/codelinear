import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Component2.module.css";

export type Component2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <Box
      className={[styles.component2, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.engagementItems}>
        <div className={styles.readMore}>read more</div>
        <img className={styles.icon} alt="" src="/3@2x.png" />
      </Box>
      <Box className={styles.component2Child} />
    </Box>
  );
};

export default Component2;
