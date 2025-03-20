import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "../Component/Contact/Contact";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Resume from "./Resume/Resume";
import Projects from "./Projects";
import ParticlesComponent from "../Component/Particles/ParticlesComponent";
import "../App.css";
import NavBar from "./NavBar";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("about");
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    const section = sectionsRef.current[tab];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="flex flex-col lg:flex-row items-center justify-center px-[5px] lg:px-[50px] min-h-screen bg-transparent relative z-10 text-white md:ml-15 md:pb-10">
        <div className="w-full lg:w-[60px] z-10 md:z-0 lg:z-0 fixed top-0 lg:static">
          <NavBar />
          <Sidebar setActiveTab={handleNavClick} activeTab={activeTab} />
        </div>

        <div className="flex flex-col items-center w-full lg:flex-row lg:items-start lg:justify-center lg:gap-10 md:gap-10 mt-20 lg:mt-0">
          <ProfilePicture />

          <main className="w-full md:w-[75%] lg:w-[53%] h-[70vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl hide-scrollbar bg-white dark:bg-[#131313] p-2">
            {/* About Section */}
            <section
              id="about"
              ref={(el) => (sectionsRef.current.about = el)}
              className="min-h-[100vh] py-8"
            >
              <AboutMe />
            </section>

            {/* Resume Section */}
            <section
              id="resume"
              ref={(el) => (sectionsRef.current.resume = el)}
              className="min-h-[100vh] py-8"
            >
              <Resume />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              ref={(el) => (sectionsRef.current.projects = el)}
              className="min-h-[100vh] py-8"
            >
              <Projects />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              ref={(el) => (sectionsRef.current.contact = el)}
              className="min-h-[100vh] w-full"
            >
              <Contact />
            </section>
          </main>
          {/* <div className="size-1 hidden md:block lg:hidden">
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
