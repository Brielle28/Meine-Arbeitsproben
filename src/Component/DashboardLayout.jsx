// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import AboutMe from "./AboutMe";
// import Contact from "./Contact";
// import ProfilePicture from "./ProfilePicture/ProfilePicture";
// import Resume from "./Resume";
// import Projects from "./Projects";
// import ParticlesComponent from "../Component/Particles/ParticlesComponent";
// import "../App.css";
// import NavBar from "./NavBar";

// const DashboardLayout = () => {
//   const [activeTab, setActiveTab] = useState("about");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "about":
//         return <AboutMe />;
//       case "projects":
//         return <Projects />;
//       case "contact":
//         return <Contact />;
//       case "resume":
//         return <Resume />;
//       default:
//         return <AboutMe />;
//     }
//   };

//   return (
//     <>
//       <ParticlesComponent id="particles" />
//       <div className="flex flex-col lg:flex-row items-center justify-center px-[5px] lg:px-[50px] md:pt-10 min-h-screen bg-transparent relative z-10 text-white md:ml-15">
//         {/* Navbar and Sidebar - Fixed on mobile/tablet, static on desktop */}
//         <div className="w-full lg:w-[60px] z-10 md:z-0 lg:z-0 fixed top-0 lg:static">
//           <NavBar />
//           <Sidebar setActiveTab={setActiveTab} />
//         </div>

//         {/* Content container for tablet view */}
//         <div className="flex flex-col items-center w-full lg:flex-row lg:items-center lg:justify-center lg:gap-10 md:gap-10">
//           {/* Profile Picture */}
//           <ProfilePicture />

//           {/* Main Content */}
//           <main className="w-full md:w-[75%] lg:w-[53%] md:h-[450px] lg:h-[500px] bg-pink-500 mt-4">
//             {renderContent()}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardLayout;
import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Resume from "./Resume";
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
      <div className="flex flex-col lg:flex-row items-center justify-center px-[5px] lg:px-[50px] md:pt-10 min-h-screen bg-transparent relative z-10 text-white md:ml-15">
        {/* Navbar and Sidebar - Fixed on mobile/tablet, static on desktop */}
        <div className="w-full lg:w-[60px] z-10 md:z-0 lg:z-0 fixed top-0 lg:static">
          <NavBar />
          <Sidebar setActiveTab={handleNavClick} activeTab={activeTab} />
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center w-full lg:flex-row lg:items-start lg:justify-center lg:gap-10 md:gap-10 mt-20 lg:mt-0">
          {/* Profile Picture */}
          <ProfilePicture />

          {/* Main Content - Scrollable */}
          <main className="w-full md:w-[75%] lg:w-[53%] h-[70vh] md:h-[70vh] lg:h-[80vh] overflow-y-auto mt-4 hide-scrollbar">
            {/* About Section */}
            <section
              id="about"
              ref={(el) => (sectionsRef.current.about = el)}
              className="min-h-[100vh] py-8"
            >
              <AboutMe />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              ref={(el) => (sectionsRef.current.projects = el)}
              className="min-h-[100vh] py-8"
            >
              <Projects />
            </section>

            {/* Resume Section */}
            <section
              id="resume"
              ref={(el) => (sectionsRef.current.resume = el)}
              className="min-h-[100vh] py-8"
            >
              <Resume />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              ref={(el) => (sectionsRef.current.contact = el)}
              className="min-h-[100vh] py-8"
            >
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
