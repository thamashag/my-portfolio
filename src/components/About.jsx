import React from "react";
import Profile from "../assets/about3.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-[#F5F4B3] py-16 px-4">
      <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <img
          className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] mx-auto rounded-lg shadow-lg"
          src={Profile}
          alt="Profile"
        />

        {/* About Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4CC9FE] mb-4 uppercase">
            About Me
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            Hi there! I'm{" "}
            <span className="font-semibold">Thamasha Galahena</span>—or{" "}
            <span className="font-semibold">Tam</span> for short—a passionate
            full-stack developer and software engineer based in Melbourne,
            Australia. I have a knack for building clean, efficient, and
            scalable applications, whether it's for the web, mobile, or back-end
            services.
            <br />
            <br />
            With a strong foundation in{" "}
            <span className="font-semibold">
              JavaScript, React, Node.js,
            </span>{" "}
            and <span className="font-semibold">Tailwind CSS</span>, I'm always
            eager to explore new technologies and bring ideas to life. I thrive
            in collaborative environments, value clean code, and love tackling
            complex challenges with innovative solutions.
            <br />
            <br />
            When I'm not coding, you might find me exploring Melbourne's coffee
            scene, reading up on the latest tech trends, or honing my skills
            through hackathons and personal projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
