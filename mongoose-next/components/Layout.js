import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Mongoose Nextjs Notes App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;