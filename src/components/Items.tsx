import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Items.module.css";

export type ItemsType = {
  className?: string;
};

const Items: FunctionComponent<ItemsType> = ({ className = "" }) => {
  return (
    <section className={[styles.items, className].join(" ")}>
      <img
        className={styles.itemIcon}
        loading="lazy"
        alt=""
        src="/Item@2x.png"
      />
      <section className={styles.module}>
        <Box className={styles.executing}>
          <Typography
            className={styles.runAMore}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "400", lineHeight: "130%" }}
          >
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </Typography>
          <Box className={styles.overview}>
            <div className={styles.whatYouWill}>What you will get:</div>
            <Box className={styles.integration}>
              <Box className={styles.aggregation}>
                <Box className={styles.segment}>
                  <img
                    className={styles.individualIcon}
                    loading="lazy"
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Customer-On Boarding
                  </div>
                </Box>
                <Box className={styles.segment}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Managing deposits and withdrawals
                  </div>
                </Box>
                <Box className={styles.segment}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Transaction management
                  </div>
                </Box>
                <Box className={styles.segment}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Interest Calculation
                  </div>
                </Box>
                <Box className={styles.operational}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Payments processing (cash, cheques, mandates, NEFT, RTGS
                    etc)
                  </div>
                </Box>
              </Box>
              <Box className={styles.aggregation}>
                <Box className={styles.evaluationActivity}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    CRM Activities
                  </div>
                </Box>
                <Box className={styles.operational}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Configuring New Banking Products
                  </div>
                </Box>
                <Box className={styles.operational}>
                  <img
                    className={styles.individualIcon}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Loan disbursal and Loan management
                  </div>
                </Box>
                <Box className={styles.validationBalance}>
                  <Box className={styles.validationBalanceInner}>
                    <Box className={styles.frameWrapper}>
                      <Box className={styles.frameParent}>
                        <Box
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Achieve workload optimization, save time, making
                            system more agile and equipped for work.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Streamline business processes, automated back-office
                            operations and improve profitability.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Intelligent processing capabilities with
                            pre-integrated security and adaptive API
                            monetization.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </Box>
                        <Box
                          className={styles.intelligentProcessingCapabilGroup}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Intelligent processing capabilities with
                            pre-integrated security and adaptive API
                            monetization.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <img
                    className={styles.validationBalanceChild}
                    alt=""
                    src="/Individual.svg"
                  />
                  <div className={styles.establishingCriteriaFor}>
                    Establishing criteria for minimum balances, interest rates,
                    number of withdrawals allowed and so on.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </section>
  );
};

export default Items;
