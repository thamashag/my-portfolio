import React from "react";
import { ReactTyped } from "react-typed";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="text-white" id="home">
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 p-2">
          Hello! My name is Tam.
        </h1>
        <p className="font-bold md:text-3xl sm:text-2xl text-xl">
          I’m a Full Stack Developer and Software Engineer based in Melbourne,
          Australia.
        </p>

        {/* Typing Animation */}
        <div className="mt-6 text-2xl md:text-3xl text-gray-800">
          <span className="mr-2">I’m also a</span>
          <ReactTyped
            strings={[
              "creative developer.",
              "problem solver.",
              "team player.",
              "tech enthusiast.",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        {/* Resume Button */}
        <a
          href={resume} // Adjust path if needed
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black w-[150px] rounded-3xl font-medium my-6 mx-auto py-3 inline-block text-center transition duration-300 ease-in-out transform hover:bg-[#FFFECD] hover:text-[#4CC9FE] hover:scale-105 z-10"
        >
          View Resumé
        </a>
      </div>
    </div>
  );
};

export default Hero;
