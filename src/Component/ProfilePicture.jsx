import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const ProfilePicture = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[500px] bg-white w-[30%] text-black rounded-b-[40px] rounded-tl-[40px] shadow-2xl p-4 ">
        <div className="bg-[url('/me.jpg')] mt-3 w-[280px] h-[280px] bg-cover bg-no-repeat rounded-b-[40px] rounded-tl-[40px]"></div>
        <h1 className="mt-7 text-pink-500"> SOFTWARE DEVELOPER </h1>
        <h1 className="font-bold text-black text-[25px]">
          {" "}
          Chukwuemerie Clara
        </h1>
        <div className="flex items-center justify-center gap-5 mt-5">
          <button className="p-3 border-[1px] border-gray-400 rounded-[10px] hover:text-pink-500">
            <BsLinkedin  className="text-[22px]"/>
          </button>
          <button className="p-3 border-[1px] border-gray-400 rounded-[10px]  hover:text-pink-500">
            <FaGithub className="text-[22px]"/>
          </button>
          <button className="p-3 border-[1px] border-gray-400 rounded-[10px]  hover:text-pink-500">
            <FaXTwitter className="text-[22px]"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
