import { Hero, Projects, Footer } from "../components";
import Head from "next/head";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Taufik Akbar</title>
        <meta name="description" content="Portfolio website using Next JS" />
      </Head>
      <main className="px-28">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
