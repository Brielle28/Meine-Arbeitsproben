import { useState, useEffect } from "react";

const SkeletonLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      // Add event listener for when the page finishes loading
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };

      window.addEventListener("load", handleLoad);

      // Fallback timer
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      // Cleanup
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  // Return early if not loading
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-white dark:bg-gray-900">
      {/* Network graph background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          <g className="text-pink-500 stroke-current">
            {/* More dots and connections to match your background pattern */}
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="150" cy="30" r="3" fill="currentColor" />
            <circle cx="80" cy="120" r="3" fill="currentColor" />
            <circle cx="200" cy="80" r="3" fill="currentColor" />
            <circle cx="250" cy="150" r="3" fill="currentColor" />
            <circle cx="350" cy="50" r="3" fill="currentColor" />
            <circle cx="400" cy="150" r="3" fill="currentColor" />
            <circle cx="500" cy="100" r="3" fill="currentColor" />
            <circle cx="600" cy="200" r="3" fill="currentColor" />
            <circle cx="700" cy="80" r="3" fill="currentColor" />
            <circle cx="800" cy="150" r="3" fill="currentColor" />
            <circle cx="900" cy="50" r="3" fill="currentColor" />
            <circle cx="950" cy="150" r="3" fill="currentColor" />
            <circle cx="500" cy="300" r="3" fill="currentColor" />
            <circle cx="300" cy="350" r="3" fill="currentColor" />
            <circle cx="200" cy="450" r="3" fill="currentColor" />
            <circle cx="400" cy="500" r="3" fill="currentColor" />
            <circle cx="600" cy="450" r="3" fill="currentColor" />
            <circle cx="800" cy="400" r="3" fill="currentColor" />
            <circle cx="900" cy="500" r="3" fill="currentColor" />
            <circle cx="100" cy="500" r="3" fill="currentColor" />

            <line x1="50" y1="50" x2="150" y2="30" className="stroke-1" />
            <line x1="80" y1="120" x2="50" y2="50" className="stroke-1" />
            <line x1="80" y1="120" x2="200" y2="80" className="stroke-1" />
            <line x1="200" y1="80" x2="250" y2="150" className="stroke-1" />
            <line x1="250" y1="150" x2="350" y2="50" className="stroke-1" />
            <line x1="350" y1="50" x2="400" y2="150" className="stroke-1" />
            <line x1="400" y1="150" x2="500" y2="100" className="stroke-1" />
            <line x1="500" y1="100" x2="600" y2="200" className="stroke-1" />
            <line x1="600" y1="200" x2="700" y2="80" className="stroke-1" />
            <line x1="700" y1="80" x2="800" y2="150" className="stroke-1" />
            <line x1="800" y1="150" x2="900" y2="50" className="stroke-1" />
            <line x1="900" y1="50" x2="950" y2="150" className="stroke-1" />
            <line x1="500" y1="300" x2="600" y2="200" className="stroke-1" />
            <line x1="300" y1="350" x2="500" y2="300" className="stroke-1" />
            <line x1="200" y1="450" x2="300" y2="350" className="stroke-1" />
            <line x1="100" y1="500" x2="200" y2="450" className="stroke-1" />
            <line x1="400" y1="500" x2="200" y2="450" className="stroke-1" />
            <line x1="600" y1="450" x2="400" y2="500" className="stroke-1" />
            <line x1="800" y1="400" x2="600" y2="450" className="stroke-1" />
            <line x1="900" y1="500" x2="800" y2="400" className="stroke-1" />
          </g>
        </svg>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center w-full h-full gap-10">
        {/* Left sidebar */}
        <div className="flex flex-col items-center justify-center">
          {/* side bar */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-12 h-8 bg-gray-200 dark:bg-gray-800 animate-pulse rounded"></div>
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          </div>
        </div>
        {/* profile picture section */}
        <div className="w-80 h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 animate-pulse">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4"></div>
          <div className="w-32 h-6 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md mb-4 mt-4"></div>
          <div className="w-56 h-8 mx-auto bg-gray-200 dark:bg-gray-700 rounded-md mb-6"></div>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>

        {/* About Sections */}
        <div className="w-96 h-[500px] lg:w-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 animate-pulse">
          <div className="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3"></div>
          <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-md mb-2"></div>
          <div className="w-4/5 h-12 bg-gray-200 dark:bg-gray-700 rounded-md mb-2"></div>
          <div className="w-3/5 h-12 bg-gray-200 dark:bg-gray-700 rounded-md mb-8"></div>
          <div className="space-y-3 mt-6">
            <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="w-4/5 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center justify-center w-full h-full pt-2">
        <div className="w-full flex items-center justify-between px-6 mb-3 relative z-10">
          <div className="flex flex-col">
            <div className="w-40 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-1"></div>
            <div className="w-32 h-4 bg-pink-200 dark:bg-pink-900 animate-pulse rounded"></div>
          </div>
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-8 px-1 w-full">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <div className="w-5/6 max-w-xs bg-white dark:bg-gray-800 rounded-3xl p-6 animate-pulse z-10 mx-auto mt-3">
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4"></div>
          <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 mx-auto rounded mb-4 mt-2"></div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 mx-auto rounded mb-6"></div>

          <div className="flex justify-center space-x-3 mt-4">
            <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };

      window.addEventListener("load", handleLoad);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      {loading && <SkeletonLoader />}
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  );
};

export default Preloader;
