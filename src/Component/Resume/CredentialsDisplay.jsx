import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
const CredentialsDisplay = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Sample data - you can expand this array as needed
  const certifications = [
    {
      id: 2,
      year: "2025",
      title: "Certificate of Mentorship",
      organization: "Global Mentorship Initiative",
      description:
        "Recognized for completing the GMI Career Readiness Mentorship Program.",
      certificateImage: "/mnt/data/Screenshot_2025-03-18_010355.png", // Replace with actual image path in your application
    },
    {
      id: 1,
      year: "2024",
      title: "Frontend Web Development",
      organization: "AfricaPlan Foundation & Hordanso LLC",
      description:
        "Successfully completed the Hackathon Africa 2.0 Bootcamp and certified with skills in Web Development",
      certificateImage: "/mnt/data/IMG_4247.jpeg", // Replace with actual image path in your application
    },

    // Add more certifications here as needed
  ];

  const education = [
    {
      id: 1,
      yearRange: "2018 - 2022",
      degree: "Bachelor of Science",
      field: "Political Science",
      description:
        "Bachelor's degree in Political Science with Second Class Honours (Upper Division) from the University of Nigeria.",
      certificateImage: "/mnt/data/IMG_4246.jpeg", // Replace with actual image path in your application
    },

    // Add more education entries here as needed
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-5 mt-14 px-4 max-w-6xl mx-auto">
      {/* Certifications Section */}
      <div className="flex-1 relative">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M4 10h16" />
              </svg>
            </span>
            <span className="font-medium text-gray-700 dark:text-white">CERTIFICATIONS</span>
          </div>
        </div>

        {/* Timeline vertical line */}
        <div className="absolute left-[11px] top-24 bottom-4 w-[1px] bg-gray-200 dark:bg-gray-700 z-0"></div>

        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#FAFAFA] dark:bg-[#1B1B1B] py-4 px-5 rounded-[30px] shadow-sm mb-4 ml-6 relative text-black border-[1px] border-gray-400 dark:border-gray-600"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-21px] top-6 w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full z-10 border-2 border-white dark:border-gray-700"></div>

            <button className="shadow-2xl px-2 bg-[#FAFAFA] dark:bg-[#1B1B1B] dark:border-gray-600 border-[1px] rounded-[5px] border-gray-300 mb-2">
              <span className="text-gray-400 text-sm">{cert.year}</span>
            </button>
            <h3 className="text-[14px] text-black dark:text-white font-bold mb-1">{cert.title}</h3>
            <p className="text-gray-400 mb-2 text-[14px]">
              {cert.organization}
            </p>
            <p className="text-gray-500 mb-3 dark:text-white  text-[14px] font-medium">
              {cert.description}
            </p>
            <button
              onClick={() => openModal(cert)}
              className="text-black  dark:text-white text-[14px] font-bold flex items-center"
            >
              CERTIFICATE{" "}
              <span className="ml-1">
                <FaGreaterThan />
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="flex-1 relative">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7v10" />
                <path d="M6 5v14" />
                <rect width="12" height="14" x="10" y="5" rx="2" />
              </svg>
            </span>
            <span className="font-medium text-gray-700 dark:text-white">EDUCATION</span>
          </div>
        </div>

        {/* Timeline vertical line */}
        <div className="absolute left-[11px] top-24 bottom-4 w-[1px] bg-gray-200 dark:bg-gray-700 z-0"></div>

        {education.map((edu) => (
          <div
            key={edu.id}
            // className="bg-white p-6 rounded-xl shadow-sm mb-4 ml-6 relative"
            className="bg-[#FAFAFA] dark:bg-[#1B1B1B] py-4 px-5 rounded-[30px] shadow-sm mb-4 ml-6 relative text-black border-[1px] border-gray-400 dark:border-gray-600"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-21px] top-4 w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full z-10 border-2 border-white dark:border-gray-700"></div>
            <button className="shadow-2xl px-2 bg-[#FAFAFA] dark:bg-[#1B1B1B] dark:border-gray-600 border-[1px] rounded-[5px] border-gray-300 mb-2">
              <span className="text-gray-500 text-sm">{edu.yearRange}</span>
            </button>
            <h3 className="text-[14px] text-black dark:text-white font-bold mb-1">{edu.degree}</h3>
            <p className="text-gray-400 mb-2 text-[14px]">{edu.field}</p>
            <p className="text-gray-500 mb-3 text-[14px] font-medium dark:text-white">
              {edu.description}
            </p>
            <button
              onClick={() => openModal(edu)}
              className="text-black  dark:text-white text-[14px] font-bold flex items-center"
            >
              CERTIFICATE{" "}
              <span className="ml-1">
                <FaGreaterThan />
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Larger modal with transparent backdrop */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-h-[85vh] overflow-auto shadow-xl backdrop-blur-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold">
                {modalContent.title || modalContent.degree}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 mb-2 text-lg">
                {modalContent.organization || modalContent.field}
              </p>
              <p className="text-gray-500 mb-4">
                {modalContent.year || modalContent.yearRange}
              </p>
              <p className="text-gray-700 mb-4">{modalContent.description}</p>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img
                src={modalContent.certificateImage}
                alt="Certificate"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CredentialsDisplay;
