import React from "react";
import Preloder from "./components/Preloder";
import Hearder from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonal from "./components/Testimonal";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Preloder />
      <Hearder />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonal />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
