import { useState } from 'react';

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Redux", "SCSS", "Tailwindcss", "Next.js"],
  backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Sequelize ORM", "Java", "Microservices", "Docker", "RESTful APIs"],
  mobile: ["Java Android Apps", "React Native", "Figma"],
  qa: ["Manual Testing", "Test Automation", "Selenium", "Jest", "Bug Tracking", "Performance Testing", "Test Case Design", "QA Documentation"]
};

const SkillsSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderSkills = (skills: string[]) => (
    <ul className="mt-2 space-y-2">
      {skills.map(skill => (
        <li key={skill} className="p-2 bg-purple-100 rounded text-backgroundColor font-medium shadow-sm text-sm md:text-base">{skill}</li>
      ))}
    </ul>
  );

  return (
    <div className="w-full mx-auto pb-14 pt-10 border-b border-[#c7c7c73a] px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        <div className="flex items-start justify-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-[500] text-white mb-3">MY Skills</h2>
            <div className="border-b-8 border-[#9c2ef5] w-[50%] md:w-[40%] rounded-full"></div>
          </div>
        </div>
        <div>
          <p className="text-white mb-4 text-sm md:text-base">
            I am dedicated to continuously expanding my skill set and staying current with emerging technologies.<span className="text-purple-300 ml-1">
            Click below to explore the skills I currently possess.</span>
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:space-y-0">
            <SkillButton 
              title="Frontend"
              isOpen={openSection === 'frontend'}
              onClick={() => toggleSection('frontend')}
              skills={skillsData.frontend}
              renderSkills={renderSkills}
            />
            <SkillButton 
              title="Backend"
              isOpen={openSection === 'backend'}
              onClick={() => toggleSection('backend')}
              skills={skillsData.backend}
              renderSkills={renderSkills}
            />
            <SkillButton 
              title="Mobile"
              isOpen={openSection === 'mobile'}
              onClick={() => toggleSection('mobile')}
              skills={skillsData.mobile}
              renderSkills={renderSkills}
            />
            <SkillButton 
              title="QA Testing"
              isOpen={openSection === 'qa'}
              onClick={() => toggleSection('qa')}
              skills={skillsData.qa}
              renderSkills={renderSkills}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkillButtonProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  skills: string[];
  renderSkills: (skills: string[]) => JSX.Element;
}

const SkillButton = ({ title, isOpen, onClick, skills, renderSkills }: SkillButtonProps) => (
  <div
    className={`p-4 rounded-[8px] shadow-lg cursor-pointer transition-all duration-300 ${
      isOpen ? 'bg-[#280c4e5e]' : 'bg-transparent hover:bg-[#280c4e30]'
    }`}
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-lg md:text-2xl font-medium text-[#815fcf]">{title}</h2>
      <svg
        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="#c7c7c7"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    {isOpen && renderSkills(skills)}
  </div>
);

export default SkillsSection;
