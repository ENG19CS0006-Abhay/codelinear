import { FunctionComponent } from "react";
import { Typography, Box, Button, useTheme, useMediaQuery } from "@mui/material";

const baseFont =
  "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export type CallToActionProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
  onSecondaryClick?: () => void;
  onPrimaryClick?: () => void;
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionProps> = ({
  eyebrow,
  heading = "Take the full advantage of going paper-less now.",
  description,
  secondaryLabel = "Contact Us",
  primaryLabel = "Request Demo",
  onSecondaryClick,
  onPrimaryClick,
  className = "",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: "12px", sm: "16px" },
        background: "#05080f",
        // Subtle blue inner glow to match the Figma
        boxShadow: "inset 0 0 120px rgba(0, 58, 206, 0.12)",
        px: { xs: "24px", sm: "48px", md: "64px" },
        py: { xs: "40px", sm: "56px", md: "64px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: "32px", md: "48px" },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── Giant watermark "N7" in the background (right side) ── */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-20px", md: "0px" },
          top: "50%",
          transform: "translateY(-50%)",
          // Large enough to bleed off the right edge, matching Figma
          fontSize: { xs: "280px", sm: "360px", md: "480px" },
          fontFamily: baseFont,
          fontWeight: 700,
          lineHeight: 1,
          // Faint blue outline, no fill — exactly as seen in the video
          WebkitTextStroke: "1.5px rgba(0, 100, 220, 0.35)",
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
          zIndex: 0,
        }}
      >
        N7
      </Box>

      {/* ── Left: eyebrow + heading + description ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: { xs: "12px", md: "16px" },
          flex: 1,
          maxWidth: { md: "580px" },
        }}
      >
        {eyebrow && (
          <Typography
            component="p"
            sx={{
              fontFamily: baseFont,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(233,244,249,0.35)",
              mb: "4px",
            }}
          >
            {eyebrow}
          </Typography>
        )}

        <Typography
          component="h2"
          sx={{
            fontFamily: baseFont,
            fontWeight: 400,
            fontSize: { xs: "28px", sm: "40px", md: "52px" },
            lineHeight: "115%",
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          {heading}
        </Typography>

        {description && (
          <Typography
            component="p"
            sx={{
              fontFamily: baseFont,
              fontSize: { xs: "13px", sm: "14px" },
              lineHeight: "160%",
              color: "rgba(233,244,249,0.5)",
              maxWidth: "500px",
              mt: "4px",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {/* ── Right: buttons ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: "12px", sm: "16px" },
          flexShrink: 0,
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {/* Outlined "Contact Us" — white border, white text, rounded pill */}
        <Button
          disableElevation
          variant="outlined"
          onClick={onSecondaryClick}
          fullWidth={isMobile}
          sx={{
            color: "#e9f4f9",
            fontSize: { xs: "11px", sm: "12px" },
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: baseFont,
            borderColor: "rgba(233,244,249,0.55)",
            borderWidth: "1.5px",
            borderRadius: "100px",
            padding: { xs: "14px 28px", sm: "16px 36px" },
            minWidth: { sm: "160px" },
            whiteSpace: "nowrap",
            transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
            "&:hover": {
              borderColor: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.05)",
              transform: "translateY(-1px)",
              borderWidth: "1.5px",
            },
            "&:active": { transform: "none" },
          }}
        >
          {secondaryLabel}
        </Button>

        {/* Solid gradient "Request Demo" — pill shaped */}
        <Button
          disableElevation
          variant="contained"
          onClick={onPrimaryClick}
          fullWidth={isMobile}
          sx={{
            color: "#ffffff",
            fontSize: { xs: "11px", sm: "12px" },
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: baseFont,
            background: "linear-gradient(106.53deg, #00b4fd 0%, #003ace 100%)",
            borderRadius: "100px",
            padding: { xs: "14px 28px", sm: "16px 36px" },
            minWidth: { sm: "160px" },
            whiteSpace: "nowrap",
            boxShadow: "0 0 24px rgba(0, 100, 220, 0.4)",
            transition: "background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
            "&:hover": {
              background: "linear-gradient(106.53deg, #00c8ff 0%, #0040e0 100%)",
              boxShadow: "0 0 32px rgba(0, 130, 240, 0.55)",
              transform: "translateY(-1px)",
            },
            "&:active": { transform: "none" },
          }}
        >
          {primaryLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default CallToAction;
