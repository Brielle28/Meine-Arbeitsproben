// src/components/DashboardLayout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import ProfilePicture from './ProfilePicture';
import Resume from './Resume';
import Projects from './Projects';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
        case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="flex items-center justify-center px-[100px] min-h-screen bg-gray-100">
      <Sidebar setActiveTab={setActiveTab} />
      <ProfilePicture/>
      <main className="h-[400px] w-[50%]">
        {renderContent()}
      </main>
    </div>
  );
};

export default DashboardLayout;