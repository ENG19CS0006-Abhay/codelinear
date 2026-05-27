import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Nav.module.css";

export type NavType = {
  className?: string;
  homeButton1?: string;
  creditCard11?: string;
  swap1?: string;
  user11?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  navWidth?: CSSProperties["width"];
  navHeight?: CSSProperties["height"];
  navPadding?: CSSProperties["padding"];
  navGap?: CSSProperties["gap"];
  inertiaRadiusWidth?: CSSProperties["width"];
  inertiaRadiusBackdropFilter?: CSSProperties["backdropFilter"];
  panelBoundsBackdropFilter?: CSSProperties["backdropFilter"];
  panelBoundsBorderRadius?: CSSProperties["borderRadius"];
  stageWrapperHeight?: CSSProperties["height"];
  stageWrapperWidth?: CSSProperties["width"];
  groupBoxWidth?: CSSProperties["width"];
  groupBoxHeight?: CSSProperties["height"];
  groupBoxPadding?: CSSProperties["padding"];
  frameBoxWidth?: CSSProperties["width"];
  frameBoxHeight?: CSSProperties["height"];
  frameBoxPadding?: CSSProperties["padding"];
  homeButton1IconHeight?: CSSProperties["height"];
  homeButton1IconWidth?: CSSProperties["width"];
  homeWidth?: CSSProperties["width"];
  homeHeight?: CSSProperties["height"];
  homeFontSize?: CSSProperties["fontSize"];
  limitShapeBorderRadius?: CSSProperties["borderRadius"];
  limitShapeWidth?: CSSProperties["width"];
  groupBoxHeight1?: CSSProperties["height"];
  groupBoxWidth1?: CSSProperties["width"];
  groupBoxPadding1?: CSSProperties["padding"];
  frameBoxWidth1?: CSSProperties["width"];
  frameBoxHeight1?: CSSProperties["height"];
  frameBoxPadding1?: CSSProperties["padding"];
  creditCard11IconHeight?: CSSProperties["height"];
  creditCard11IconWidth?: CSSProperties["width"];
  cardWidth?: CSSProperties["width"];
  cardHeight?: CSSProperties["height"];
  cardFontSize?: CSSProperties["fontSize"];
  groupBoxHeight2?: CSSProperties["height"];
  groupBoxWidth2?: CSSProperties["width"];
  groupBoxPadding2?: CSSProperties["padding"];
  frameBoxWidth2?: CSSProperties["width"];
  frameBoxHeight2?: CSSProperties["height"];
  frameBoxPadding2?: CSSProperties["padding"];
  swap1IconHeight?: CSSProperties["height"];
  swap1IconWidth?: CSSProperties["width"];
  transactionWidth?: CSSProperties["width"];
  transactionHeight?: CSSProperties["height"];
  transactionFontSize?: CSSProperties["fontSize"];
  groupBoxHeight3?: CSSProperties["height"];
  groupBoxWidth3?: CSSProperties["width"];
  groupBoxPadding3?: CSSProperties["padding"];
  frameBoxWidth3?: CSSProperties["width"];
  frameBoxHeight3?: CSSProperties["height"];
  frameBoxPadding3?: CSSProperties["padding"];
  user11IconHeight?: CSSProperties["height"];
  user11IconWidth?: CSSProperties["width"];
  profileWidth?: CSSProperties["width"];
  profileHeight?: CSSProperties["height"];
  profileFontSize?: CSSProperties["fontSize"];
};

const Nav: FunctionComponent<NavType> = ({
  className = "",
  property1 = "profile",
  navWidth,
  navHeight,
  navPadding,
  navGap,
  inertiaRadiusWidth,
  inertiaRadiusBackdropFilter,
  panelBoundsBackdropFilter,
  panelBoundsBorderRadius,
  stageWrapperHeight,
  stageWrapperWidth,
  groupBoxWidth,
  groupBoxHeight,
  groupBoxPadding,
  frameBoxWidth,
  frameBoxHeight,
  frameBoxPadding,
  homeButton1,
  homeButton1IconHeight,
  homeButton1IconWidth,
  homeWidth,
  homeHeight,
  homeFontSize,
  limitShapeBorderRadius,
  limitShapeWidth,
  groupBoxHeight1,
  groupBoxWidth1,
  groupBoxPadding1,
  frameBoxWidth1,
  frameBoxHeight1,
  frameBoxPadding1,
  creditCard11,
  creditCard11IconHeight,
  creditCard11IconWidth,
  cardWidth,
  cardHeight,
  cardFontSize,
  groupBoxHeight2,
  groupBoxWidth2,
  groupBoxPadding2,
  frameBoxWidth2,
  frameBoxHeight2,
  frameBoxPadding2,
  swap1,
  swap1IconHeight,
  swap1IconWidth,
  transactionWidth,
  transactionHeight,
  transactionFontSize,
  groupBoxHeight3,
  groupBoxWidth3,
  groupBoxPadding3,
  frameBoxWidth3,
  frameBoxHeight3,
  frameBoxPadding3,
  user11,
  user11IconHeight,
  user11IconWidth,
  profileWidth,
  profileHeight,
  profileFontSize,
}) => {
  const navStyle: CSSProperties = useMemo(() => {
    return {
      width: navWidth,
      height: navHeight,
      padding: navPadding,
      gap: navGap,
    };
  }, [navWidth, navHeight, navPadding, navGap]);

  const inertiaRadiusStyle: CSSProperties = useMemo(() => {
    return {
      width: inertiaRadiusWidth,
      backdropFilter: inertiaRadiusBackdropFilter,
    };
  }, [inertiaRadiusWidth, inertiaRadiusBackdropFilter]);

  const panelBoundsStyle: CSSProperties = useMemo(() => {
    return {
      backdropFilter: panelBoundsBackdropFilter,
      borderRadius: panelBoundsBorderRadius,
    };
  }, [panelBoundsBackdropFilter, panelBoundsBorderRadius]);

  const stageWrapperStyle: CSSProperties = useMemo(() => {
    return {
      height: stageWrapperHeight,
      width: stageWrapperWidth,
    };
  }, [stageWrapperHeight, stageWrapperWidth]);

  const groupBoxStyle: CSSProperties = useMemo(() => {
    return {
      width: groupBoxWidth,
      height: groupBoxHeight,
      padding: groupBoxPadding,
    };
  }, [groupBoxWidth, groupBoxHeight, groupBoxPadding]);

  const frameBoxStyle: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth,
      height: frameBoxHeight,
      padding: frameBoxPadding,
    };
  }, [frameBoxWidth, frameBoxHeight, frameBoxPadding]);

  const homeButton1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: homeButton1IconHeight,
      width: homeButton1IconWidth,
    };
  }, [homeButton1IconHeight, homeButton1IconWidth]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      width: homeWidth,
      height: homeHeight,
      fontSize: homeFontSize,
    };
  }, [homeWidth, homeHeight, homeFontSize]);

  const limitShapeStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: limitShapeBorderRadius,
      width: limitShapeWidth,
    };
  }, [limitShapeBorderRadius, limitShapeWidth]);

  const groupBox1Style: CSSProperties = useMemo(() => {
    return {
      height: groupBoxHeight1,
      width: groupBoxWidth1,
      padding: groupBoxPadding1,
    };
  }, [groupBoxHeight1, groupBoxWidth1, groupBoxPadding1]);

  const frameBox1Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth1,
      height: frameBoxHeight1,
      padding: frameBoxPadding1,
    };
  }, [frameBoxWidth1, frameBoxHeight1, frameBoxPadding1]);

  const creditCard11IconStyle: CSSProperties = useMemo(() => {
    return {
      height: creditCard11IconHeight,
      width: creditCard11IconWidth,
    };
  }, [creditCard11IconHeight, creditCard11IconWidth]);

  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: cardWidth,
      height: cardHeight,
      fontSize: cardFontSize,
    };
  }, [cardWidth, cardHeight, cardFontSize]);

  const groupBox2Style: CSSProperties = useMemo(() => {
    return {
      height: groupBoxHeight2,
      width: groupBoxWidth2,
      padding: groupBoxPadding2,
    };
  }, [groupBoxHeight2, groupBoxWidth2, groupBoxPadding2]);

  const frameBox2Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth2,
      height: frameBoxHeight2,
      padding: frameBoxPadding2,
    };
  }, [frameBoxWidth2, frameBoxHeight2, frameBoxPadding2]);

  const swap1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: swap1IconHeight,
      width: swap1IconWidth,
    };
  }, [swap1IconHeight, swap1IconWidth]);

  const transactionStyle: CSSProperties = useMemo(() => {
    return {
      width: transactionWidth,
      height: transactionHeight,
      fontSize: transactionFontSize,
    };
  }, [transactionWidth, transactionHeight, transactionFontSize]);

  const groupBox3Style: CSSProperties = useMemo(() => {
    return {
      height: groupBoxHeight3,
      width: groupBoxWidth3,
      padding: groupBoxPadding3,
    };
  }, [groupBoxHeight3, groupBoxWidth3, groupBoxPadding3]);

  const frameBox3Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth3,
      height: frameBoxHeight3,
      padding: frameBoxPadding3,
    };
  }, [frameBoxWidth3, frameBoxHeight3, frameBoxPadding3]);

  const user11IconStyle: CSSProperties = useMemo(() => {
    return {
      height: user11IconHeight,
      width: user11IconWidth,
    };
  }, [user11IconHeight, user11IconWidth]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      width: profileWidth,
      height: profileHeight,
      fontSize: profileFontSize,
    };
  }, [profileWidth, profileHeight, profileFontSize]);

  return (
    <Box
      className={[styles.nav, className].join(" ")}
      data-property1={property1}
      style={navStyle}
    >
      <Box className={styles.inertiaRadius} style={inertiaRadiusStyle} />
      <Box className={styles.panelBounds} style={panelBoundsStyle} />
      <Box className={styles.stageWrapper} style={stageWrapperStyle}>
        <Box className={styles.frameParent} style={groupBoxStyle}>
          <Box className={styles.homeButton1Wrapper} style={frameBoxStyle}>
            <img
              className={styles.homeButton1Icon}
              alt=""
              src={homeButton1}
              style={homeButton1IconStyle}
            />
          </Box>
          <div className={styles.home} style={homeStyle}>
            Home
          </div>
        </Box>
        <Box className={styles.limitShape} style={limitShapeStyle} />
      </Box>
      <Box className={styles.frameGroup} style={groupBox1Style}>
        <Box className={styles.creditCard11Wrapper} style={frameBox1Style}>
          <img
            className={styles.creditCard11Icon}
            alt=""
            src={creditCard11}
            style={creditCard11IconStyle}
          />
        </Box>
        <div className={styles.card} style={cardStyle}>
          Card
        </div>
      </Box>
      <Box className={styles.frameContainer} style={groupBox2Style}>
        <Box className={styles.swap1Wrapper} style={frameBox2Style}>
          <img
            className={styles.swap1Icon}
            alt=""
            src={swap1}
            style={swap1IconStyle}
          />
        </Box>
        <div className={styles.transaction} style={transactionStyle}>
          Transaction
        </div>
      </Box>
      <Box className={styles.groupBox} style={groupBox3Style}>
        <Box className={styles.user11Wrapper} style={frameBox3Style}>
          <img
            className={styles.user11Icon}
            alt=""
            src={user11}
            style={user11IconStyle}
          />
        </Box>
        <div className={styles.profile} style={profileStyle}>
          Profile
        </div>
      </Box>
    </Box>
  );
};

export default Nav;
