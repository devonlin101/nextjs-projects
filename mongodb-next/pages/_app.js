import Typography from "@mui/material/Typography";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>mongodb sample_airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography
        sx={{ textAlign: "center", padding: "1rem" }}
        variant="h3"
        component="div"
        gutterBottom
      >
        NEXT AIR BNB
      </Typography>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
