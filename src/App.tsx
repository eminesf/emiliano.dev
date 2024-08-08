import { Navbar } from "./components/NavBar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { UsefulLinks } from "./components/UseFullLinks";
import { Contact } from "./components/Contact/indext";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <UsefulLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
