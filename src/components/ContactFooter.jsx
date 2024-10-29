import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// Contact and Footer Section
const ContactAndFooter = () => {
  return (
    <div className="bg-white py-16 w-full max-h-[500px]" id="contact">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#4CC9FE] mb-4">CONTACT</h2>
        <p className="text-xl font-semibold mb-6">Contact me now! 👇</p>

        <div className="flex justify-center gap-8 mb-12">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFFECD] p-4 rounded-full shadow-lg">
              <FaMapMarkerAlt className="text-[#4CC9FE] text-3xl" />
            </div>
            <p className="mt-4 font-semibold">Location</p>
            <p className="text-gray-500">Melbourne, Australia</p>
          </div>

          {/* Mail */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFFECD] p-4 rounded-full shadow-lg">
              <FaEnvelope className="text-[#4CC9FE] text-3xl" />
            </div>
            <p className="mt-4 font-semibold">Mail</p>
            <p className="text-gray-500">galahenamthamasha@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-center py-20 min-h-[200px]">
        <p className="text-white text-lg font-semibold">
          Copyright © 2024 - Thamasha Galahena. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactAndFooter;
