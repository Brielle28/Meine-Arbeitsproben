import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { useState, useEffect } from "react";

const Contact = () => {
  const phoneNumber = "+2347037850420";
  const email = "chukwuemerieclara@gmail.com";
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    // Format phone number for WhatsApp (removing spaces, dashes, and parentheses)
    const formattedPhone = phoneNumber
      .replace(/\s+/g, "")
      .replace(/[()-]/g, "");
    window.location.href = `https://wa.me/${formattedPhone}`;
  };

  return (
    <div className="flex flex-col items-start mx-auto w-full px-3 sm:px-4 md:px-6 max-w-6xl">
      {/* Contact Tag */}
      <div className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-gray-700">
        <FaPaperPlane className="text-gray-600 text-xs sm:text-sm dark:text-white" />
        <span className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide dark:text-white">
          CONTACT
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 dark:text-white mt-3 md:mt-6">
        Let's Get in Touch!
      </h2>
      
      
      {/* Contact Cards Container */}
      <div className="flex flex-col gap-3 sm:gap-4 w-full mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button
            className="border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-[#1F1F1F] dark:to-black px-3 sm:px-4 py-5 sm:py-7 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={handlePhoneClick}
          >
            <RiContactsBook3Line className="text-pink-500 text-3xl sm:text-4xl md:text-[45px] flex-shrink-0" />
            <h1 className="flex gap-2 text-base sm:text-lg md:text-[19px] text-gray-600 dark:text-[#C7C7C7] font-semibold truncate">
              {phoneNumber}
            </h1>
          </button>

          <button
            className="border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-[#1F1F1F] dark:to-black px-3 sm:px-4 py-5 sm:py-7 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="text-pink-500 text-3xl sm:text-4xl md:text-[45px] flex-shrink-0" />
            <h1 className="flex gap-2 text-base sm:text-lg md:text-[19px] text-gray-600 dark:text-[#C7C7C7] uppercase font-semibold">
              {isMobile ? "Message" : "Drop a Message"}
            </h1>
          </button>
        </div>

        {/* Email Card */}
        <div
          className="py-5 sm:py-7 border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-[#1F1F1F] dark:to-black w-full px-3 sm:px-4 rounded-xl flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-pink-500 text-3xl sm:text-4xl md:text-[45px] flex-shrink-0" />
          <span className="text-gray-600 dark:text-[#C7C7C7] uppercase font-semibold text-base sm:text-lg md:text-[19px] truncate">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;