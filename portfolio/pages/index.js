import {
  Header,
  Hero,
  Projects,
  Contact,
  Technologies,
  Experience
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
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
    </Fragment>
  );
};

export default Home;
