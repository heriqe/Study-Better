import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} StudyBetter. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
