import { useState, useEffect } from 'react';

const EmploymentHistory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  
  const positions = [
    {
      period: "Sept 2024 - Present",
      title: "Software Engineer",
      company: "SOLVE",
      location: "REMOTE",
      description: "Modernized legacy C# components by integrating React and ag-Grid, boosting performance by 45% and reducing code complexity by 30%."
    },
    {
      period: "Oct 2024 - Dec 2024",
      title: "Lead Frontend Engineer",
      company: "GENUS HUB & GIZ",
      location: "REMOTE",
      description: "Led frontend development for an outsourcing platform, optimizing React architecture and state management for a seamless UX. integrated third-party libraries, and collaborated on API design while mentoring other developers."
    },
    {
      period: "May 2024 - Oct 2024",
      title: "Frontend Engineer",
      company: "HORDANSO",
      location: "REMOTE",
      description: "Designed a microservices-based high-performance React and TypeScript app with Redux, cutting data latency by 40% and boosting modularity. Implemented Cypress testing with 90% coverage, reducing post-deployment issues by 50%."
    },
    {
      period: "Feb 2024 — Apr 2024",
      title: "Frontend Engineer",
      company: "AFRICANPLAN FOUNDATION",
      location: "REMOTE",
      description: "Led a UI/UX redesign, increasing user satisfaction by 40% and reducing bounce rates by 35%. Built a responsive React app, boosting engagement by 80% and mobile conversions by 90%."
    }
  ];

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    // Initial setup
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate total pages whenever itemsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(positions.length / itemsPerPage));
    // Reset active index if it would be out of bounds with new pagination
    if (activeIndex >= Math.ceil(positions.length / itemsPerPage)) {
      setActiveIndex(0);
    }
  }, [itemsPerPage, positions.length, activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Get current positions to display
  const getCurrentPositions = () => {
    const startIndex = activeIndex * itemsPerPage;
    return positions.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center">
      <div className='w-full flex justify-center items-center mt-5 mb-5 text-[30px] font-semibold text-black dark:text-white'>
        Work Experience
      </div>
      <div className="min-h-60 md:min-h-70 w-full">
        <div className={`grid grid-cols-1 md:grid-cols-${itemsPerPage} gap-4`}>
          {getCurrentPositions().map((position, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-pink-500 text-sm font-medium mb-4">
                {position.period}
              </div>
              <div className="relative">
                <div className='h-[1px] absolute top-1/2 dark:bg-gray-700 bg-gray-300 w-full'></div>
                <div className="w-full flex justify-center">
                  <div className="h-3 w-3 rounded-full bg-pink-500 z-10"></div>
                </div>
              </div>
              <h3 className="text-gray-800 dark:text-white text-xl font-semibold mt-4 mb-1">
                {position.title}
              </h3>
              <p className="text-gray-500 text-sm uppercase my-3 font-medium">
                {position.location}, {position.company}
              </p>
              <div className="text-gray-600 text-[13px] font-semibold dark:text-white">
                <p className="text-center px-2">
                  {position.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 mt- md:mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-pink-500 w-3' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EmploymentHistory;