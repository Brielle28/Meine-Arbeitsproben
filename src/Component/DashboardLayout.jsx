

import { useState, useEffect, useRef } from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "../Component/Contact/Contact";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Resume from "./Resume/Resume";
import Projects from "../Component/Projects/Projects";
import ParticlesComponent from "../Component/Particles/ParticlesComponent";
import "../App.css";
import NavBar from "./NavBar";

const VALID_TABS = ["about", "resume", "projects", "contact"];

const getTabFromHash = () => {
  const hash = window.location.hash.slice(1).toLowerCase();
  return VALID_TABS.includes(hash) ? hash : "about";
};

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState(getTabFromHash);
  const [isTablet, setIsTablet] = useState(false);
  const sectionsRef = useRef({});

  // Sync tab with URL hash (direct links & browser back/forward)
  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Detect if current screen is a tablet (width between 768px and 1023px)
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // IntersectionObserver only for tablets (for scroll-detection nav)
  useEffect(() => {
    if (!isTablet) return;

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

    return () => observer.disconnect();
  }, [isTablet]);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;

    if (isTablet) {
      const section = sectionsRef.current[tab];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="flex flex-col lg:flex-row items-center justify-center px-[5px] lg:px-[50px] min-h-screen bg-transparent relative z-10 text-white md:ml-15 md:pb-10">
        <div className="w-full lg:w-[60px] z-10 fixed top-0 lg:static">
          <NavBar />
          <Sidebar setActiveTab={handleNavClick} activeTab={activeTab} />
        </div>

        <div className="flex flex-col items-center w-full lg:flex-row lg:items-start lg:justify-center lg:gap-10 md:gap-10 mt-20 lg:mt-0">
          <ProfilePicture />

          {/* Tablet view (scrollable across all sections) */}
          {isTablet ? (
            <main className="w-full md:w-[75%] lg:w-[53%] h-[80vh] overflow-y-auto mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl hide-scrollbar bg-white dark:bg-[#131313] p-2">
              <section
                id="about"
                ref={(el) => (sectionsRef.current.about = el)}
                className="min-h-[100vh]"
              >
                <AboutMe />
              </section>

              <section
                id="resume"
                ref={(el) => (sectionsRef.current.resume = el)}
                className="min-h-[100vh]"
              >
                <Resume />
              </section>

              <section
                id="projects"
                ref={(el) => (sectionsRef.current.projects = el)}
                className="min-h-[100vh]"
              >
                <Projects />
              </section>

              <section
                id="contact"
                ref={(el) => (sectionsRef.current.contact = el)}
                className="min-h-[100vh]"
              >
                <Contact />
              </section>
            </main>
          ) : (
            // Small & large screens: no scrolling, show only active tab
            <main className="w-full md:w-[75%] lg:w-[53%] h-[80vh] mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl bg-white dark:bg-[#131313] p-2 overflow-y-auto">
              {activeTab === "about" && <AboutMe />}
              {activeTab === "resume" && <Resume />}
              {activeTab === "projects" && <Projects />}
              {activeTab === "contact" && <Contact />}
            </main>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
