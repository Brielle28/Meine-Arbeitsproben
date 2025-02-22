const Sidebar = ({ setActiveTab }) => {
    return (
      <div className="w-32 h-[400px] bg-gray-800 text-white p-6">
        <ul className="">
          <li>
            <button
              onClick={() => setActiveTab('about')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('resume')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Resume
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('projects')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('contact')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;