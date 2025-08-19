import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import { useRef, useEffect } from "react";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import SideLinks from "../components/Sidebar/SideLinks";

const Home = () => {
  //for scrolling problem when page is refreshed
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'//prevent browser from restoring the previous scroll position after a refresh
    }
  }, [])

  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactsRef = useRef(null)


  //handle scroll when clicking about, projects, or contacts
  const handleScrollToSection = (section) => {
    if (section === "about") {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (section === "contacts") {
      contactsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  };
  return (
    <>
      <SideLinks />
      <Navbar onScrollToSection={handleScrollToSection} />
      <Hero />

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
    </>
  );
};

export default Home;