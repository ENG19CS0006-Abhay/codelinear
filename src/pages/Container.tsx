import { FunctionComponent } from "react";
import {
  Typography,
  Box,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Desktop from "../components/Desktop";
import FrameComponent1 from "../components/FrameComponent1";
import ProductTitle from "../components/ProductTitle";
import Items from "../components/Items";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import ContactFooter from "../components/ContactFooter";
import styles from "./Container.module.css";

export type ContainerType = {};

const Container: FunctionComponent<ContainerType> = ({}) => {
  return (
    <Box className={styles.container}>
      <header className={styles.footerContainer}>
        <Box className={styles.mainBlock}>
          <Typography
            className={styles.n7}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500", lineHeight: "120%" }}
          >
            N7
          </Typography>
          <Box className={styles.utilityMenuParent}>
            <nav className={styles.utilityMenu}>
              <FormControl
                className={styles.menuItemArea}
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "82.7px",
                  height: "16px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#e9f4f9",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "Chivo Mono Medium",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="13.7px"
                      height="13.7px"
                      src="/menu-item-empty.png"
                      style={{ marginRight: "4.618527782440651e-14px" }}
                    />
                  )}
                >
                  <MenuItem>solutions</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className={styles.menuItemArea}
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "82.7px",
                  height: "16px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "16px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#e9f4f9",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "Chivo Mono Medium",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="13.7px"
                      height="13.7px"
                      src="/menu-item-empty.png"
                      style={{ marginRight: "4.618527782440651e-14px" }}
                    />
                  )}
                >
                  <MenuItem>resources</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <Box className={styles.menuItemArea3}>
                <div className={styles.aboutUs}>About us</div>
                <img
                  className={styles.icon}
                  alt=""
                  src="/menu-item-empty.png"
                />
              </Box>
            </nav>
            <Button
              disableElevation
              variant="outlined"
              sx={{
                color: "#e9f4f9",
                fontSize: "12",
                borderColor: "#e9f4f9",
                borderRadius: "6px",
                "&:hover": { borderColor: "#e9f4f9" },
              }}
            >
              request demo
            </Button>
          </Box>
        </Box>
      </header>
      <main className={styles.navigation}>
        <Desktop />
        <FrameComponent1 />
        <ProductTitle />
        <Items />
        <section className={styles.items}>
          <Box className={styles.cb7Parent}>
            <Typography
              className={styles.cb7}
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "500", lineHeight: "120%" }}
            >
              CB7
            </Typography>
            <Box className={styles.advantage}>
              <Typography
                className={styles.takeTheFull}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                }}
              >
                Take the full advantage of going paper-less now.
              </Typography>
              <div
                className={styles.cb7HelpsYour}
              >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
            </Box>
            <Box className={styles.listing}>
              <Box className={styles.cluster}>
                <Button
                  className={styles.clusterChild}
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
                <Button
                  className={styles.clusterItem}
                  disableElevation
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "15",
                    background: "linear-gradient(106.53deg, #00b4fd, #003ace)",
                    borderRadius: "10px",
                    "&:hover": {
                      background:
                        "linear-gradient(106.53deg, #00b4fd, #003ace)",
                    },
                  }}
                >
                  REQUEST DEMO
                </Button>
              </Box>
            </Box>
          </Box>
        </section>
        <FrameComponent2 />
        <FrameComponent3 />
        <FrameComponent4 />
        <section className={styles.callToActionBlock}>
          <Box className={styles.actionContent}>
            <Typography
              className={styles.takeTheFull}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
              }}
            >
              Take the full advantage of going paper-less now.
            </Typography>
            <div
              className={styles.cb7HelpsYour2}
            >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </Box>
          <Box className={styles.actionButtons}>
            <Box className={styles.contactRequest}>
              <Button
                className={styles.clusterChild}
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
              <Button
                className={styles.clusterItem}
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
            </Box>
          </Box>
        </section>
        <ContactFooter />
      </main>
    </Box>
  );
};

export default Container;
