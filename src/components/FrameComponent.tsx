import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";
import BannerParts from "./BannerParts";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <section
      className={[styles.frameWrapper, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.bannerPartsParent}>
        <BannerParts n7="N7" />
        <BannerParts bannerPartsMarginLeft="unset" n7="CB7" />
      </Box>
    </section>
  );
};

export default FrameComponent;
