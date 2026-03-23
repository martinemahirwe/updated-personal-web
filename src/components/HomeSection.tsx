import image from "../assets/WhatsApp_Image_2024-06-16_at_23.00.02-removebg-preview.png"
import { FaLocationArrow } from "react-icons/fa"

const HomeSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <div id="home" className="flex flex-col lg:flex-row w-full h-auto lg:h-5/6 place-content-center justify-center pt-28 pb-28 px-4 lg:px-0 gap-8 lg:gap-0">
      <div className="w-full lg:w-[20%] grid place-content-center justify-start font-[2px] lg:mt-32">
        <span className="flex justify-start lg:justify-end lg:-mr-5 mb-4 lg:mb-0"><FaLocationArrow size={30} color="#35107C"/></span> 
        <button className="bg-[#35107C] rounded-[1.5625rem] w-full lg:w-[12rem] z-[2] pt-1.5 pb-1.5 text-white hover:bg-[#8065be] transition-colors duration-300">Software Developer</button>
      </div>
      <div className="block text-center w-full lg:w-[43%]">
        <div className="flex justify-center mb-8">
          <div className="bg-[#815fcf] border border-solid border-[#FFFFFF80] flex justify-center items-center w-[7rem] h-[7rem] rounded-full">
            <img src={image} alt="my avatar" className="w-[5rem] h-[5rem] object-cover"  />
          </div>
        </div>
        <div className="mb-9">
          <h1 className="text-[1.8rem] md:text-[2rem] leading-[1.3rem] font-light mb-4">Hello! I'm Martine</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4">
            <p className="text-base md:text-lg">Software Developer</p>
            <span className="hidden sm:inline">•</span>
            <p className="text-base md:text-lg">QA Tester</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-[1.8rem] md:text-[2.5rem] font-bold leading-[1.3] md:leading-[3.2rem] mb-5">Forging Code Solutions for Today and Tomorrow's Demands</h1>
          <p className="mb-8 text-sm md:text-base">
            Welcome to the frontier of creativity and technology. 
            I'm here to simplify complex challenges with intuitive software solutions while ensuring quality through rigorous testing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-[1.875rem] justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#8065be] rounded-[1.5625rem] pt-[0.5rem] pb-[0.5rem] pl-10 pr-10 text-white hover:bg-[#1c0849] hover:text-purple-400 transition-all duration-300 text-sm md:text-base"
          >
            Let's talk
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-[white] rounded-[1.5625rem] text-[#312c2c] pt-[0.5rem] pb-[0.5rem] pl-11 pr-11 hover:bg-[#1c0849] hover:text-purple-400 transition-all duration-300 text-sm md:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-start lg:justify-end items-start w-full lg:w-[20%] lg:mt-32">
        <span className="inline-block transform rotate-[270deg] -mt-6 hidden lg:inline"><FaLocationArrow size={30} color="#35107C"/></span>
        <button className="bg-[#35107C] rounded-[2.5rem] w-full lg:w-[12rem] z-[2] pt-1.5 pb-1.5 text-white hover:bg-[#8065be] transition-colors duration-300">QA Tester</button>
      </div>
    </div>
  )
}

export default HomeSection;