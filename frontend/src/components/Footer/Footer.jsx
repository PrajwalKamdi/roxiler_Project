import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-black  py-4">
      <div className="container mx-auto text-center ">
        <p className="text-xl">
          © {new Date().getFullYear()} Roxiler System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
