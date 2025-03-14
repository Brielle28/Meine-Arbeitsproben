import { GrServices } from "react-icons/gr";
import Services from "./Services";
const AboutMe = () => {
  return (
    <div className="bg-transparent text-black dark:text-white p-5 mt-3 rounded-md">
      <h1 className="text-[12px] md:text-[18px] font-normal">
        Hello i'm <span className="text-pink-500">Chukwuemerie Clara</span>
      </h1>
      <h1 className="my-2 md:my-5 text-[20px] md:text-[45px] md:leading-12 font-bold">
        Software Developer Based In Port-Harcourt, Nigeria.{" "}
      </h1>
      <h1 className="text-gray-600 dark:text-white text-[13px] md:text-[17px]">
        with 3 years of experience building responsive web applications. I
        specialize in React and modern JavaScript, with a focus on creating
        accessible and performant user interfaces. I'm passionate about clean
        code and thoughtful UI design, approaching each project as an
        opportunity to balance technical excellence with exceptional user
        experience.
      </h1>
      <div className="md:mt-14 mt-7">
        <div className="w-[50%] md:w-[22%] flex items-center justify-evenly border-[1px] border-gray-300 p-1 rounded-[30px]">
          <GrServices className="text-black dark:text-white text-[20px]"/>
          <h1 className="text-gray-400 text-[16px]">SERVICES </h1>
        </div>
        <h1 className="font-semibold text-[19px] md:text-[29px] mt-2 md:mt-3">What Services I Provide ?</h1>
        <Services/>
      </div>
    </div>
  );
};

export default AboutMe;
