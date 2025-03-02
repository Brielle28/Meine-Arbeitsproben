import { useState } from "react";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ProfilePicture from "./ProfilePicture";
import Resume from "./Resume";
import Projects from "./Projects";
import ParticlesComponent from "./ParticlesComponent";
import "../App.css";
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
      <div className="flex items-center justify-center gap-[30px] px-[50px] min-h-screen bg-transparent relative z-10 text-white">
        <Sidebar setActiveTab={setActiveTab} />
        <ProfilePicture />
        <main className="h-[500px] w-[53%] bg-pink-500">{renderContent()}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
