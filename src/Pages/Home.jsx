import React from "react";

const Home = () => {
  return (
    <div className="text-red-600 font-bold ">
      Home
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M50 85C50 85 20 60 20 40C20 25 35 15 50 15C65 15 80 25 80 40C80 60 50 85 50 85Z"
          fill="none"
        />

        <path d="M30 30L40 40L30 50" />
        <path d="M70 30L60 40L70 50" />
      </svg>
    </div>
  );
};

export default Home;
