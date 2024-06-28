
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import image from "../assets/Screenshot from 2024-07-03 15-40-18.png"


const Header = () => {
    return (
        <div className='z-[999] bg-[#18092f] sticky top-0 left-0 right-0 bottom-auto cursor-pointer'>
        <div className='flex flex-column flex-nowrap justify-around items-center p-4 px-10 py-4 pt-4 pb-4 w-full h-[15vh]  text-white font-sans font-light text-base leading-relaxed ' >
            <div className='flex gap-4 w-[17%] items-center justify-center'>
            <div className='flex gap-1 items-center justify-center'>
            <img src={image} alt="logo" className='rounded-full' />
            </div>
            <div className='flex gap-5 border border-solid border-[#FFFFFF80] bg-[#8065BE80] rounded-[2.5rem] pt-1 pb-1 pl-5 pr-5 justify-center w-full'>
                <p>EN</p>
                <p>FR</p>
                <p>SW</p>
            </div>
            </div>
            <ol className='flex justify-between w-[35%] items-center'>
                    <li>
                        <a href='#home' className='nav-link relative inline-block hover:text-[#8065BE] hover:border-b-2 hover:border-[#8065BE] transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#about' className='nav-link relative inline-block hover:text-[#8065BE] hover:border-b-2 hover:border-[#8065BE] transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#services' className='nav-link relative inline-block hover:text-[#8065BE] hover:border-b-2 hover:border-[#8065BE] transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href='#projects' className='nav-link relative inline-block hover:text-[#8065BE] hover:border-b-2 hover:border-[#8065BE] transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact' className='nav-link relative inline-block hover:text-[#8065BE] hover:border-b-2 hover:border-[#8065BE] transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Contact
                        </a>
                    </li>
                </ol>
            <div className='flex justify-between w-[10%] items-center'>
                <div className='border border-solid border-[#FFFFFF80] p-2 rounded-full hover:bg-[#8065BE80]'><a href="https://x.com/MartineMahirwe" title='visit my github' target="blank" ><FaTwitter /></a>
                </div>
                <div className='border border-solid border-[#FFFFFF80] p-2 rounded-full hover:bg-[#8065BE80]'>
                <a href="https://www.linkedin.com/in/martine-mahirwe-65138a285/" title='check my profile on In' target="blank" > <FaLinkedin /></a>
                </div>
                <div className='border border-solid border-[#FFFFFF80] p-2 rounded-full hover:bg-[#8065BE80]'>
                <a href="https://www.instagram.com/martinenyiramahirwe/" title='reach me out via IG' target="blank" > <FaInstagram /></a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Header;