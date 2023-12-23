import { Test } from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Parallax from "./components/paralax/Parallax";
import Profolio from "./components/profolio/Profolio";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Protfolio">
        <Parallax type="protfolio" />
      </section>
      <Profolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
