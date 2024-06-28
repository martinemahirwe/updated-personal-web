import { FaLinkedin, FaGithub } from "react-icons/fa";
import SkillsSection from "./Skills";
import image from "../assets/WhatsApp_Image_2024-07-03_at_12.50.41-removebg-preview.png"

const AboutSection = () => {
const imageUrl ="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div id="about" className="flex flex-col items-center justify-around w-full text-[16px]">
            <div className="grid grid-cols-2 place-content-center w-[83%] pt-36 pb-36">
            <div className="flex flex-col items-start">
                <h1 className="text-[3.5rem] font-[400]">About me</h1>
                <div className="border-b-8 border-[#9c2ef5] w-[23%] rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-[1.8rem] leading-[1.3em] mb-5 font-medium">
                    <h3 className="text-[1.8rem] leading-[1.3em]">I am a full-stack developer based in Kigali.</h3>
                    <h3 className="text-[1.8rem] leading-[1.3em]">Has Electronics and Telecommunication Engineering background.</h3>
                </div>
                <p className="text-[1rem] leading-[1.618]">I am a full-stack developer based in Kigali with a passion for building efficient applications plus 
                     looking for exciting opportunities 😊. 
                     Has a background in Electronics and Telecom Engineering.
                     Likes to focus on accessibility when developing.
                     My expertise spans the MERN stack, PERN stack, Next.js, Redux, microservices, ORMs, and React Native. 
                     While I am not programming, I enjoy working out, watching cartoons, hanging out with friendsand I also write stories or scripts occasionally.
                   </p>
                <div className="flex items-center gap-5 mt-8 cursor-pointer">
                    <div className="flex items-center justify-center text-[14px] bg-[#8065be] rounded-[1.5625rem] pt-[0.6rem] pb-[0.6rem] pl-7 pr-7 gap-4 font-medium hover:bg-[#1c0849] group hover:text-purple-400">DOWNLOAD RESUME<span className="h-2 w-2 rounded-full group-hover:bg-purple-400 bg-white"></span></div>
                    <div className="flex items-center justify-center bg-[#222] h-full w-[3rem] p-[0.5rem] rounded-full hover:text-purple-400"> <a href="https://www.linkedin.com/in/martine-mahirwe-65138a285/" title='check my profile on In' target="blank" > <FaLinkedin className="text-[22px]" /></a></div>
                    <div className="flex items-center justify-center rounded-full bg-[#222] h-full w-[3rem] p-[0.5rem] hover:text-purple-400"><a href="https://github.com/martinemahirwe" target="blank" title='visit my github'><FaGithub className="text-[22px]" /></a></div>
                </div>
            </div>
            </div>
            {      <div className="border border-[#c7c7c7] flex justify-between rounded-[1.5rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 w-[83%]">
            <img 
            src={image} 
            alt="A photo of a woman hacker, hands on keyboard"
            className="object-fit h-[30rem]" 
            />
            <div className="flex items-center justify-center px-4">
            <p className="text-backgroundColor text-lg font-bold italic">"Empowering Minds Through Technology"</p>
            </div>
            <img 
            src={imageUrl} 
            alt="A photo of a woman hacker, hands on keyboard"
            className="object-fit h-[30rem] rounded-r-[1.5rem]" 
            />
            </div>}

            <div className="w-[83%]  pt-32 pb-32">
                <SkillsSection />
                <div  className="grid grid-cols-2 place-content-center pb-12 pt-16">
                    <div>
                    <h2 className="text-4xl font-[500] mb-3">MY Experience</h2>
                    <div className="border-b-8 border-[#9c2ef5] w-[25%] rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-9">
                        <div><p className="flex justify-between items-center mb-2">
                            <span className="font-medium text-[20px]">Andela Apprenticeship</span>
                            <span className="font-medium text-[20px]">Jan 2024 — Jul 2024</span>
                        </p>
                        <p>I completed an online apprenticeship where I gained valuable hands-on 
                            experience and practical skills under the guidance of industry experts.
                            This experience equipped me with real-world knowledge and
                            prepared me to apply my learning effectively in professional settings.</p>
                        </div>
                        <div>
                            <p className="flex justify-between items-center mb-2">
                            <span className="font-medium text-[20px]">Full-stack Intern</span>
                            <span className="font-medium text-[20px]">Aug 2024 — Nov 2024</span>
                            </p>
                            <p>I completed a full-stack developer internship focusing on React.js for front-end,Redux Toolkit (RTK) for state management,
                                 Next.js for server-rendered React applications, Node.js for server-side operations,
                                microservices architecture for scalability, and various databases and ORMs for efficient data management. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;