import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import HealthierLiving from "../assets/work1.png";
import Chameleon from "../assets/work2.png";
import SupplyChain from "../assets/work3.png";
import TropicalCoco from "../assets/tropicalcoco.png";

const projects = [
  {
    title: "Tropical Coco - Enhanced User Experience & Brand Visibility",
    description:
      "The Tropical Coco project involved designing and developing a user-friendly website for a Melbourne-based client, focusing on brand visibility and improved user experience. Built with HTML, CSS, and JavaScript, the website showcases Tropical Coco's products and services. Through SEO optimization, organic traffic increased by 35% in the first three months. Additionally, I created custom product packaging for their coconut drinks, strengthening the brand's identity and appeal in the market.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: TropicalCoco, // Replace with actual image variable if available
    designLink: "https://tropicalcoco.com.au",
    // liveDemoLink: "https://yourprojectlink.com",
  },
  {
    title: "Healthier Living - Fitness App",
    description:
      "Healthier Living is a comprehensive fitness app concept designed to promote healthy living through a seamless user experience. The app prototype was fully designed in Figma, showcasing its key features, including personalized fitness tracking and wellness goals. I developed a complete business and marketing plan, alongside a go-to-market strategy, to prepare this app for launch. A high-fidelity prototype demonstrates user flows and functionality, aiming to provide an intuitive and engaging experience for users focused on fitness and wellness.",
    technologies: ["Figma"],
    image: HealthierLiving,
    designLink: "work/healthierliving", // Link to design showcase page
  },
  {
    title: "City of Melbourne - Chameleon Company - Open Data Playground",
    description:
      "Chameleon Open Data is a collaborative project focused on accessible data solutions. As part of a team, I contributed as a full stack developer to build out core components of the website and implemented a CI/CD pipeline using Jenkins. This pipeline was fully deployed to Google Cloud Platform (GCP), leveraging Terraform for resource management. My contributions ensured streamlined deployment and efficient infrastructure, enhancing project reliability and ease of maintenance.",
    technologies: [
      "Figma",
      "Next JS",
      "Tailwind CSS",
      "JavaScript",
      "Jenkins",
      "Terraform",
      "GCP",
    ],
    image: Chameleon,
    codeLink:
      "https://github.com/Chameleon-company/MOP-Code/tree/master/next_webapp",
    //liveDemoLink: "https://yourprojectlink.com",
  },
  {
    title: "Supply Chain Optimization Platform - Scalable Inventory Management",
    description:
      "The Supply Chain Optimization Platform is a high-performance inventory management solution built to handle over 10,000 inventory transactions per hour within a microservices architecture. Developed in Python, containerized using Docker, and orchestrated through Kubernetes on Azure, this platform leverages Terraform for seamless infrastructure deployment. The solution reduced resource costs by 25%, demonstrating expertise in microservices, cloud scalability, and cost-efficient resource management.",
    technologies: ["Python", "Docker", "Azure", "Kubernetes", "Terraform"],
    image: SupplyChain,
    codeLink: "https://github.com/thamashag/thamasha-galahena-sit722-part4",
    //liveDemoLink: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-[#37AFE1] py-16 px-4" id="work">
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
              <div className="w-full md:w-1/2 lg:w-1/3">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="object-cover w-full h-[400px] rounded-lg"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 md:w-1/2 lg:w-2/3 flex flex-col justify-between">
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
                  {project.designLink ? (
                    <a
                      href={project.designLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-[#4CC9FE] transition"
                    >
                      <FiExternalLink className="text-2xl lg:text-4xl" />
                      View Design
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black hover:text-[#4CC9FE] transition"
                      >
                        <FaGithub className="text-2xl lg:text-4xl" />
                        Code
                      </a>
                      {project.liveDemoLink && (
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-black hover:text-[#4CC9FE] transition"
                        >
                          <FiExternalLink className="text-2xl lg:text-4xl" />
                          Live demo
                        </a>
                      )}
                    </>
                  )}
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
