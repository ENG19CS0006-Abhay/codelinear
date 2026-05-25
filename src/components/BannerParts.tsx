import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./BannerParts.module.css";

export type BannerPartsType = {
  className?: string;
  n7?: string;

  /** Style props */
  bannerPartsMarginLeft?: CSSProperties["marginLeft"];
};

const BannerParts: FunctionComponent<BannerPartsType> = ({
  className = "",
  bannerPartsMarginLeft,
  n7,
}) => {
  const bannerPartsStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: bannerPartsMarginLeft,
    };
  }, [bannerPartsMarginLeft]);

  return (
    <Box
      className={[styles.bannerParts, className].join(" ")}
      style={bannerPartsStyle}
    >
      <img
        className={styles.bannerItemsIcon}
        loading="lazy"
        alt=""
        src="/Banner-Items.svg"
      />
      <Typography
        className={styles.n7}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "500", lineHeight: "120%" }}
      >
        {n7}
      </Typography>
      <img
        className={styles.bannerItemsIcon}
        loading="lazy"
        alt=""
        src="/Banner-Items.svg"
      />
      <Typography
        className={styles.say}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "600", lineHeight: "120%" }}
      >
        Say
      </Typography>
      <img
        className={styles.httpslottiefilescomanimatIcon}
        loading="lazy"
        alt=""
        src="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
      />
      <Typography
        className={styles.say}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "600", lineHeight: "120%" }}
      >
        to the new way of banking
      </Typography>
    </Box>
  );
};

export default BannerParts;
