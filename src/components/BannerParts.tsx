import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./BannerParts.module.css";

export type BannerPartsType = {
  className?: string;
  /** The gradient label, e.g. "N7" */
  n7?: string;
};

/**
 * A single repeating unit of content.
 * We render this MANY times so the track is always wider than the viewport,
 * guaranteeing a seamless loop regardless of screen size.
 */
const BannerUnit: FunctionComponent<{ n7?: string }> = ({ n7 }) => (
  <>
    {/* ── dot icon ── */}
    <span className={styles.separator} aria-hidden>◆</span>

    {/* ── "N7" gradient label ── */}
    <span className={styles.item}>
      <span className={styles.itemHighlight}>{n7 ?? "N7"}</span>
    </span>

    {/* ── dot icon ── */}
    <span className={styles.separator} aria-hidden>◆</span>

    {/* ── "Say" ── */}
    <span className={styles.item}>Say</span>

    {/* ── wave image ── */}
    <img
      className={styles.waveIcon}
      loading="lazy"
      alt="wave"
      src="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
      aria-hidden
    />

    {/* ── "to the new way of banking" ── */}
    <span className={styles.item}>to the new way of banking</span>
  </>
);

/**
 * BannerParts — an infinitely scrolling horizontal ticker strip.
 *
 * Strategy: render 8 copies of BannerUnit inside a single flex row.
 * The CSS animation translates by -50% (= 4 copies), then loops.
 * 8 copies guarantees that even at the smallest font/widest screen
 * the track always overflows, so no gap is ever visible.
 */
const COPIES = 8; // must be even for the -50% trick to work

const BannerParts: FunctionComponent<BannerPartsType> = ({
  className = "",
  n7,
}) => {
  return (
    <Box
      className={[styles.marqueeWrapper, className].join(" ")}
      role="marquee"
      aria-label="N7 — Say hello to the new way of banking"
    >
      <div className={styles.marqueeTrack}>
        {/* One logical "half" — the animation scrolls exactly this far */}
        <span className={styles.bannerStrip}>
          {Array.from({ length: COPIES / 2 }, (_, i) => (
            <BannerUnit key={`a-${i}`} n7={n7} />
          ))}
        </span>
        {/* Identical second half — loops seamlessly when first half exits */}
        <span className={styles.bannerStrip} aria-hidden>
          {Array.from({ length: COPIES / 2 }, (_, i) => (
            <BannerUnit key={`b-${i}`} n7={n7} />
          ))}
        </span>
      </div>
    </Box>
  );
};

export default BannerParts;
