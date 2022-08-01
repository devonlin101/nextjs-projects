import type { NextPage } from "next";
import Tabs from "../components/tabs";
import Footer from "../components/footer";

import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Tabs />
      <Footer />
    </>
  );
};

export default Home;
