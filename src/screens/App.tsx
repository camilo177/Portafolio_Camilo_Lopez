import Header from "../components/Header"
import Home from "../screens/Home"
import About from "./About"
import Skills from "./Skills"
import Knowledge from "./Knowledge"
import Contact from "./Contact"
import Footer from "../components/Footer"
import Projects from "./Projects"





function App() {

  return (
    <main>
      <header className=" fixed top-0 left-0 w-full">
      
      <Header />
      
      </header>
      
      <section className="w-screen h-screen overflow-hidden overflow-y-auto  ">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Knowledge />
        <Contact />
        
      <footer>
      </footer>
      <Footer />
      </section>

    </main>
  )
  
}

export default App