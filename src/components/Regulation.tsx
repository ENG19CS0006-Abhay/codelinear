import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Regulation.module.css";

export type RegulationType = {
  className?: string;
  iPhone13Pro?: string;
  fullyCompliantWithRegulatory?: string;
  theGovernanceOfRiskManagement?: string;
  preIntegratedSecuritySystem?: string;
  fullyCompliantWithRegulatory1?: string;
  digitallyConnectedCore?: string;

  /** Style props */
  frameBoxWidth?: CSSProperties["width"];
  preIntegratedSecuritySystemFlex?: CSSProperties["flex"];
  preIntegratedSecuritySystemWidth?: CSSProperties["width"];
  preIntegratedSecuritySystemDisplay?: CSSProperties["display"];
  transformationWidth?: CSSProperties["width"];
  transformationAlignItems?: CSSProperties["alignItems"];
  fullyCompliantWithFlex?: CSSProperties["flex"];
  fullyCompliantWithWidth?: CSSProperties["width"];
  fullyCompliantWithDisplay?: CSSProperties["display"];
  digitalSystemWidth?: CSSProperties["width"];
  digitalSystemJustifyContent?: CSSProperties["justifyContent"];
  digitallyConnectedCoreFlex?: CSSProperties["flex"];
  digitallyConnectedCoreWidth?: CSSProperties["width"];
  digitallyConnectedCoreDisplay?: CSSProperties["display"];
};

const Regulation: FunctionComponent<RegulationType> = ({
  className = "",
  iPhone13Pro,
  fullyCompliantWithRegulatory,
  theGovernanceOfRiskManagement,
  frameBoxWidth,
  preIntegratedSecuritySystem,
  preIntegratedSecuritySystemFlex,
  preIntegratedSecuritySystemWidth,
  preIntegratedSecuritySystemDisplay,
  transformationWidth,
  transformationAlignItems,
  fullyCompliantWithRegulatory1,
  fullyCompliantWithFlex,
  fullyCompliantWithWidth,
  fullyCompliantWithDisplay,
  digitalSystemWidth,
  digitalSystemJustifyContent,
  digitallyConnectedCore,
  digitallyConnectedCoreFlex,
  digitallyConnectedCoreWidth,
  digitallyConnectedCoreDisplay,
}) => {
  const frameBox5Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth,
    };
  }, [frameBoxWidth]);

  const preIntegratedSecuritySystemStyle: CSSProperties = useMemo(() => {
    return {
      flex: preIntegratedSecuritySystemFlex,
      width: preIntegratedSecuritySystemWidth,
      display: preIntegratedSecuritySystemDisplay,
    };
  }, [
    preIntegratedSecuritySystemFlex,
    preIntegratedSecuritySystemWidth,
    preIntegratedSecuritySystemDisplay,
  ]);

  const transformationStyle: CSSProperties = useMemo(() => {
    return {
      width: transformationWidth,
      alignItems: transformationAlignItems,
    };
  }, [transformationWidth, transformationAlignItems]);

  const fullyCompliantWithStyle: CSSProperties = useMemo(() => {
    return {
      flex: fullyCompliantWithFlex,
      width: fullyCompliantWithWidth,
      display: fullyCompliantWithDisplay,
    };
  }, [
    fullyCompliantWithFlex,
    fullyCompliantWithWidth,
    fullyCompliantWithDisplay,
  ]);

  const digitalSystemStyle: CSSProperties = useMemo(() => {
    return {
      width: digitalSystemWidth,
      justifyContent: digitalSystemJustifyContent,
    };
  }, [digitalSystemWidth, digitalSystemJustifyContent]);

  const digitallyConnectedCoreStyle: CSSProperties = useMemo(() => {
    return {
      flex: digitallyConnectedCoreFlex,
      width: digitallyConnectedCoreWidth,
      display: digitallyConnectedCoreDisplay,
    };
  }, [
    digitallyConnectedCoreFlex,
    digitallyConnectedCoreWidth,
    digitallyConnectedCoreDisplay,
  ]);

  return (
    <section className={[styles.regulation, className].join(" ")}>
      <img
        className={styles.iphone13Pro}
        loading="lazy"
        alt=""
        src={iPhone13Pro}
      />
      <Box className={styles.requirements}>
        <Box className={styles.frameParent}>
          <Box className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/Individual.svg" />
            <div className={styles.fullyCompliantWith}>
              {fullyCompliantWithRegulatory}
            </div>
          </Box>
          <div className={styles.theGovernanceOf}>
            {theGovernanceOfRiskManagement}
          </div>
        </Box>
        <Box className={styles.frameContainer}>
          <Box className={styles.defaultsParent} style={frameBox5Style}>
            <img className={styles.defaultsIcon} alt="" src="/Individual.svg" />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={preIntegratedSecuritySystemStyle}
            >
              {preIntegratedSecuritySystem}
            </div>
          </Box>
          <Box className={styles.transformation} style={transformationStyle}>
            <img className={styles.defaultsIcon} alt="" src="/Individual.svg" />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={fullyCompliantWithStyle}
            >
              {fullyCompliantWithRegulatory1}
            </div>
          </Box>
          <Box className={styles.digitalSystem} style={digitalSystemStyle}>
            <img className={styles.defaultsIcon} alt="" src="/Individual.svg" />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={digitallyConnectedCoreStyle}
            >
              {digitallyConnectedCore}
            </div>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Regulation;
