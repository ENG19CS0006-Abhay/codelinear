import { FunctionComponent, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import FeatureContainers from "./FeatureContainers";
import FeatureContainers1 from "./FeatureContainers1";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const [featureContainersItems] = useState([
    {
      frame26: "/Frame-26.svg",
      coreBankingCB7: "Core Banking CB7",
      coreBankingCB7Opacity: undefined,
      cBHelpsYourFinancialInstitutio:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      property1: "Frame 61" as const,
    },
    {
      frame26: "/Frame-261.svg",
      coreBankingCB7: "Digital Banking N7",
      coreBankingCB7Opacity: "0.9" as const,
      cBHelpsYourFinancialInstitutio:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
      property1: "Frame 61" as const,
    },
    {
      frame26: "/Frame-262.svg",
      coreBankingCB7: "Open Banking",
      coreBankingCB7Opacity: undefined,
      cBHelpsYourFinancialInstitutio:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      property1: "Frame 61" as const,
    },
  ]);
  return (
    <section className={[styles.ellipseParent, className].join(" ")}>
      <Box className={styles.frameChild} />
      <Box className={styles.allOfOurSolutionsAreTailoParent}>
        <Typography
          className={styles.allOfOur}
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{
            fontWeight: "400",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
          }}
        >
          All of our solutions are tailor-made to your needs
        </Typography>
        <Button
          className={styles.frameItem}
          disableElevation
          variant="outlined"
          sx={{
            color: "#e9f4f9",
            fontSize: "15",
            borderColor: "#e9f4f9",
            borderRadius: "10px",
            "&:hover": { borderColor: "#e9f4f9" },
          }}
        >
          request demo
        </Button>
      </Box>
      <Box className={styles.featureContainersParent}>
        {featureContainersItems.map((item, index) => (
          <FeatureContainers
            key={index}
            frame26={item.frame26}
            coreBankingCB7={item.coreBankingCB7}
            coreBankingCB7Opacity={item.coreBankingCB7Opacity}
            cBHelpsYourFinancialInstitutio={item.cBHelpsYourFinancialInstitutio}
            property1={item.property1}
          />
        ))}
        <FeatureContainers1
          separators="/Separators.svg"
          loanOriginationSystem="Loan Origination System"
          property1="Frame 61"
        />
        <FeatureContainers1
          frameBoxPadding="unset"
          separators="/Frame-263.svg"
          loanOriginationSystem="Loan Management System"
          property1="Frame 61"
        />
      </Box>
    </section>
  );
};

export default FrameComponent1;
