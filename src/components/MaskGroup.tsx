import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./MaskGroup.module.css";

export type MaskGroupType = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const MaskGroup: FunctionComponent<MaskGroupType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <Box
      className={[styles.maskGroup, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.bGRect} />
      <Box className={styles.maskShapes} />
      <Box className={styles.infoArea} />
    </Box>
  );
};

export default MaskGroup;
