import { FunctionComponent, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Nav from "./Nav";
import Logo from "./Logo";
import styles from "./Desktop.module.css";

export type DesktopType = {
  className?: string;
};

const Desktop: FunctionComponent<DesktopType> = ({ className = "" }) => {
  const [logoItems] = useState([
    {
      name1: "Shell" as const,
      logoSegments: "/Logo-Segments.svg",
      sHELLS: "SHELLS",
      sHELLSMargin: undefined,
    },
    {
      name1: "SmartFinder" as const,
      logoSegments: "/Group-45.svg",
      sHELLS: "SmartFinder",
      sHELLSMargin: undefined,
    },
    {
      name1: "Zoomerr" as const,
      logoSegments: "/Vector.svg",
      sHELLS: "Zoomerr",
      sHELLSMargin: undefined,
    },
    {
      name1: "ArtVenue" as const,
      logoSegments: "/Group-46.svg",
      sHELLS: "ArtVenue",
      sHELLSMargin: undefined,
    },
    {
      name1: "Kontrastr" as const,
      logoSegments: "/Group-47.svg",
      sHELLS: "kontrastr",
      sHELLSMargin: undefined,
    },
    {
      name1: "Waves" as const,
      logoSegments: "/Vector1.svg",
      sHELLS: "",
      sHELLSMargin: undefined,
    },
  ]);
  return (
    <section className={[styles.desktop1, className].join(" ")}>
      <Box className={styles.circle} />
      <section className={styles.headers}>
        <Box className={styles.showcase}>
          <Box className={styles.marketing}>
            <Box className={styles.foundations}>
              <Typography
                className={styles.theNewFoundation}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "500",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                }}
              >
                The new foundation of modern banking
              </Typography>
              <div className={styles.weDriveInnovation}>
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </div>
            </Box>
            <Box className={styles.controlRequest}>
              <Button
                className={styles.controlRequestChild}
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
              <Button
                className={styles.controlRequestItem}
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
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={styles.overlay}>
          <img
            className={styles.pexelsPhotoByAndreaPiacqua}
            alt=""
            src="/Pexels-Photo-by-Andrea-Piacquadio@2x.png"
          />
          <Box className={styles.home}>
            <Box className={styles.detailBlockParent}>
              <Box className={styles.detailBlock}>
                <Box className={styles.blockLayout}>
                  <img
                    className={styles.blockLayoutChild}
                    alt=""
                    src="/Rectangle-11@2x.png"
                  />
                  <Box className={styles.layerDisplay}>
                    <Box className={styles.toniKrossParent}>
                      <Typography
                        className={styles.toniKross}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Toni Kross
                      </Typography>
                      <div className={styles.goodMorning}>Good Morning</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.detailBlockInner}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/Group-5.svg"
                  />
                </Box>
              </Box>
              <Box className={styles.indicatorsFinance}>
                <Box className={styles.totalBalanceParent}>
                  <div className={styles.totalBalance}>Total balance</div>
                  <div className={styles.usd}>$42,295.00 USD</div>
                </Box>
                <Box className={styles.dividerVisual} />
              </Box>
              <Box className={styles.movementButtons}>
                <Box className={styles.buttonActionParent}>
                  <Box className={styles.buttonAction}>
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.frameItem} />
                      <img
                        className={styles.transferMoney1Icon}
                        alt=""
                        src="/transfer-money-1.svg"
                      />
                    </Box>
                  </Box>
                  <div className={styles.fundTransfer}>Fund Transfer</div>
                </Box>
                <Box className={styles.buttonActionParent}>
                  <Box className={styles.buttonResource}>
                    <Box className={styles.rectangleGroup}>
                      <Box className={styles.frameInner} />
                      <img
                        className={styles.dollar1Icon}
                        alt=""
                        src="/dollar-1.svg"
                      />
                    </Box>
                  </Box>
                  <div className={styles.addMoney}>Add Money</div>
                </Box>
                <Box className={styles.buttonActionParent}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/Group-71.svg"
                  />
                  <Box className={styles.optionMenu}>
                    <div className={styles.more}>More</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.processItems}>
              <div className={styles.recentActivity}>Recent activity</div>
              <Box className={styles.processItemsInner}>
                <Box className={styles.frameGroup}>
                  <Box className={styles.thisDayWrapper}>
                    <div className={styles.thisDay}>This Day</div>
                  </Box>
                  <Box className={styles.thisWeekWrapper}>
                    <div className={styles.thisDay}>This Week</div>
                  </Box>
                  <Box className={styles.thisMonthWrapper}>
                    <div className={styles.thisDay}>This Month</div>
                  </Box>
                  <Box className={styles.monthWrapper}>
                    <div className={styles.thisDay}>6 Month</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.recurrenceView}>
                <Box className={styles.entryDetailParent}>
                  <Box className={styles.entryDetail}>
                    <Box className={styles.dataDisplay}>
                      <img
                        className={styles.dataDisplayChild}
                        alt=""
                        src="/Group-16.svg"
                      />
                      <Box className={styles.frameContainer}>
                        <Box className={styles.toJinParent}>
                          <div className={styles.toJin}>To Jin</div>
                          <Box className={styles.position}>
                            <Box className={styles.radiusWrapper}>
                              <Box className={styles.radius} />
                            </Box>
                            <div className={styles.work}>Work</div>
                          </Box>
                        </Box>
                        <div className={styles.jun2022}>12 jun 2022</div>
                      </Box>
                    </Box>
                    <Box className={styles.order}>
                      <div className={styles.div}>-$59</div>
                    </Box>
                  </Box>
                  <Box className={styles.lineDiv} />
                </Box>
              </Box>
              <Box className={styles.recurrenceView}>
                <Box className={styles.groupDiv}>
                  <Box className={styles.frameParent2}>
                    <Box className={styles.dataDisplay}>
                      <img
                        className={styles.dataDisplayChild}
                        alt=""
                        src="/Group-171.svg"
                      />
                      <Box className={styles.frameContainer}>
                        <Box className={styles.fromGoogleParent}>
                          <div className={styles.fromGoogle}>From Google</div>
                          <Box className={styles.frameParent4}>
                            <Box className={styles.ellipseWrapper}>
                              <Box className={styles.ellipseDiv} />
                            </Box>
                            <div className={styles.salary}>Salary</div>
                          </Box>
                        </Box>
                        <div className={styles.jun20222}>10 jun 2022</div>
                      </Box>
                    </Box>
                    <Box className={styles.order}>
                      <div className={styles.div2}>+$859</div>
                    </Box>
                  </Box>
                  <Box className={styles.frameChild3} />
                </Box>
              </Box>
              <Box className={styles.recurrenceView3}>
                <Box className={styles.groupDiv}>
                  <Box className={styles.frameParent6}>
                    <Box className={styles.dataDisplay}>
                      <img
                        className={styles.frameChild4}
                        alt=""
                        src="/Group-16.svg"
                      />
                      <Box className={styles.frameParent8}>
                        <Box className={styles.toDavidParent}>
                          <div className={styles.toDavid}>To David</div>
                          <Box className={styles.frameParent4}>
                            <Box className={styles.ellipseWrapper}>
                              <Box className={styles.ellipseDiv} />
                            </Box>
                            <div className={styles.work2}>Work</div>
                          </Box>
                        </Box>
                        <div className={styles.jun20223}>7 jun 2022</div>
                      </Box>
                    </Box>
                    <Box className={styles.order}>
                      <div className={styles.div3}>-$479</div>
                    </Box>
                  </Box>
                  <Box className={styles.frameChild3} />
                </Box>
              </Box>
            </Box>
            <Box className={styles.frameParent10}>
              <Box className={styles.frameWrapper}>
                <Box className={styles.frameParent11}>
                  <Box className={styles.frameParent12}>
                    <Box className={styles.dataDisplay}>
                      <img
                        className={styles.dataDisplayChild}
                        alt=""
                        src="/Group-17.svg"
                      />
                      <Box className={styles.frameContainer}>
                        <Box className={styles.fromGoogleParent}>
                          <div className={styles.fromGoogle}>From Google</div>
                          <Box className={styles.frameParent4}>
                            <Box className={styles.ellipseWrapper}>
                              <Box className={styles.ellipseDiv} />
                            </Box>
                            <div className={styles.bonus}>Bonus</div>
                          </Box>
                        </Box>
                        <div className={styles.jun20222}>10 jun 2022</div>
                      </Box>
                    </Box>
                    <Box className={styles.order}>
                      <div className={styles.div2}>+$859</div>
                    </Box>
                  </Box>
                  <Box className={styles.lineDiv} />
                </Box>
              </Box>
              <Nav
                property1="Home"
                homeButton1="/006-home-button-1.svg"
                creditCard11="/004-credit-card-1-1.svg"
                swap1="/002-swap-1.svg"
                user11="/008-user-1-1.svg"
              />
            </Box>
          </Box>
          <Box className={styles.baseWindow}>
            <Box className={styles.home2}>
              <Box className={styles.surfaceBox}>
                <Box className={styles.unitArea}>
                  <Box className={styles.sublayer}>
                    <img
                      className={styles.basePanelIcon}
                      loading="lazy"
                      alt=""
                      src="/Base-Panel@2x.png"
                    />
                    <Box className={styles.sublayerInner}>
                      <Box className={styles.toniKrossGroup}>
                        <Typography
                          className={styles.toniKross2}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Toni Kross
                        </Typography>
                        <div className={styles.goodMorning2}>Good Morning</div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.spaceArea}>
                    <img
                      className={styles.spaceAreaChild}
                      alt=""
                      src="/Group-51.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.contentFormat}>
                <Box className={styles.ratioScope}>
                  <Box className={styles.totalBalanceGroup}>
                    <div className={styles.totalBalance2}>Total balance</div>
                    <div className={styles.usd2}>$42,295.00 USD</div>
                  </Box>
                  <Box className={styles.centerDivision} />
                </Box>
              </Box>
              <Box className={styles.formLayout}>
                <Box className={styles.mainStructure}>
                  <Box className={styles.spaceSectorParent}>
                    <Box className={styles.spaceSector}>
                      <Box className={styles.rectangleContainer}>
                        <Box className={styles.rectangleDiv} />
                        <img
                          className={styles.transferMoney1Icon2}
                          alt=""
                          src="/transfer-money-1.svg"
                        />
                      </Box>
                    </Box>
                    <div className={styles.fundTransfer2}>Fund Transfer</div>
                  </Box>
                  <Box className={styles.spaceSectorParent}>
                    <Box className={styles.styleShape}>
                      <Box className={styles.rectangleParent2}>
                        <Box className={styles.frameChild9} />
                        <img
                          className={styles.dollar1Icon2}
                          alt=""
                          src="/dollar-1.svg"
                        />
                      </Box>
                    </Box>
                    <div className={styles.addMoney2}>Add Money</div>
                  </Box>
                  <Box className={styles.spaceSectorParent}>
                    <img
                      className={styles.frameChild10}
                      loading="lazy"
                      alt=""
                      src="/Group-7.svg"
                    />
                    <Box className={styles.valueDetail}>
                      <div className={styles.more2}>More</div>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.locationBoard}>
                <Box className={styles.areaModule}>
                  <Box className={styles.formatView}>
                    <div className={styles.recentActivity2}>
                      Recent activity
                    </div>
                    <Box className={styles.scopeDesign}>
                      <Box className={styles.configView}>
                        <Box className={styles.thisDayContainer}>
                          <div className={styles.thisDay2}>This Day</div>
                        </Box>
                        <Box className={styles.thisWeekContainer}>
                          <div className={styles.thisDay2}>This Week</div>
                        </Box>
                        <Box className={styles.thisMonthContainer}>
                          <div className={styles.thisDay2}>This Month</div>
                        </Box>
                        <Box className={styles.monthContainer}>
                          <div className={styles.thisDay2}>6 Month</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.formatViewInner}>
                      <Box className={styles.frameParent17}>
                        <Box className={styles.detailStyleParent}>
                          <Box className={styles.detailStyle}>
                            <img
                              className={styles.detailStyleChild}
                              alt=""
                              src="/Group-161.svg"
                            />
                            <Box className={styles.frameParent18}>
                              <Box className={styles.toJinGroup}>
                                <div className={styles.toJin2}>To Jin</div>
                                <Box className={styles.holderDirection}>
                                  <Box className={styles.modeStyle}>
                                    <Box className={styles.boundsArea} />
                                  </Box>
                                  <div className={styles.work3}>Work</div>
                                </Box>
                              </Box>
                              <div className={styles.jun20225}>12 jun 2022</div>
                            </Box>
                          </Box>
                          <Box className={styles.periodName}>
                            <div className={styles.sizeBlock}>-$59</div>
                          </Box>
                        </Box>
                        <Box className={styles.headerElement} />
                      </Box>
                    </Box>
                    <Box className={styles.formatViewInner}>
                      <Box className={styles.frameParent17}>
                        <Box className={styles.frameParent20}>
                          <Box className={styles.detailStyle}>
                            <img
                              className={styles.detailStyleChild}
                              alt=""
                              src="/Group-172.svg"
                            />
                            <Box className={styles.frameParent18}>
                              <Box className={styles.fromGoogleContainer}>
                                <div className={styles.fromGoogle3}>
                                  From Google
                                </div>
                                <Box className={styles.frameParent23}>
                                  <Box className={styles.ellipseFrame}>
                                    <Box className={styles.frameChild12} />
                                  </Box>
                                  <div className={styles.salary2}>Salary</div>
                                </Box>
                              </Box>
                              <div className={styles.jun20225}>10 jun 2022</div>
                            </Box>
                          </Box>
                          <Box className={styles.periodName}>
                            <div className={styles.div5}>+$859</div>
                          </Box>
                        </Box>
                        <Box className={styles.headerElement} />
                      </Box>
                    </Box>
                    <Box className={styles.formatViewInner}>
                      <Box className={styles.frameParent17}>
                        <Box className={styles.frameParent25}>
                          <Box className={styles.detailStyle}>
                            <img
                              className={styles.detailStyleChild}
                              alt=""
                              src="/Group-161.svg"
                            />
                            <Box className={styles.frameParent18}>
                              <Box className={styles.toDavidGroup}>
                                <div className={styles.toDavid2}>To David</div>
                                <Box className={styles.frameParent23}>
                                  <Box className={styles.ellipseFrame}>
                                    <Box className={styles.frameChild12} />
                                  </Box>
                                  <div className={styles.work4}>Work</div>
                                </Box>
                              </Box>
                              <div className={styles.jun20227}>7 jun 2022</div>
                            </Box>
                          </Box>
                          <Box className={styles.periodName}>
                            <div className={styles.div6}>-$479</div>
                          </Box>
                        </Box>
                        <Box className={styles.headerElement} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.frameParent29}>
                <Box className={styles.frameWrapper2}>
                  <Box className={styles.frameParent30}>
                    <Box className={styles.frameParent31}>
                      <Box className={styles.frameParent32}>
                        <img
                          className={styles.frameChild17}
                          loading="lazy"
                          alt=""
                          src="/Group-173.svg"
                        />
                        <Box className={styles.frameParent33}>
                          <Box className={styles.fromGoogleParent2}>
                            <div className={styles.fromGoogle4}>
                              From Google
                            </div>
                            <Box className={styles.frameParent34}>
                              <Box className={styles.modeStyle}>
                                <Box className={styles.frameChild18} />
                              </Box>
                              <div className={styles.bonus2}>Bonus</div>
                            </Box>
                          </Box>
                          <div className={styles.jun20228}>10 jun 2022</div>
                        </Box>
                      </Box>
                      <Box className={styles.wrapper3}>
                        <div className={styles.div7}>+$859</div>
                      </Box>
                    </Box>
                    <Box className={styles.frameChild19} />
                  </Box>
                </Box>
                <Nav
                  property1="Home"
                  navWidth="267.5px"
                  navHeight="54.9px"
                  navPadding="0px 16.5px 8.1px"
                  navGap="35px"
                  inertiaRadiusWidth="54.9px"
                  inertiaRadiusBackdropFilter="blur(54.9px)"
                  panelBoundsBackdropFilter="blur(54.9px)"
                  panelBoundsBorderRadius="20.58px 20.58px 0px 0px"
                  stageWrapperHeight="46.8px"
                  stageWrapperWidth="27px"
                  groupBoxWidth="27px"
                  groupBoxHeight="37.9px"
                  groupBoxPadding="0px 0px 21.4px"
                  frameBoxWidth="21.3px"
                  frameBoxHeight="16.5px"
                  frameBoxPadding="0px 0px 0px 4.8px"
                  homeButton1="/006-home-button-11.svg"
                  homeButton1IconHeight="16.5px"
                  homeButton1IconWidth="16.5px"
                  homeWidth="27px"
                  homeHeight="16px"
                  homeFontSize="9.6px"
                  limitShapeBorderRadius="16.5px"
                  limitShapeWidth="25.4px"
                  groupBoxHeight1="37.9px"
                  groupBoxWidth1="23px"
                  groupBoxPadding1="0px 0px 21.4px"
                  frameBoxWidth1="20px"
                  frameBoxHeight1="16.5px"
                  frameBoxPadding1="0px 0px 0px 3.5px"
                  creditCard11="/004-credit-card-1-11.svg"
                  creditCard11IconHeight="16.5px"
                  creditCard11IconWidth="16.5px"
                  cardWidth="23px"
                  cardHeight="16px"
                  cardFontSize="9.6px"
                  groupBoxHeight2="37.9px"
                  groupBoxWidth2="52px"
                  groupBoxPadding2="0px 0px 21.4px"
                  frameBoxWidth2="33.7px"
                  frameBoxHeight2="16.5px"
                  frameBoxPadding2="0px 0px 0px 17.2px"
                  swap1="/002-swap-11.svg"
                  swap1IconHeight="16.5px"
                  swap1IconWidth="16.5px"
                  transactionWidth="52px"
                  transactionHeight="16px"
                  transactionFontSize="9.6px"
                  groupBoxHeight3="37.9px"
                  groupBoxWidth3="27px"
                  groupBoxPadding3="0px 0px 21.4px"
                  frameBoxWidth3="22px"
                  frameBoxHeight3="16.5px"
                  frameBoxPadding3="0px 0px 0px 5.5px"
                  user11="/008-user-1-11.svg"
                  user11IconHeight="16.5px"
                  user11IconWidth="16.5px"
                  profileWidth="27px"
                  profileHeight="16px"
                  profileFontSize="9.6px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <Box className={styles.trustedByParent}>
        <div className={styles.trustedBy}>trusted by:</div>
        <Box className={styles.row}>
          {logoItems.map((item, index) => (
            <Logo
              key={index}
              name1={item.name1}
              logoSegments={item.logoSegments}
              sHELLS={item.sHELLS}
              sHELLSMargin={item.sHELLSMargin}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Desktop;
