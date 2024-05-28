import Header from "../components/Header";
import Home from "../screens/Home";
import About from "./About";
import Skills from "./Skills";
import Knowledge from "./Knowledge";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Projects from "./Projects";

const App: React.FC = () => {
  return (
    <main>
      <header className="fixed top-0 left-0 w-full z-10">
        <Header />
      </header>

      <section className="w-screen h-screen overflow-hidden overflow-y-auto pt-14">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="knowledge"><Knowledge /></div>
        <div id="contact"><Contact /></div>

        <footer>
          <Footer />
        </footer>
      </section>
    </main>
  );
};

export default App;
