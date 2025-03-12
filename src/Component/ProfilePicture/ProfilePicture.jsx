import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import TypeWriting from "../TypeWriting/TypeWriting";

const ProfilePicture = () => {
  // Glitch effect state
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchInterval = 5000; // Trigger glitch every 3 seconds
  const glitchDuration = 200; // Glitch effect lasts for 200ms

  // Glitch effect interval
  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    }, glitchInterval);

    return () => clearInterval(glitchTimer);
  }, []);

  return (
    <div className="mt-36 w-full md:mt-0 flex flex-col items-center justify-center md:h-[500px] lg:h-[500px] bg-white dark:bg-[#131313] md:w-[75%] lg:w-[30%] text-black rounded-b-[40px] rounded-tl-[40px] shadow-2xl p-4">
      <div className="relative mt-3 w-[280px] h-[280px] overflow-hidden rounded-b-[40px] rounded-tl-[40px]">
        {/* Profile Image */}
        <div
          className="absolute inset-0 bg-[url('/me.jpg')] bg-cover bg-no-repeat"
          aria-label="Profile Picture"
        ></div>

        {/* Glitch effect */}
        {isGlitching && (
          <>
            <div
              className="absolute bg-[url('/me.jpg')] bg-cover bg-no-repeat"
              style={{
                top: "0%",
                left: "0%",
                height: "20%",
                width: "100%",
                transform: "translateX(2%)",
                animation: "slice-anim-1 150ms infinite step-end",
              }}
            ></div>

            <div
              className="absolute bg-[url('/fme.png')] bg-cover bg-no-repeat"
              style={{
                top: "20%",
                left: "0%",
                height: "8%",
                width: "100%",
                transform: "translateX(-3%)",
                animation: "slice-anim-2 100ms infinite step-end",
              }}
            ></div>

            <div
              className="absolute bg-[url('/mme.png')] bg-cover bg-no-repeat"
              style={{
                top: "42%",
                left: "0%",
                height: "8%",
                width: "100%",
                transform: "translateX(1%)",
                animation: "slice-anim-3 120ms infinite step-end",
              }}
            ></div>
            <div
              className="absolute bg-[url('/pme.png')] bg-cover bg-no-repeat"
              style={{
                top: "65%",
                left: "0%",
                height: "8%",
                width: "100%",
                transform: "translateX(-2%)",
                animation: "slice-anim-4 130ms infinite step-end",
              }}
            ></div>
          </>
        )}
      </div>

      <div className="mt-5 md:mt-0">
        <TypeWriting />
      </div>

      <h1 className="font-bold dark:text-white text-black text-[25px]">
        Chukwuemerie Clara
      </h1>

      <div className="flex items-center justify-center gap-5 mt-5">
        <a
          href="https://www.linkedin.com/in/nnadozie-chukwuemerie-clara-b65273274/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-400 rounded-[10px] hover:text-pink-500"
        >
          <BsLinkedin className="text-[22px] dark:text-white" />
        </a>
        <a
          href="https://github.com/Brielle28"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-400 rounded-[10px] hover:text-pink-500"
        >
          <FaGithub className="text-[22px] dark:text-white" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-400 rounded-[10px] hover:text-pink-500"
        >
          <FaXTwitter className="text-[22px] dark:text-white" />
        </a>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slice-anim-1 {
          0%,
          100% {
            transform: translateX(2%);
          }
          50% {
            transform: translateX(-1%);
          }
        }

        @keyframes slice-anim-2 {
          0%,
          100% {
            transform: translateX(-3%);
          }
          50% {
            transform: translateX(2%);
          }
        }

        @keyframes slice-anim-3 {
          0%,
          100% {
            transform: translateX(1%);
          }
          50% {
            transform: translateX(-2%);
          }
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePicture;
