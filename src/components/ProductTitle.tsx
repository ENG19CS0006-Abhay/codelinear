import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import Component3 from "./Component3";
import styles from "./ProductTitle.module.css";

export type ProductTitleType = {
  className?: string;
};

const ProductTitle: FunctionComponent<ProductTitleType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.productTitle, className].join(" ")}>
      <Typography
        className={styles.cb7}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "500", lineHeight: "120%" }}
      >
        CB7
      </Typography>
      <section className={styles.productTitleInner}>
        <Box className={styles.frameParent}>
          <Box className={styles.frameGroup}>
            <Box className={styles.aCompleteCloudBasedCoreBaParent}>
              <Typography
                className={styles.aCompleteCloudBased}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                }}
              >
                A complete cloud-based core banking.
              </Typography>
              <div className={styles.fasterTimeTo}>
                Faster time to market with our cloud-based core banking services
              </div>
            </Box>
            <Button
              className={styles.frameChild}
              disableElevation
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "15",
                background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                borderRadius: "10px",
                "&:hover": {
                  background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                },
              }}
            >
              REQUEST DEMO
            </Button>
          </Box>
          <Component3 property1="Frame 61" />
        </Box>
      </section>
      <img
        className={styles.productTitleChild}
        loading="lazy"
        alt=""
        src="/Frame-90@2x.png"
      />
    </section>
  );
};

export default ProductTitle;
