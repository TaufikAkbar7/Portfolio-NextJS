import {
  Hero,
  Projects,
} from "../components";
import Head from "next/head";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Taufik Akbar</title>
        <meta name="description" content="Portfolio website using Next JS" />
      </Head>
      <Hero />
      <Projects />
    </Fragment>
  );
};

export default Home;
