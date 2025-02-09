import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  text-white py-8">
      <div className="max-w-7xl mx-96 px-6 text-center">
        {/* Logo */}
        <div className="bg-gray-700 text-white text-lg font-semibold py-2 px-6 rounded-lg mb-6">
          LOGO
        </div>

        {/* Professional Text */}
        <p className="text-lg mb-6">
          Er du interesseret i et samarbejde eller har du spørgsmål? Tøv ikke
          med at kontakte mig. Jeg ser frem til at høre fra dig og hjælpe med
          dine behov.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-8">
          <a
            href="mailto:dinemail@mail.com"
            className="bg-slate-300 text-black rounded-xl px-6 py-4 hover:bg-transparent hover:text-white transition-all duration-500"
          >
            Valdemarabb@gmail.com
          </a>
          <a
            href="tel:+4512345678"
            className="bg-slate-300 text-black rounded-xl px-6 py-4 hover:bg-transparent hover:text-white transition-all duration-500"
          >
            +45 27 60 68 03
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
