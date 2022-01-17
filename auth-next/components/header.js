import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "../components/header.module.css";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import * as React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
//
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 20,
  p: 4,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function Header() {
  const [value, setValue] = React.useState(0);
  const [value0, setValue0] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const handleChange0 = (prop) => (event) => {
    setValue0({ ...value0, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValue0({
      ...value0,
      showPassword: !value0.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(session, status);
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session ? (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a className={styles.buttonPrimary} onClick={handleOpen}>
                Sign in
              </a>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Container maxWidth="sm">
                  <Box sx={style}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        sx={{
                          "& .MuiTabs-flexContainer": {
                            justifyContent: "space-evenly",
                            fontSize: "2rem",
                          },
                        }}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Sign In" {...a11yProps(0)} />
                        <Tab label="Sign Up" {...a11yProps(1)} />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <Container maxWidth="sm">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: ".5rem",
                          }}
                        >
                          <Icon
                            icon="akar-icons:google-contained-fill"
                            color="red"
                            width="45"
                            height="45"
                            onClick={() => signIn("google")}
                            style={{ cursor: "pointer" }}
                          />
                          <Icon
                            icon="akar-icons:facebook-fill"
                            color="#1565c0"
                            width="45"
                            height="45"
                            onClick={() => signIn("facebook")}
                            style={{ cursor: "pointer" }}
                          />
                          <Icon
                            icon="akar-icons:github-fill"
                            width="45"
                            height="45"
                            onClick={() => signIn("github")}
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                        <Divider sx={{ margin: "2rem auto", color: "gray" }}>
                          {" "}
                          OR{" "}
                        </Divider>
                        <Box component="form" sx={{ margin: "1rem" }}>
                          <TextField
                            value={value0.email}
                            onChange={handleChange0("email")}
                            fullWidth
                            label="Email"
                            variant="filled"
                          />
                          <FormControl
                            sx={{ m: "1rem auto", width: "100%" }}
                            variant="filled"
                          >
                            <InputLabel htmlFor="filled-adornment-password">
                              Password
                            </InputLabel>
                            <FilledInput
                              id="filled-adornment-password"
                              type={value0.showPassword ? "text" : "password"}
                              value={value0.password}
                              onChange={handleChange0("password")}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {value0.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                          <ButtonGroup
                            sx={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              margin: "1rem",
                            }}
                          >
                            <Button
                              variant="outlined"
                              size="large"
                              sx={{
                                borderRadius: "30px",
                                height: "3rem",
                                width: "10rem",
                              }}
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                borderRadius: "30px",
                                height: "3rem",
                                width: "10rem",
                              }}
                              onClick={() =>
                                signIn("email", { email: value0.email })
                              }
                            >
                              Sign In
                            </Button>
                          </ButtonGroup>
                          <Box fullWidth sx={{ textAlign: "center" }}>
                            <Link href="#">
                              <a className="link">Forgot Password?</a>
                            </Link>
                          </Box>
                        </Box>
                      </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Container sx={{ padding: "1.2rem" }} maxWidth="sm">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "1rem auto",
                          }}
                        >
                          <TextField
                            id="filled-basic"
                            label="First Name"
                            variant="filled"
                            sx={{ width: "50%" }}
                          />
                          <TextField
                            id="filled-basic"
                            label="Last Name"
                            variant="filled"
                            sx={{ width: "50%" }}
                          />
                        </Box>
                        <TextField
                          fullWidth
                          id="filled-basic"
                          label="Email"
                          variant="filled"
                        />
                        <TextField
                          fullWidth
                          id="filled-basic"
                          label="Password"
                          variant="filled"
                          sx={{ margin: "1rem auto" }}
                        />
                        <TextField
                          fullWidth
                          id="filled-basic"
                          label="verify password"
                          variant="filled"
                          sx={{ marginBottom: "2rem " }}
                        />
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "30px",
                            height: "3rem",
                            fontSize: "1.2rem",
                          }}
                          fullWidth
                        >
                          SIGN UP
                        </Button>
                      </Container>
                    </TabPanel>
                  </Box>
                </Container>
              </Modal>
            </>
          ) : (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  );
}
