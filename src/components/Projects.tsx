import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import ecommerceImage from '../assets/Screenshot from 2024-06-27 16-05-09.png'

const projects = [
  {
    id: 1,
    image: 'https://drive.google.com/uc?export=view&id=1E0fGA0jASL7RN4EpDTemsj-fwdL2Gt4c',
    label: 'Current Role',
    title: 'BAG - Hiring, Assessment & Onboarding Tool',
    details: 'Africa\'s leading hiring, assessment & onboarding platform. I work as a QA professional ensuring platform reliability, quality, and optimal user experience. BAG helps employers source, assess, hire and onboard top talents across Africa with comprehensive testing and quality assurance.',
    year: 2024,
    role: 'QA Specialist',
    status: 'Ongoing',
    link: 'https://baghq.com/',
    tagline: 'Africa\'s Leading Hiring, Assessment & Onboarding Tool',
  },
  {
    id: 2,
    image: 'https://drive.google.com/uc?export=view&id=1orFl9wpkXPZr7E6jacsS3abOiAzTmxBW',
    label: 'Team Project',
    title: 'iKunde: Mental Health & Wellness Platform',
    details: 'A digital space for mental health care, connection, and growth powered by AI and guided by compassion. I contribute as both Full-stack Developer and QA Tester, ensuring code quality and platform reliability. iKunde bridges the gap between technology and empathy, offering inclusive tools for students, clinics, universities, and NGOs across East Africa.',
    year: 2025,
    role: 'Full-stack Developer & QA Tester',
    status: 'Ongoing',
    link: 'https://ikunde.vercel.app/',
    tagline: 'Know your mind. Become your best version. Live your light.',
  },
  {
    id: 3,
    image: `${ecommerceImage}`,
    label: 'E-commerce Platform',
    title: 'Exclusive E-commerce Platform: A PERN Stack Implementation',
    details: 'Teamed up with a talented development team to create a cutting-edge e-commerce platform with advanced features, including a seamlessly integrated chatbot, and exceptional user experiences. Built with React, Node.js, and PostgreSQL.',
    year: 2024,
    role: 'Full-stack Developer',
    link: '#',
  },
  {
    id: 4,
    image: 'https://drive.google.com/uc?export=view&id=1orFl9wpkXPZr7E6jacsS3abOiAzTmxBW',
    label: 'Portfolio Project',
    title: 'Success Construct Portfolio',
    details: 'A professional portfolio and business website built with Next.js showcasing projects, services, and contact capabilities. Demonstrates expertise in modern web development, responsive design, and optimal user experience across all devices.',
    year: 2025,
    role: 'Full-stack Developer',
    link: 'https://success-construct.vercel.app/',
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex:number) => {
    setCurrentPage(pageIndex);
  };

  const currentProject = projects[currentPage - 1];

  return (
    <div id="projects" className="pb-32 w-full flex flex-col items-center justify-center py-16 px-4 lg:px-0">
      <div className="w-full lg:w-[83%] flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
        <div className="border-b-8 border-[#9c2ef5] w-[40%] md:w-[16%] rounded-full mb-24"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full lg:w-[83%] mb-12">
        <div className="relative flex justify-center items-center pt-6 md:pt-10 pb-6 md:pb-10 lg:pt-[10rem] lg:pb-[10rem] pr-4 md:pr-6 lg:pr-[5rem] pl-4 md:pl-6 lg:pl-[5rem] rounded-[0.75rem] bg-[#1c0849] h-auto lg:h-[32rem]">
          <div className='border-[#3f3f3f]'>
            <img src={currentProject.image} alt={currentProject.label} className="object-cover h-[12rem] sm:h-[15rem] md:h-[18rem] w-[16rem] sm:w-[20rem] md:w-[30rem] rounded-[1.5rem]" />
          </div> 
          <div className="flex gap-2 absolute top-3 md:top-5 left-3 md:left-5 flex-wrap">
            <button className="bg-[#8065be] rounded-[1.5625rem] pt-[0.25rem] md:pt-[0.5rem] pb-[0.25rem] md:pb-[0.5rem] pl-4 md:pl-7 pr-4 md:pr-7 text-xs md:text-base">
              {currentProject.label}
            </button>
            {currentProject.status && (
              <button className="bg-[#35107C] rounded-[1.5625rem] pt-[0.25rem] md:pt-[0.5rem] pb-[0.25rem] md:pb-[0.5rem] pl-4 md:pl-7 pr-4 md:pr-7 text-xs md:text-base text-purple-200">
                {currentProject.status}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full px-2 md:px-4 lg:pl-[7rem] lg:pr-[2rem]">
          <h3 className="text-base md:text-lg lg:text-[1.8rem] font-semibold leading-tight md:leading-[1.3em] mb-3 md:mb-5">{currentProject.title}</h3>
          {currentProject.tagline && <p className="italic text-purple-300 mb-2 md:mb-3 text-xs md:text-base">{currentProject.tagline}</p>}
          <p className="mb-3 md:mb-4 text-xs md:text-base leading-relaxed">{currentProject.details}</p>
          <div className="flex items-start border-b border-[#c7c7c7] py-2 md:py-4 w-full">
            <p className="text-center font-bold text-xs md:text-base">PROJECT INFO</p>
          </div>
          <div className="flex justify-between border-b border-[#c7c7c7] py-2 md:py-4">
            <p className="text-center font-medium text-xs md:text-base">Year</p>
            <p className="text-center text-xs md:text-base">{currentProject.year}</p>
          </div>
          <div className="flex justify-between border-b border-[#c7c7c7] py-2 md:py-4">
            <p className="text-center font-medium text-xs md:text-base">Role</p>
            <p className="text-center text-xs md:text-base">{currentProject.role}</p>
          </div>
          <a 
            href={currentProject.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#8065be] rounded-[1.5625rem] pt-[0.4rem] md:pt-[0.6rem] pb-[0.4rem] md:pb-[0.6rem] pl-4 md:pl-7 pr-4 md:pr-7 w-full lg:w-[42%] font-medium hover:bg-[#1c0849] hover:text-purple-400 mt-6 md:mt-12 mb-4 md:mb-7 cursor-pointer text-xs md:text-base transition-all duration-300"
          > 
            See it in action <FaArrowRight className="ml-2 -rotate-45" />
          </a>
        </div>
      </div>
      <div className="flex space-x-5 flex-wrap justify-center">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === index + 1 ? 'bg-purple-500 text-white scale-110' : 'bg-gray-300 text-purple-500 hover:bg-gray-400'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
