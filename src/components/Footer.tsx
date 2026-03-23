
import { FaGithub, FaUserCircle, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full lg:w-[83%] mx-auto py-8 border-t border-[#4040405d] text-gray-800 px-4 lg:px-0">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-4 mb-4">
        
        <div className="flex items-center gap-3 text-center md:text-left">
          <FaUserCircle className="text-purple-500 w-8 md:w-10 h-8 md:h-10 flex-shrink-0" />
          <span className="text-lg md:text-xl font-semibold text-gray-700">Martine Nyiramahirwe</span>
        </div>
        
        <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:space-x-8 text-center sm:text-left">
          <a href="#home" className="hover:text-purple-500 transition duration-300 text-gray-700 text-sm md:text-base">Home</a>
          <a href="#about" className="hover:text-purple-500 transition duration-300 text-gray-700 text-sm md:text-base">About</a>
          <a href="#services" className="hover:text-purple-500 transition duration-300 text-gray-700 text-sm md:text-base">Services</a>
          <a href="#projects" className="hover:text-purple-500 transition duration-300 text-gray-700 text-sm md:text-base">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition duration-300 text-gray-700 text-sm md:text-base">Contact</a>
        </nav>
      </div>

      <div className="mt-4 flex justify-center items-center text-gray-600 text-sm md:text-base">
        <FaRegCopyright className="mr-1 flex-shrink-0" />
        <span>2024 Martine</span>
      </div>
      
      <div className="mt-4 flex justify-center items-center">
        <a
          href="https://github.com/martinemahirwe"
          target='_blank'
          rel="noopener noreferrer"
          title='Visit my GitHub'
          className="flex items-center gap-2 text-gray-700 hover:text-purple-500 transition duration-300 text-sm md:text-base"
        >
          <FaGithub className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
          <span>Follow me on GitHub</span>
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;
