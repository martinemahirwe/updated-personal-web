import { FaServer, FaLaptopCode, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="pb-32 w-full flex flex-col items-center justify-center px-4 lg:px-0">
      <div className="w-full lg:w-[83%] flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Services You Will Get From Me</h2>
        <div className="border-b-8 border-[#9c2ef5] w-[50%] md:w-[30%] rounded-full mb-16 md:mb-24"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6 w-full lg:w-[83%] justify-center items-stretch cursor-pointer">
        <div className="bg-[#150135] rounded-lg p-5 md:p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] group">
          <FaServer className="h-12 md:h-16 lg:h-20 text-4xl md:text-5xl lg:text-6xl text-[#9c2ef5] mb-3 md:mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white"/> 
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-white mb-2 text-center">Backend Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-3 md:mb-4 w-[70%] rounded-full group-hover:border-white"></div>
          <p className="text-center text-xs md:text-sm lg:text-base leading-relaxed">
            I specialize in building robust and scalable backend systems using Node.js, MongoDB, PostgreSQL, Microservices, and Docker. I have experience in designing RESTful APIs, implementing authentication and authorization, and optimizing database performance.
          </p>
        </div>
        
        <div className="bg-[#150135] rounded-lg p-5 md:p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] group cursor-pointer">
          <FaLaptopCode className="h-12 md:h-16 lg:h-20 text-4xl md:text-5xl lg:text-6xl text-[#9c2ef5] mb-3 md:mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white"/>
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-white mb-2 text-center">Frontend Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-3 md:mb-4 w-[73%] rounded-full group-hover:border-white"></div>
          <p className="text-center text-xs md:text-sm lg:text-base leading-relaxed">
            I build modern and responsive frontend applications using React.js, Next.js, TypeScript, JavaScript Redux, SCSS, CSS3, and Tailwindcss. I create engaging user interfaces, improve website performance, and ensure cross-browser compatibility.
          </p>
        </div>
        
        <div className="bg-[#150135] rounded-lg p-5 md:p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] group cursor-pointer">
          <FaMobileAlt className="h-12 md:h-16 lg:h-20 text-4xl md:text-5xl lg:text-6xl text-[#9c2ef5] mb-3 md:mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white" />
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-white mb-2 text-center">Mobile Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-3 md:mb-4 w-[70%] rounded-full group-hover:border-white"></div>
          <p className="text-center text-xs md:text-sm lg:text-base leading-relaxed">
            I develop mobile applications for Android and iOS platforms using Java and React Native. I build native and cross-platform applications, integrate third-party APIs, and implement mobile-specific features such as push notifications and geolocation.
          </p>
        </div>

        <div className="bg-[#150135] rounded-lg p-5 md:p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] group cursor-pointer">
          <FaCheckCircle className="h-12 md:h-16 lg:h-20 text-4xl md:text-5xl lg:text-6xl text-[#9c2ef5] mb-3 md:mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white" />
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-white mb-2 text-center">QA Testing</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-3 md:mb-4 w-[70%] rounded-full group-hover:border-white"></div>
          <p className="text-center text-xs md:text-sm lg:text-base leading-relaxed">
            I provide comprehensive QA testing services including manual testing, test automation, performance testing, and bug identification. I ensure software quality, reliability, and optimal user experience through rigorous testing methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
