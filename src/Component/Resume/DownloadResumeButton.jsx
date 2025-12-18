import { FaDownload } from "react-icons/fa";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Create a link to the PDF file in the public folder
    const link = document.createElement("a");
    link.href = "/MyCV/Clara_Nnadozie_-_Software_Engineer.pdf"; // Path relative to public folder
    link.download = "Clara_Nnadozie_-_Software_Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <button
      onClick={handleDownload}
      className="flex items-center justify-center gap-1 border-[1px] border-gray-300  rounded-[30px] text-gray-500 bg-transparent px-3 py-2"
    >
      {" "}
      <FaDownload className="text-black  text-[15px] dark:text-white" />{" "}
      DOWNLOAD CV{" "}
    </button>
  );
};

export default DownloadResumeButton;
