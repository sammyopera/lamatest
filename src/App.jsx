import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

import "@animxyz/core";

const App = () => {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <About></About>
      <Tokenomics></Tokenomics>

      <Footer></Footer>
    </>
  );
};
export default App;
