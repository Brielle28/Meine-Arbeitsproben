// import { useState, useEffect, useRef } from "react";
// import Sidebar from "../Component/Sidebar/Sidebar";
// import AboutMe from "./AboutMe/AboutMe";
// import Contact from "../Component/Contact/Contact";
// import ProfilePicture from "./ProfilePicture/ProfilePicture";
// import Resume from "./Resume/Resume";
// import Projects from "../Component/Projects/Projects";
// import ParticlesComponent from "../Component/Particles/ParticlesComponent";
// import "../App.css";
// import NavBar from "./NavBar";

// const DashboardLayout = () => {
//   const [activeTab, setActiveTab] = useState("about");
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const sectionsRef = useRef({});

//   // Check screen size on mount and window resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024); // 1024px is the standard lg breakpoint in Tailwind
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     // Only use Intersection Observer on non-large screens
//     if (isLargeScreen) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveTab(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     Object.values(sectionsRef.current).forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [isLargeScreen]);

//   const handleNavClick = (tab) => {
//     setActiveTab(tab);
    
//     if (!isLargeScreen) {
//       // On smaller screens, scroll to the section
//       const section = sectionsRef.current[tab];
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <>
//       <ParticlesComponent id="particles" />
//       <div className="flex flex-col lg:flex-row items-center justify-center px-[5px] lg:px-[50px] min-h-screen bg-transparent relative z-10 text-white md:ml-15 md:pb-10">
//         <div className="w-full lg:w-[60px] z-10 md:z-10 lg:z-10 fixed top-0 lg:static">
//           <NavBar />
//           <Sidebar setActiveTab={handleNavClick} activeTab={activeTab} />
//         </div>

//         <div className="flex flex-col items-center w-full lg:flex-row lg:items-start lg:justify-center lg:gap-10 md:gap-10 mt-20 lg:mt-0">
//           <ProfilePicture />

//           {isLargeScreen ? (
//             // Large screen: Show each section individually with its own scrolling container
//             <main className="w-full md:w-[75%] lg:w-[53%] h-[80vh] mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl bg-white dark:bg-[#131313] p-2">
//               {activeTab === "about" && (
//                 <div className="h-full overflow-y-auto hide-scrollbar">
//                   <AboutMe />
//                 </div>
//               )}
              
//               {activeTab === "resume" && (
//                 <div className="h-full overflow-y-auto hide-scrollbar">
//                   <Resume />
//                 </div>
//               )}
              
//               {activeTab === "projects" && (
//                 <div className="h-full overflow-y-auto hide-scrollbar">
//                   <Projects />
//                 </div>
//               )}
              
//               {activeTab === "contact" && (
//                 <div className="h-full overflow-y-auto hide-scrollbar">
//                   <Contact />
//                 </div>
//               )}
//             </main>
//           ) : (
//             // Mobile/tablet: Keep original scrolling behavior between sections
//             <main className="w-full md:w-[75%] lg:w-[53%] h-auto md:h-[80vh] overflow-y-auto mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl hide-scrollbar bg-white dark:bg-[#131313] p-2">
//               {/* About Section */}
//               <section
//                 id="about"
//                 ref={(el) => (sectionsRef.current.about = el)}
//                 className="min-h-[100vh]"
//               >
//                 <AboutMe />
//               </section>

//               {/* Resume Section */}
//               <section
//                 id="resume"
//                 ref={(el) => (sectionsRef.current.resume = el)}
//                 className="min-h-[100vh]"
//               >
//                 <Resume />
//               </section>

//               {/* Projects Section */}
//               <section
//                 id="projects"
//                 ref={(el) => (sectionsRef.current.projects = el)}
//                 className="min-h-[100vh]"
//               >
//                 <Projects />
//               </section>

//               {/* Contact Section */}
//               <section
//                 id="contact"
//                 ref={(el) => (sectionsRef.current.contact = el)}
//                 className="min-h-[100vh] w-full"
//               >
//                 <Contact />
//               </section>
//             </main>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardLayout;

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

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isTablet, setIsTablet] = useState(false);
  const sectionsRef = useRef({});

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
            <main className="w-full md:w-[75%] lg:w-[53%] h-[80vh] mt-4 rounded-b-[40px] rounded-tr-[40px] shadow-2xl bg-white dark:bg-[#131313] p-2 overflow-y-auto lg:overflow-hidden">
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
