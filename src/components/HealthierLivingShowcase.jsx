import React from "react";
import DesignImage1 from "../assets/healthierliving1.png";
import DesignImage2 from "../assets/healthierliving2.png";
import DesignImage3 from "../assets/healthierliving3.png";
import DesignImage4 from "../assets/healthierliving4.png";
import DesignImage5 from "../assets/healthierliving5.png";
import DesignImage6 from "../assets/healthierliving6.png";
import DesignImage7 from "../assets/healthierliving7.png";
import PrototypeVideo from "../assets/prototype.mov";
import BusinessPlanPDF from "../assets/business_plan.pdf";
import PrototypePDF from "../assets/prototype.pdf";

const HealthierLivingShowcase = () => {
  return (
    <div className="w-full min-h-screen bg-white py-16 px-4">
      {/* Intro Section */}
      <div className="max-w-[1100px] mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#4CC9FE]">
          Healthier Living App
        </h1>
        <p className="text-gray-700 mt-4">
          A comprehensive fitness app design focused on user engagement,
          wellness, and intuitive functionality.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="max-w-[1000px] mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 px-4">
        <img
          src={DesignImage1}
          alt="Healthier Living Design 1"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage2}
          alt="Healthier Living Design 2"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage3}
          alt="Healthier Living Design 3"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage4}
          alt="Healthier Living Design 4"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage5}
          alt="Healthier Living Design 5"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage6}
          alt="Healthier Living Design 6"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        <img
          src={DesignImage7}
          alt="Healthier Living Design 7"
          className="rounded-lg shadow-md object-cover w-full h-auto"
        />
        {/* Add more images here */}
      </div>

      {/* Video Section */}
      <div className="max-w-[800px] mx-auto mb-12 px-4">
        <h2 className="text-3xl font-semibold text-[#4CC9FE] text-center">
          Prototype Video
        </h2>
        <video controls className="w-full mt-4 rounded-lg shadow-md">
          <source src={PrototypeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* PDF Downloads Section */}
      <div className="max-w-[1100px] mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-[#4CC9FE] mb-6">
          Download Resources
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href={BusinessPlanPDF}
            download
            className="bg-[#4CC9FE] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#3a9ccc]"
          >
            Download Business Plan PDF
          </a>
          <a
            href={PrototypePDF}
            download
            className="bg-[#4CC9FE] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#3a9ccc]"
          >
            Download Prototype PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthierLivingShowcase;
