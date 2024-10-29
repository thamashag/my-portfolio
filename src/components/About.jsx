import React from "react";
import Profile from "../assets/about3.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-[#F5F4B3] py-16 px-4">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8 items-center">
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
            <span className="font-semibold">Tam</span> for short—a dedicated
            full-stack developer and software engineer based in Melbourne,
            Australia, with a strong academic foundation from the Polytechnic
            University of Turin and Deakin University. My expertise spans
            front-end and back-end development, from building responsive,
            user-focused applications in{" "}
            <span className="font-semibold">
              JavaScript, React, and Node.js
            </span>{" "}
            to deploying robust cloud-based services using{" "}
            <span className="font-semibold">
              Docker, Kubernetes, and Terraform
            </span>
            .
            <br />
            <br />
            Over the years, I've gained experience in various industries,
            collaborating on impactful projects and leveraging CI/CD pipelines
            and agile methodologies to deliver scalable solutions. My projects
            include microservices architecture, CI/CD automation, and
            data-driven analysis, where I thrive in collaborative settings and
            focus on clean, efficient code.
            <br />
            <br />
            Fluent in{" "}
            <span className="font-semibold">English, Italian, and Sinhala</span>
            , and having lived in three different countries, I bring a diverse
            perspective to every team. When I'm not coding, you can find me
            exploring Melbourne's coffee spots, diving into new tech trends, or
            challenging myself with personal projects and hackathons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
