import { useState } from "react";
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

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-[15px] md:gap-[20px] px-[5px] md:px-[50px] min-h-screen bg-transparent relative z-10 text-white">
        <div className="w-full md:w-[60px] z-10 md:z-0  fixed top-0 md:static md:top-auto">
          <NavBar />
          <Sidebar setActiveTab={setActiveTab} />
        </div>
        <ProfilePicture />
        <main className="md:h-[500px] md:w-[53%] w-full bg-pink-500">
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
