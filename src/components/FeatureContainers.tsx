import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import Component3 from "./Component3";
import styles from "./FeatureContainers.module.css";

export type FeatureContainersType = {
  className?: string;
  frame26?: string;
  coreBankingCB7?: string;
  cBHelpsYourFinancialInstitutio?: string;
  property1?: CSSProperties["property1"];

  /** Style props */
  coreBankingCB7Opacity?: CSSProperties["opacity"];
};

const FeatureContainers: FunctionComponent<FeatureContainersType> = ({
  className = "",
  frame26,
  coreBankingCB7,
  coreBankingCB7Opacity,
  cBHelpsYourFinancialInstitutio,
  property1,
}) => {
  const coreBankingCB7Style: CSSProperties = useMemo(() => {
    return {
      opacity: coreBankingCB7Opacity,
    };
  }, [coreBankingCB7Opacity]);

  return (
    <Box className={[styles.featureContainers, className].join(" ")}>
      <img
        className={styles.featureContainersChild}
        loading="lazy"
        alt=""
        src={frame26}
      />
      <Box className={styles.featureList}>
        <Typography
          className={styles.coreBankingCb7}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400", lineHeight: "120%" }}
          style={coreBankingCB7Style}
        >
          {coreBankingCB7}
        </Typography>
        <div className={styles.cb7HelpsYour}>
          {cBHelpsYourFinancialInstitutio}
        </div>
      </Box>
      <Component3 property1={property1} />
    </Box>
  );
};

export default FeatureContainers;
