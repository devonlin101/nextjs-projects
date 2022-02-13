import "../css/style.css";
import "../css/form.css";
import Link from "next/link";
import Head from "next/head";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1rem auto",
        }}
      >
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
          sx={{ width: 80, height: 80 }}
        />
        <ButtonGroup variant="text" size="large">
          <Link href="/">
            <Button className="nav">
              <a>Home</a>
            </Button>
          </Link>
          <Link href="/new">
            <Button className="nav">
              <a>Add Pet</a>
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
