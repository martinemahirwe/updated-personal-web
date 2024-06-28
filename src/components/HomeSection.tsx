import image from "../assets/WhatsApp_Image_2024-06-16_at_23.00.02-removebg-preview.png"
import { FaLocationArrow } from "react-icons/fa"

const HomeSection = () => {
return(
    <div id="home" className="flex w-full h-5/6 place-content-center justify-center pt-28 pb-28">
    <div className="w-[20%] grid place-content-center justify-start font-[2px] mt-32">
         <span className="flex justify-end -mr-5"><FaLocationArrow size={30} color="#35107C"/></span> 
        <button className="bg-[#35107C] rounded-[1.5625rem] w-[12rem] z-[2] pt-1.5 pb-1.5">Software Developer</button>
    </div>
    <div className="block text-center w-[43%]">
        <div className="flex justify-center mb-8">
        <div className="bg-[#815fcf] border border-solid border-[#FFFFFF80] flex justify-center items-center w-[7rem] h-[7rem] rounded-full">
            <img src={image} alt="my avatar" className="w-[5rem] h-[5rem] object-cover"  />
        </div>
        </div>
        <div className="mb-9" >
            <h1 className="text-[1.8rem] leading-[1.3rem] font-light mb-4 h-">Hello! I'm Martine</h1>
            <p className="">Software Developer</p>
        </div>
        <div className="">
            <h1 className="text-[2.5rem] font-bold leading-[3.2rem] mb-5">Forging Code Solutions for Today and Tomorrow's Demands</h1>
            <p className="mb-8">
           Welcome to the frontier of creativity and technology. 
           I'm here to simplify complex challenges with intuitive software solutions.
           </p>
        </div>
        <div className="flex gap-[1.875rem] justify-center">
            <button className="bg-[#8065be] rounded-[1.5625rem] pt-[0.5rem] pb-[0.5rem] pl-10 pr-10 hover:bg-[#1c0849] hover:text-purple-400">Let's talk</button>
            <button className="bg-[white] rounded-[1.5625rem] text-[#312c2c] pt-[0.5rem] pb-[0.5rem] pl-11 pr-11 hover:bg-[#1c0849] hover:text-purple-400">Learn More</button>
        </div>
    </div>
    <div className="flex justify-end items-start w-[20%] mt-32">
        <span className="inline-block transform rotate-[270deg] -mt-6"><FaLocationArrow size={30} color="#35107C"/></span>
        <button className="bg-[#35107C] rounded-[2.5rem] w-[12rem] z-[2] pt-1.5 pb-1.5">Software Developer</button>
    </div>
    </div>
)
}

export default HomeSection;