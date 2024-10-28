import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import HealthierLiving from "../assets/work1.png"; // Replace with actual project image paths
import Chameleon from "../assets/work2.png"; // Replace with actual project image paths

const projects = [
  {
    title: "Healthier Living - Fitness App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    technologies: ["Figma"],
    image: HealthierLiving,
    codeLink: "https://github.com/your-repo",
    liveDemoLink: "https://yourprojectlink.com",
  },

  {
    title: "City of Melbourne - Chameleon Company - Open Data Playground",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    technologies: [
      "Figma",
      "Next JS",
      "Tailwind CSS",
      "JavaScript",
      "Jenkins",
      "GCP",
    ],
    image: Chameleon,
    codeLink: "https://github.com/your-repo",
    liveDemoLink: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-[#4CC9FE] py-16 px-4" id="work">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold text-[#FFFFFF] text-center mb-5 uppercase">
          Work
        </h2>
        <p className="text-xl font-bold text-center mb-8">
          Each project is a unique piece of development
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full md:w-[600px] h-[400px] overflow-hidden object-cover rounded-lg"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-[#2E2E2E] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#FFFECD] text-[#4CC9FE] px-3 py-1 rounded-md text-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-[#4CC9FE] transition"
                  >
                    <FaGithub size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-[#4CC9FE] transition"
                  >
                    <FiExternalLink size={20} />
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
