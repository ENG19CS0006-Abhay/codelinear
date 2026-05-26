import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type ContactFooterType = {
  className?: string;
};

// Inline SVG arrow for modern, dependency-free rendering that scales perfectly
const ArrowIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#00b4fd" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ flexShrink: 0, transition: "transform 0.2s ease" }}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ContactFooter: FunctionComponent<ContactFooterType> = ({
  className = "",
}) => {
  // Theme-aware design configurations to replace the separate .css file
  const baseFont = "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  return (
    <Box
      component="footer"
      className={className}
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#050b14", // Neutral high-fidelity dark slate
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: { xs: "60px 24px 32px", sm: "100px 5% 40px" },
        boxSizing: "border-box",
        position: "relative",
        isolation: "isolate",
        gap: { xs: "48px", sm: "80px" },
        maxWidth: "100%",
        textAlign: "left",
        fontFamily: baseFont,
        color: "#ffffff",
      }}
    >
      {/* Dynamic Ambient Blur Effect */}
      <Box
        sx={{
          width: "100%",
          height: "556.8px",
          position: "absolute",
          margin: "0 !important",
          top: "547.5px",
          left: 0,
          filter: "blur(200px)",
          borderRadius: "50%",
          background: "linear-gradient(103.43deg, rgba(0, 180, 253, 0.05), rgba(0, 58, 206, 0.05))",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: { xs: "50px", lg: "60px" },
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Customized high-fidelity vector brand representation for "N7" */}
        <Box
          sx={{
            flex: { xs: "none", lg: "0 0 280px" },
            width: { xs: "100%", lg: "auto" },
            maxWidth: { xs: "180px", lg: "240px" },
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <svg
            viewBox="0 0 280 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <defs>
              <linearGradient id="n7Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4fd" />
                <stop offset="45%" stopColor="#0072ff" />
                <stop offset="100%" stopColor="#003ace" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="145"
              fontFamily={baseFont}
              fontWeight="900"
              fontSize="175"
              fill="url(#n7Gradient)"
              letterSpacing="-7"
            >
              N7
            </text>
          </svg>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: { sm: "wrap", md: "nowrap" },
            alignItems: "flex-start",
            justifyContent: "space-between",
            flex: 1,
            gap: "40px",
            width: "100%",
          }}
        >
          {/* Column 1 - London Office & Solutions */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 1,
              minWidth: { xs: "100%", sm: "240px", md: "200px" },
              gap: { xs: "40px", sm: "64px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                London
              </Typography>
              <Typography sx={{ fontSize: "14.5px", lineHeight: "150%", color: "rgba(233, 244, 249, 0.7)", fontFamily: baseFont }}>
                Linktia Infosystems Ltd – CB7,
                <br />
                26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                Solutions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                {[
                  "Core Banking CB7",
                  "Digital Banking N7",
                  "Open Banking",
                  "Loan Origination System",
                  "Loan Management System",
                  "Digital Transformation",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      maxWidth: "240px",
                      gap: "16px",
                      padding: "4px 0",
                      cursor: "pointer",
                      "&:hover .openBankingText": { color: "#00b4fd" },
                      "&:hover svg": { transform: "translateX(4px)" },
                    }}
                  >
                    <Typography
                      className="openBankingText"
                      sx={{
                        fontSize: "15px",
                        lineHeight: "130%",
                        color: "rgba(233, 244, 249, 0.7)",
                        transition: "color 0.2s ease",
                        fontFamily: baseFont,
                      }}
                    >
                      {item}
                    </Typography>
                    <ArrowIcon />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Column 2 - Dubai Office & N7 Banking */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 1,
              minWidth: { xs: "100%", sm: "240px", md: "200px" },
              gap: { xs: "40px", sm: "64px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                Dubai
              </Typography>
              <Typography sx={{ fontSize: "14.5px", lineHeight: "150%", color: "rgba(233, 244, 249, 0.7)", fontFamily: baseFont }}>
                Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                N7 Banking
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                {[
                  "About Us",
                  "Solutions",
                  "Contact",
                  "Company",
                  "Careers",
                  "Insights",
                  "Core Team",
                  "Brand Center",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      maxWidth: "240px",
                      gap: "16px",
                      padding: "4px 0",
                      cursor: "pointer",
                      "&:hover .openBankingText": { color: "#00b4fd" },
                      "&:hover svg": { transform: "translateX(4px)" },
                    }}
                  >
                    <Typography
                      className="openBankingText"
                      sx={{
                        fontSize: "15px",
                        lineHeight: "130%",
                        color: "rgba(233, 244, 249, 0.7)",
                        transition: "color 0.2s ease",
                        fontFamily: baseFont,
                      }}
                    >
                      {item}
                    </Typography>
                    <ArrowIcon />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Column 3 - Pune Office & Socials */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 1,
              minWidth: { xs: "100%", sm: "240px", md: "200px" },
              gap: { xs: "40px", sm: "64px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                London
              </Typography>
              <Typography sx={{ fontSize: "14.5px", lineHeight: "150%", color: "rgba(233, 244, 249, 0.7)", fontFamily: baseFont }}>
                Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", fontFamily: baseFont }}>
                Our Socials
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                {["LinkedIn", "X"].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      maxWidth: "240px",
                      gap: "16px",
                      padding: "4px 0",
                      cursor: "pointer",
                      "&:hover .openBankingText": { color: "#00b4fd" },
                      "&:hover svg": { transform: "translateX(4px)" },
                    }}
                  >
                    <Typography
                      className="openBankingText"
                      sx={{
                        fontSize: "15px",
                        lineHeight: "130%",
                        color: "rgba(233, 244, 249, 0.7)",
                        transition: "color 0.2s ease",
                        fontFamily: baseFont,
                      }}
                    >
                      {item}
                    </Typography>
                    <ArrowIcon />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright Strip */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "1280px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: { xs: "24px", sm: "32px" },
          color: "rgba(233, 244, 249, 0.35)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "11px", sm: "13px" },
            lineHeight: "150%",
            maxWidth: "800px",
            fontFamily: baseFont,
          }}
        >
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactFooter;
