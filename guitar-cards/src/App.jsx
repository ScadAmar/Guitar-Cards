import "./App.css";
import CardModule from "./Sections/Cards/CardModule";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
//import Hero from "./Sections/Hero/Hero";
import LearnMore from "./Sections/Learn-More/LearnMore";
import NavBar from "./Sections/Navigation-Bar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <CardModule />
      <LearnMore />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
