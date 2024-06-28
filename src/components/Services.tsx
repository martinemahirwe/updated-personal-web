import { FaServer, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="pb-32 w-full flex flex-col items-center justify-center">
      <div className="w-[83%] flex flex-col items-start">
        <h2 className="text-4xl font-bold text-white mb-3">What Services You Will Get From Me</h2>
        <div className="border-b-8 border-[#9c2ef5] w-[30%] rounded-full mb-24"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 px-8 md:px-0 w-[83%] justify-center items-center cursor-pointer">
        <div className="bg-[#150135] rounded-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[400px] group">
          <FaServer className="h-20 text-6xl text-[#9c2ef5] mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white"/> 
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Backend Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-4 w-[70%] rounded-full group-hover:border-white"></div>
          <p className="text-center">
            I specialize in building robust and scalable backend systems using Node.js, MongoDB, PostgreSQL, Microservices, and Docker. I have experience in designing RESTful APIs, implementing authentication and authorization, and optimizing database performance.
          </p>
        </div>
        
        <div className="bg-[#150135] rounded-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[400px] group cursor-pointer">
          <FaLaptopCode className="h-20 text-6xl text-[#9c2ef5] mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white"/>
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Frontend Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-4 w-[73%] rounded-full group-hover:border-white"></div>
          <p className="text-center">
            I build modern and responsive frontend applications using React.js, Next.js, TypeScript, JavaScript Redux, SCSS, CSS3, and Tailwindcss. I create engaging user interfaces, improve website performance, and ensure cross-browser compatibility.
          </p>
        </div>
        
        <div className="bg-[#150135] rounded-lg p-8 transform transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-purple-500/50 flex flex-col items-center min-h-[400px] group cursor-pointer">
          <FaMobileAlt className="h-20 text-6xl text-[#9c2ef5] mb-5 transition-transform duration-300 ease-in-out transform hover:rotate-6 group-hover:text-white" />
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Mobile Development</h3>
          <div className="border-b-4 border-[#9c2ef5] mb-4 w-[70%] rounded-full group-hover:border-white"></div>
          <p className="text-center">
            I develop mobile applications for Android and iOS platforms using Java and React Native. I build native and cross-platform applications, integrate third-party APIs, and implement mobile-specific features such as push notifications and geolocation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
