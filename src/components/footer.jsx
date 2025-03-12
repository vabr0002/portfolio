import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  text-cream  bg-dark-gray px-32 py-24">
      <div className="max-w-7xl mx-96 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-orange">
          Get in touch
        </h1>

        {/* Professional Text */}
        <p className="text-lg font-semibold mb-6">
          {" "}
          Interested in a collaboration or have any questions? Feel free to
          reach out. I look forward to hearing from you and assisting with your
          needs.{" "}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-8">
          <a
            href="mailto:dinemail@mail.com"
            className="bg-red-orange text-cream rounded-full px-4 py-4 border-2 border-red-orange hover:bg-transparent hover:text-red-orange transition-all duration-500"
          >
            Valdemarabb@gmail.com
          </a>
          <a
            href="tel:+4512345678"
            className="bg-red-orange text-cream rounded-full px-4 py-4 border-2 border-red-orange hover:bg-transparent hover:text-red-orange transition-all duration-500"
          >
            +45 27 60 68 03
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
