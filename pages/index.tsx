import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/intro";
import Head from "next/head";

const Landing = () => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css'
        />
      </Head>
      <div className='landing'>
        <Home />
        <About />
        <Intro />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
