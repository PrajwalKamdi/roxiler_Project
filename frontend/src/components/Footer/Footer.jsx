import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-indigo-100 py-5 lg:py-8">
      <div className="container mx-auto text-center ">
        <p className="text-md md:text-xl">
          © {new Date().getFullYear()} Roxiler System. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
