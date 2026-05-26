import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

// Pure SVG arrow icon for clean rendering and interactive translation on hover
const ArrowIcon = () => (
  <svg
    className="arrowSvg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00b4fd"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transition: "transform 0.2s ease, stroke 0.2s ease" }}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const baseFont = "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  // Content mapped directly matching the layout in image_6d1bcf.png
  const solutions = [
    {
      title: "Core Banking CB7",
      description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      hasBadge: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" stroke="#e9f4f9" strokeWidth="1.2">
          {/* Custom high-fidelity geometric wireframe representing Core Banking */}
          <circle cx="22" cy="22" r="16" strokeDasharray="3 3" />
          <circle cx="22" cy="22" r="10" />
          <path d="M6 22h32M22 6v32" opacity="0.4" />
        </svg>
      )
    },
    {
      title: "Digital Banking N7",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      hasBadge: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" stroke="#e9f4f9" strokeWidth="1.2">
          {/* Custom high-fidelity geometric wireframe representing Digital Banking */}
          <rect x="10" y="10" width="24" height="24" rx="3" />
          <path d="M16 10v24M28 10v24M10 16h24M10 28h24" opacity="0.3" />
          <circle cx="22" cy="22" r="4" stroke="#00b4fd" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Open Banking",
      description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      hasBadge: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" stroke="#e9f4f9" strokeWidth="1.2">
          {/* Custom high-fidelity geometric wireframe representing Open Banking */}
          <path d="M22 6L8 14l14 8 14-8-14-8zM8 22l14 8 14-8M8 30l14 8 14-8" />
        </svg>
      )
    },
    {
      title: "Loan Origination System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      hasBadge: true,
      badgeText: "NBFC",
      icon: (
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" stroke="#e9f4f9" strokeWidth="1.2">
          {/* Custom high-fidelity geometric wireframe representing Loan Origination */}
          <path d="M22 8L10 20h24L22 8zM12 20v14h20V20" />
          <circle cx="22" cy="26" r="3" stroke="#00b4fd" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Loan Management System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      hasBadge: true,
      badgeText: "NBFC",
      icon: (
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" stroke="#e9f4f9" strokeWidth="1.2">
          {/* Custom high-fidelity geometric wireframe representing Loan Management */}
          <rect x="8" y="8" width="28" height="28" rx="4" />
          <path d="M14 18h16M14 26h10" stroke="#00b4fd" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <Box
      component="section"
      className={className}
      sx={{
        width: "100%",
        backgroundColor: "#050b14", // Pitch dark slate matching the company signature colors
        color: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "60px", lg: "80px" },
        padding: { xs: "60px 24px", md: "100px 5%" },
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Background radial accent flare */}
      <Box
        sx={{
          width: "400px",
          height: "400px",
          position: "absolute",
          top: "10%",
          left: "-10%",
          filter: "blur(150px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 180, 253, 0.08) 0%, rgba(0, 58, 206, 0.02) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left Sticky Column: Headline + CTA Call-out */}
      <Box
        sx={{
          flex: { xs: "none", lg: "0 0 35%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: { lg: "sticky" },
          top: { lg: "60px" },
          height: "fit-content",
          gap: "32px",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: baseFont,
            fontWeight: "400",
            fontSize: { xs: "32px", sm: "40px", md: "46px" },
            lineHeight: "120%",
            letterSpacing: "-0.015em",
            color: "#ffffff",
          }}
        >
          All of our solutions are tailor-made to your needs
        </Typography>

        <Button
          disableElevation
          variant="outlined"
          sx={{
            color: "rgba(233, 244, 249, 0.85)",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.1em",
            borderColor: "rgba(233, 244, 249, 0.3)",
            borderRadius: "6px",
            padding: "12px 28px",
            textTransform: "uppercase",
            fontFamily: baseFont,
            transition: "all 0.25s ease",
            "&:hover": {
              borderColor: "#00b4fd",
              backgroundColor: "rgba(0, 180, 253, 0.05)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Request Demo
        </Button>
      </Box>

      {/* Right Column: Dynamic Solutions Showcase Grid */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "100%", sm: "repeat(2, 1fr)" },
          gap: "48px 40px",
          zIndex: 1,
        }}
      >
        {solutions.map((sol, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              paddingBottom: "8px",
            }}
          >
            {/* Action Top Header: Icon + Metric Badge */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "40px", height: "40px", display: "flex", alignItems: "center" }}>
                {sol.icon}
              </Box>
              {sol.hasBadge && (
                <Typography
                  sx={{
                    fontFamily: baseFont,
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "rgba(233, 244, 249, 0.4)",
                    letterSpacing: "1.5px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {sol.badgeText}
                </Typography>
              )}
            </Box>

            {/* Title */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: baseFont,
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "130%",
                color: "#ffffff",
              }}
            >
              {sol.title}
            </Typography>

            {/* Paragraph Text */}
            <Typography
              sx={{
                fontFamily: baseFont,
                fontSize: "14px",
                lineHeight: "160%",
                color: "rgba(233, 244, 249, 0.65)",
              }}
            >
              {sol.description}
            </Typography>

            {/* Interactive Link */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                paddingTop: "4px",
                "&:hover .learnText": {
                  color: "#00b4fd",
                },
                "&:hover .arrowSvg": {
                  transform: "translateX(4px)",
                  stroke: "#00b4fd",
                },
              }}
            >
              <Typography
                className="learnText"
                sx={{
                  fontFamily: baseFont,
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  color: "#00b4fd",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
              >
                Learn More
              </Typography>
              <ArrowIcon />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FrameComponent1;
