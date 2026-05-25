import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Logo.module.css";

export type LogoType = {
  className?: string;
  logoSegments?: string;
  sHELLS?: string;

  /** Variant props */
  name1?: CSSProperties["name"];

  /** Style props */
  sHELLSMargin?: CSSProperties["margin"];
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  name1 = "Header-Logo",
  logoSegments,
  sHELLS,
  sHELLSMargin,
}) => {
  const sHELLSStyle: CSSProperties = useMemo(() => {
    return {
      margin: sHELLSMargin,
    };
  }, [sHELLSMargin]);

  return (
    <Box className={[styles.root, className].join(" ")} data-name={name1}>
      <img className={styles.logoSegmentsIcon} alt="" src={logoSegments} />
      <Typography
        className={styles.shells}
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ lineHeight: "110%", fontWeight: "700" }}
        style={sHELLSStyle}
      >
        {sHELLS}
      </Typography>
    </Box>
  );
};

export default Logo;
