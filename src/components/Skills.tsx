import { useState } from 'react';

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Redux", "SCSS","tailwindcss"],
  backend: ["Node.js","Express.js", "MongoDB", "PostgreSQL", "Sequelize ORM", "Java", "Microservices", "Docker"],
  mobile: ["Java Android Apps", "React Native", "Figma"]
};

const SkillsSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderSkills = (skills: string[]) => (
    <ul className="mt-2 space-y-2">
      {skills.map(skill => (
        <li key={skill} className="p-2 bg-purple-100 rounded text-backgroundColor font-medium shadow-sm">{skill}</li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto pb-14 pt-10 border-b border-[#c7c7c73a]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-start justify-start">
          <div>
          <h2 className="text-4xl font-[500] text-white mb-3">MY Skills</h2>
          <div className="border-b-8 border-[#9c2ef5] w-[40%] rounded-full"></div>
          </div>
        </div>
        <div>
          <p className=" text-white mb-4">
            I am dedicated to continuously expanding my skill set and staying current with emerging technologies.<span className="text-purple-300 ml-1">
            Click below to explore the skills I currently possess.</span>
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div
              className={`p-4 rounded-[8px] shadow-lg cursor-pointer flex-1 ${
                openSection === 'frontend' ? 'bg-[#280c4e5e]' : 'bg-transparent'
              }`}
              onClick={() => toggleSection('frontend')}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-[#815fcf]">Frontend</h2>
                <svg
                  className={`w-6 h-6 ${openSection === 'frontend' ? 'rotate-180' : ''}`}
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
              {openSection === 'frontend' && renderSkills(skillsData.frontend)}
            </div>
            <div
              className={`p-4 rounded-[8px] shadow-lg cursor-pointer flex-1 ${
                openSection === 'backend' ? 'bg-[#280c4e5e]' : 'bg-transparent'
              }`}
              onClick={() => toggleSection('backend')}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-[#815fcf]">Backend</h2>
                <svg
                  className={`w-6 h-6 ${openSection === 'backend' ? 'rotate-180' : ''}`}
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
              {openSection === 'backend' && renderSkills(skillsData.backend)}
            </div>
            <div
              className={`p-4 rounded-[8px] shadow-lg cursor-pointer flex-1 ${
                openSection === 'mobile' ? 'bg-[#280c4e5e]' : 'bg-transparent'
              }`}
              onClick={() => toggleSection('mobile')}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-[#815fcf]">Mobile</h2>
                <svg
                  className={`w-6 h-6 ${openSection === 'mobile' ? 'rotate-180' : ''}`}
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
              {openSection === 'mobile' && renderSkills(skillsData.mobile)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
