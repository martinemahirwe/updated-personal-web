import { FaLinkedin, FaGithub } from "react-icons/fa";
import SkillsSection from "./Skills";
import image from "../assets/WhatsApp_Image_2024-07-03_at_12.50.41-removebg-preview.png"

const AboutSection = () => {
const imageUrl ="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div id="about" className="flex flex-col items-center justify-around w-full text-[16px] px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 place-content-center w-full lg:w-[83%] pt-16 md:pt-36 pb-16 md:pb-36">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl md:text-[3.5rem] font-[400] mb-4">About me</h1>
                <div className="border-b-8 border-[#9c2ef5] w-[40%] md:w-[23%] rounded-full"></div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-lg md:text-[1.8rem] leading-relaxed md:leading-[1.3em] mb-5 font-medium space-y-4">
                  <h3 className="text-lg md:text-[1.8rem] leading-relaxed md:leading-[1.3em]">I am a Software Developer & QA Tester based in Kigali.</h3>
                  <h3 className="text-lg md:text-[1.8rem] leading-relaxed md:leading-[1.3em]">Background in Electronics and Telecommunication Engineering.</h3>
                </div>
                <p className="text-base md:text-[1rem] leading-relaxed md:leading-[1.618] mb-6">
                  I am a full-stack developer & QA professional based in Kigali with a passion for building efficient, quality applications and looking for exciting opportunities 😊. 
                  I have a background in Electronics and Telecom Engineering. I like to focus on accessibility and quality assurance when developing.
                  My expertise spans the MERN stack, PERN stack, Next.js, Redux, microservices, ORMs, React Native, and comprehensive testing methodologies. 
                  While I am not programming, I enjoy working out, being in , hanging out with friends, and I also do spoken word poetry or film scripts writing occasionally.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-8 cursor-pointer flex-wrap">
                  <a 
                    href="/Martine Nyiramahirwe.pdf" 
                    download
                    className="flex items-center justify-center text-[14px] bg-[#8065be] rounded-[1.5625rem] pt-[0.6rem] pb-[0.6rem] pl-7 pr-7 gap-4 font-medium hover:bg-[#1c0849] group hover:text-purple-400 transition-all duration-300 whitespace-nowrap"
                  >
                    DOWNLOAD RESUME<span className="h-2 w-2 rounded-full group-hover:bg-purple-400 bg-white"></span>
                  </a>
                  <div className="flex items-center justify-center bg-[#222] h-full w-[3rem] p-[0.5rem] rounded-full hover:text-purple-400 transition-colors duration-300"> 
                    <a href="https://www.linkedin.com/in/martine-mahirwe-65138a285/" title='Check my LinkedIn profile' target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-[22px]" /></a>
                  </div>
                  <div className="flex items-center justify-center rounded-full bg-[#222] h-full w-[3rem] p-[0.5rem] hover:text-purple-400 transition-colors duration-300">
                    <a href="https://github.com/martinemahirwe" target="_blank" rel="noopener noreferrer" title='Visit my GitHub'><FaGithub className="text-[22px]" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#c7c7c7] flex flex-col lg:flex-row justify-between rounded-[1.5rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 w-full lg:w-[83%] overflow-hidden">
              <img 
                src={image} 
                alt="A photo of a woman developer"
                className="object-cover h-[20rem] md:h-[30rem] w-full lg:w-auto" 
              />
              <div className="flex items-center justify-center px-4 md:px-8 py-8 lg:py-0">
                <p className="text-backgroundColor text-base md:text-lg font-bold italic text-center">"Empowering Minds Through Technology"</p>
              </div>
              <img 
                src={imageUrl} 
                alt="A photo of laptop and technology"
                className="object-cover h-[20rem] md:h-[30rem] w-full lg:w-auto rounded-r-[1.5rem]" 
              />
            </div>

            <div className="w-full lg:w-[83%] pt-16 md:pt-32 pb-16 md:pb-32">
                <SkillsSection />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-content-center pb-12 pt-16">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-[500] mb-3">MY Experience</h2>
                    <div className="border-b-8 border-[#9c2ef5] w-[40%] md:w-[25%] rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-8 md:gap-9">
                    <div>
                      <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                        <span className="font-medium text-lg md:text-[20px]">QA Specialist at BAG</span>
                        <span className="font-medium text-lg md:text-[20px]">Dec 2024 — Present</span>
                      </p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Working as a QA Specialist for BAG (Africa's leading hiring, assessment & onboarding platform). 
                        I ensure platform reliability and quality through comprehensive testing, manual and automated test execution, 
                        bug identification, and quality assurance across all features. I collaborate with development and product teams 
                        to deliver exceptional user experience.
                      </p>
                    </div>
                    <div>
                      <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                        <span className="font-medium text-lg md:text-[20px]">Full-stack Dev & QA at iKunde</span>
                        <span className="font-medium text-lg md:text-[20px]">Jan 2025 — Present</span>
                      </p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Contributing as both Full-stack Developer and QA Tester for iKunde, a mental health and wellness platform powered by AI. 
                        I develop features using Next.js and modern web technologies while also ensuring code quality through rigorous testing, 
                        test automation, and comprehensive QA coverage.
                      </p>
                    </div>
                    <div>
                      <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                        <span className="font-medium text-lg md:text-[20px]">Full-stack Intern</span>
                        <span className="font-medium text-lg md:text-[20px]">Aug 2024 — Nov 2024</span>
                      </p>
                      <p className="text-sm md:text-base leading-relaxed">
                        I completed a full-stack developer internship focusing on React.js for front-end, Redux Toolkit (RTK) for state management,
                        Next.js for server-rendered React applications, Node.js for server-side operations,
                        microservices architecture for scalability, and various databases and ORMs for efficient data management. 
                      </p>
                    </div>
                    <div>
                      <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                        <span className="font-medium text-lg md:text-[20px]">Andela Apprenticeship</span>
                        <span className="font-medium text-lg md:text-[20px]">Jan 2024 — Jul 2024</span>
                      </p>
                      <p className="text-sm md:text-base leading-relaxed">
                        I completed an online apprenticeship where I gained valuable hands-on 
                        experience and practical skills under the guidance of industry experts.
                        This experience equipped me with real-world knowledge and
                        prepared me to apply my learning effectively in professional settings.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;