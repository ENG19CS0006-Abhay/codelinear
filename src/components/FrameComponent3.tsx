import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type FrameComponent3Type = {
  className?: string;
};

// High-fidelity custom inline SVG brand wireframe pattern used as the main cover visual
const GraphicWireframe = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Background Grid Accent */}
    <rect width="200" height="200" rx="16" fill="#030c17" />
    
    {/* Geometric 4-Quadrant Wireframe Stars */}
    {/* Top-Left Star */}
    <g transform="translate(45, 45)">
      <path d="M-15 0 C-5 0 -5 10 0 10 C5 10 5 0 15 0 C5 0 5 -10 0 -10 C-5 -10 -5 0 -15 0 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
      <path d="M0 -15 C0 -5 10 -5 10 0 C10 5 0 5 0 15 C0 5 -10 5 -10 0 C-10 -5 0 -5 0 -15 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
    </g>
    
    {/* Top-Right Star */}
    <g transform="translate(155, 45)">
      <path d="M-15 0 C-5 0 -5 10 0 10 C5 10 5 0 15 0 C5 0 5 -10 0 -10 C-5 -10 -5 0 -15 0 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
      <path d="M0 -15 C0 -5 10 -5 10 0 C10 5 0 5 0 15 C0 5 -10 5 -10 0 C-10 -5 0 -5 0 -15 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
    </g>

    {/* Bottom-Left Star */}
    <g transform="translate(45, 155)">
      <path d="M-15 0 C-5 0 -5 10 0 10 C5 10 5 0 15 0 C5 0 5 -10 0 -10 C-5 -10 -5 0 -15 0 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
      <path d="M0 -15 C0 -5 10 -5 10 0 C10 5 0 5 0 15 C0 5 -10 5 -10 0 C-10 -5 0 -5 0 -15 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
    </g>

    {/* Bottom-Right Star */}
    <g transform="translate(155, 155)">
      <path d="M-15 0 C-5 0 -5 10 0 10 C5 10 5 0 15 0 C5 0 5 -10 0 -10 C-5 -10 -5 0 -15 0 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
      <path d="M0 -15 C0 -5 10 -5 10 0 C10 5 0 5 0 15 C0 5 -10 5 -10 0 C-10 -5 0 -5 0 -15 Z" stroke="#00b4fd" strokeWidth="4" fill="none" />
    </g>
  </svg>
);

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const baseFont = "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  // Data modeling representing the structured Insight posts shown in image_6d7c6f.png
  const secondaryInsights = [
    {
      category: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24"
    },
    {
      category: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24"
    }
  ];

  return (
    <Box
      component="section"
      className={className}
      sx={{
        width: "100%",
        backgroundColor: "#050b14", // Signature background color
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
          width: "500px",
          height: "500px",
          position: "absolute",
          top: "20%",
          left: "-15%",
          filter: "blur(200px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 180, 253, 0.06) 0%, rgba(0, 58, 206, 0.01) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left Column: Headline Section */}
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
          Get yourself up-to-speed on all the things happening in fintech
        </Typography>

        <Button
          disableElevation
          variant="outlined"
          sx={{
            color: "#e9f4f9",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.15em",
            borderColor: "rgba(233, 244, 249, 0.3)",
            borderRadius: "6px",
            padding: "12px 32px",
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
          Insights
        </Button>
      </Box>

      {/* Right Column: High-Fidelity Cards Stack/Grid */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          zIndex: 1,
          width: "100%"
        }}
      >
        {/* Featured Card (Top banner block with visual representation) */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#07101c",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            padding: "24px",
            gap: "32px",
            alignItems: "center",
            boxSizing: "border-box",
            transition: "transform 0.3s ease, border-color 0.3s ease",
            "&:hover": {
              borderColor: "rgba(0, 180, 253, 0.25)",
            }
          }}
        >
          {/* Wireframe Graphic Container */}
          <Box
            sx={{
              width: { xs: "100%", md: "240px" },
              height: "220px",
              flexShrink: 0,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <GraphicWireframe />
          </Box>

          {/* Text and Action Box */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              minHeight: "180px",
              alignItems: "flex-start",
              gap: "20px"
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Typography
                sx={{
                  fontFamily: baseFont,
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.15em",
                  color: "#00b4fd",
                  textTransform: "uppercase"
                }}
              >
                Getting Started
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: baseFont,
                  fontSize: { xs: "22px", sm: "26px" },
                  fontWeight: "400",
                  lineHeight: "130%",
                  color: "#ffffff"
                }}
              >
                How to transition from a traditional to a digital bank
              </Typography>
              {/* Profile Block */}
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center", opacity: 0.6 }}>
                <Typography sx={{ fontFamily: baseFont, fontSize: "13px" }}>David Grohl</Typography>
                <Typography sx={{ fontFamily: baseFont, fontSize: "13px" }}>17/08/24</Typography>
              </Box>
            </Box>

            <Button
              disableElevation
              variant="outlined"
              sx={{
                color: "rgba(233, 244, 249, 0.6)",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.1em",
                borderColor: "rgba(233, 244, 249, 0.2)",
                borderRadius: "8px",
                padding: "8px 24px",
                width: { xs: "100%", sm: "240px" },
                textTransform: "uppercase",
                fontFamily: baseFont,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#00b4fd",
                  borderColor: "#00b4fd",
                  backgroundColor: "rgba(0, 180, 253, 0.02)"
                }
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>

        {/* Bottom Double Grid of Secondary Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "100%", md: "repeat(2, 1fr)" },
            gap: "32px",
            width: "100%"
          }}
        >
          {secondaryInsights.map((insight, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#07101c",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "32px",
                boxSizing: "border-box",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(0, 180, 253, 0.25)",
                }
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Typography
                  sx={{
                    fontFamily: baseFont,
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.15em",
                    color: "#00b4fd",
                    textTransform: "uppercase"
                  }}
                >
                  {insight.category}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: baseFont,
                    fontSize: "22px",
                    fontWeight: "400",
                    lineHeight: "130%",
                    color: "#ffffff"
                  }}
                >
                  {insight.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "16px", alignItems: "center", opacity: 0.6 }}>
                  <Typography sx={{ fontFamily: baseFont, fontSize: "13px" }}>{insight.author}</Typography>
                  <Typography sx={{ fontFamily: baseFont, fontSize: "13px" }}>{insight.date}</Typography>
                </Box>
              </Box>

              <Button
                disableElevation
                variant="outlined"
                sx={{
                  color: "rgba(233, 244, 249, 0.6)",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  borderColor: "rgba(233, 244, 249, 0.2)",
                  borderRadius: "8px",
                  padding: "8px 24px",
                  textTransform: "uppercase",
                  fontFamily: baseFont,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#00b4fd",
                    borderColor: "#00b4fd",
                    backgroundColor: "rgba(0, 180, 253, 0.02)"
                  }
                }}
              >
                Read More
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FrameComponent3;
