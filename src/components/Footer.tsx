
import { FaGithub, FaUserCircle, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-[83%] mx-auto py-8 border-t border-[#4040405d] text-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        
        <div className="flex items-center mb-4 md:mb-0">
          <FaUserCircle className="text-purple-500 w-10 h-10 mr-3" />
          <span className="text-xl font-semibold text-gray-700">Martine Nyiramahirwe</span>
        </div>
        
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <a href="#home" className="hover:text-purple-500 transition duration-300 text-gray-700">Home</a>
          <a href="#about" className="hover:text-purple-500 transition duration-300 text-gray-700">About</a>
          <a href="#services" className="hover:text-purple-500 transition duration-300 text-gray-700">Services</a>
          <a href="#projects" className="hover:text-purple-500 transition duration-300 text-gray-700">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition duration-300 text-gray-700">Contact</a>
        </nav>
      </div>

      <div className="mt-4 flex justify-center items-center text-gray-600">
        <FaRegCopyright className="mr-1" />
        2024 Martine
      </div>
      
      <div className="mt-4 flex justify-center items-center">
        <a
          href="https://github.com/martinemahirwe"
          className="flex items-center text-gray-700 hover:text-purple-500 transition duration-300"
        >
          <FaGithub className="mr-2 w-6 h-6" />
          Follow me on GitHub
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;
