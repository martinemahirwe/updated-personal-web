import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import image from '../assets/Screenshot from 2024-06-27 16-05-09.png'

const projects = [
  {
    id: 1,
    image: `${image}`,
    label: 'Team Project',
    title: 'Exclusive E-commerce Platform: A PERN Stack Implementation',
    details: 'Teamed up with a talented development team to create a cutting-edge e-commerce platform with advanced features, including a seamlessly integrated chatbot, and exceptional user experiences.',
    year: 2024,
    role: 'Full-stack Developer',
  },
  {
    id: 2,
    image: 'path_to_image_2.jpg',
    label: 'Project 2',
    title: 'Project Title 2',
    details: 'Project details for project 2.',
    year: 2023,
    role: 'Full-stack Developer',
  },
  {
    id: 3,
    image: 'path_to_image_3.jpg',
    label: 'Project 3',
    title: 'Project Title 3',
    details: 'Project details for project 3.',
    year: 2023,
    role: 'Full-stack Developer',
  },
  {
    id: 4,
    image: 'path_to_image_4.jpg',
    label: 'Project 4',
    title: 'Project Title 4',
    details: 'Project details for project 4.',
    year: 2023,
    role: 'Backend Developer',
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex:number) => {
    setCurrentPage(pageIndex);
  };

  const currentProject = projects[currentPage - 1];

  return (
    <div id="projects" className="pb-32 w-full flex flex-col items-center justify-center py-16">
    <div className="w-[83%] flex flex-col items-start">
        <h2 className="text-4xl font-bold text-white mb-3">Featured Projects</h2>
        <div className="border-b-8 border-[#9c2ef5] w-[16%] rounded-full mb-24"></div>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:px-0 w-[83%] mb-12">
        <div className="relative flex justify-center items-center pt-[10rem] pb-[10rem] pr-[5rem] pl-[5rem] rounded-[0.75rem] bg-[#1c0849] h-[32rem]">
         <div className='border-[#3f3f3f]'><img src={currentProject.image} alt={currentProject.label} className="object-fit h-[18rem] w-[30rem] rounded-[1.5rem]" /></div> 
          <button className="bg-[#8065be] rounded-[1.5625rem] pt-[0.5rem] pb-[0.5rem] pl-7 pr-7 absolute top-5 left-5 ">
            {currentProject.label}
          </button>
        </div>
        <div className="flex flex-col pl-[7rem] pr-[2rem] w-full">
          <h3 className="text-[1.8rem] font-semibold leading-[1.3em] mb-5">{currentProject.title}</h3>
          <p className="mb-4">{currentProject.details}</p>
          <div className="flex items-start border-b border-[#c7c7c7] py-4 w-full">
            <p className="text-center font-bold">PROJECT INFO</p>
          </div>
          <div className="flex justify-between border-b border-[#c7c7c7] py-4">
            <p className="text-center font-medium">Year</p>
            <p className="text-center">{currentProject.year}</p>
          </div>
          <div className="flex justify-between border-b border-[#c7c7c7] py-4">
            <p className="text-center font-medium">Role</p>
            <p className="text-center">{currentProject.role}</p>
          </div>
          <div className="flex items-center justify-center bg-[#8065be] rounded-[1.5625rem] pt-[0.6rem] pb-[0.6rem] pl-7 pr-7 w-[42%] font-medium hover:bg-[#1c0849] hover:text-purple-400 mt-12 mb-7 cursor-pointer"> 
          See it in action <FaArrowRight className="ml-2 -rotate-45" /></div>
        </div>
      </div>
      <div className="flex space-x-5">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-300 text-purple-500'}`}
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
