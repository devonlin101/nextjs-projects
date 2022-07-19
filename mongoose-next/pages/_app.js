import "../css/style.css";
import "../css/form.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/food-logo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food App</title>
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
        <Image src={Logo} alt="food logo" width={120} height={60} />
        <ButtonGroup variant="text" size="large">
          <Link href="/">
            <Button className="nav">
              <a>Home</a>
            </Button>
          </Link>
          <Link href="/new">
            <Button className="nav">
              <a>Add Food</a>
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
