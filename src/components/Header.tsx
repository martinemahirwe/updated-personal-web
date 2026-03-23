
import { FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='z-[999] bg-[#18092f] sticky top-0 left-0 right-0 bottom-auto'>
            <div className='flex flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-5 w-full'>
                
                {/* Logo */}
                <div className='flex items-center gap-2 flex-shrink-0'>
                    <div className='w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-[#8065BE] to-[#C77DFF] rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-base md:text-lg'>M</span>
                    </div>
                    <span className='text-white font-semibold text-base md:text-xl tracking-wider'>Martine</span>
                </div>

                {/* Desktop Navigation Links */}
                <nav className='hidden md:flex gap-4 lg:gap-8'>
                    <a href='#home' className='text-white text-xs lg:text-sm font-light hover:text-[#8065BE] transition-colors duration-300'>
                        Home
                    </a>
                    <a href='#about' className='text-white text-xs lg:text-sm font-light hover:text-[#8065BE] transition-colors duration-300'>
                        About
                    </a>
                    <a href='#services' className='text-white text-xs lg:text-sm font-light hover:text-[#8065BE] transition-colors duration-300'>
                        Services
                    </a>
                    <a href='#projects' className='text-white text-xs lg:text-sm font-light hover:text-[#8065BE] transition-colors duration-300'>
                        Projects
                    </a>
                    <a href='#contact' className='text-white text-xs lg:text-sm font-light hover:text-[#8065BE] transition-colors duration-300'>
                        Contact
                    </a>
                </nav>

                {/* Desktop Social Media Icons */}
                <div className='hidden md:flex gap-3 lg:gap-4 flex-shrink-0'>
                    <a 
                        href="https://x.com/MartineMahirwe" 
                        title='Visit my Twitter' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-white hover:text-[#8065BE] hover:scale-110 transition-all duration-300'
                    >
                        <FaTwitter size={16} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/martine-mahirwe-65138a285/" 
                        title='Check my LinkedIn profile' 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white hover:text-[#8065BE] hover:scale-110 transition-all duration-300'
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a 
                        href="https://www.instagram.com/becomingmartine/" 
                        title='Reach me out via Instagram' 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white hover:text-[#8065BE] hover:scale-110 transition-all duration-300'
                    >
                        <FaInstagram size={16} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className='md:hidden text-white hover:text-[#8065BE] transition-colors duration-300 flex-shrink-0'
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-[#18092f] border-t border-[#8065BE] px-4 py-4'>
                    <nav className='flex flex-col gap-4'>
                        <a 
                            href='#home' 
                            onClick={closeMenu}
                            className='text-white text-sm font-light hover:text-[#8065BE] transition-colors duration-300'
                        >
                            Home
                        </a>
                        <a 
                            href='#about' 
                            onClick={closeMenu}
                            className='text-white text-sm font-light hover:text-[#8065BE] transition-colors duration-300'
                        >
                            About
                        </a>
                        <a 
                            href='#services' 
                            onClick={closeMenu}
                            className='text-white text-sm font-light hover:text-[#8065BE] transition-colors duration-300'
                        >
                            Services
                        </a>
                        <a 
                            href='#projects' 
                            onClick={closeMenu}
                            className='text-white text-sm font-light hover:text-[#8065BE] transition-colors duration-300'
                        >
                            Projects
                        </a>
                        <a 
                            href='#contact' 
                            onClick={closeMenu}
                            className='text-white text-sm font-light hover:text-[#8065BE] transition-colors duration-300'
                        >
                            Contact
                        </a>
                        <div className='flex gap-3 pt-2'>
                            <a 
                                href="https://x.com/MartineMahirwe" 
                                title='Visit my Twitter' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-white hover:text-[#8065BE] transition-colors duration-300'
                            >
                                <FaTwitter size={18} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/martine-mahirwe-65138a285/" 
                                title='Check my LinkedIn profile' 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-white hover:text-[#8065BE] transition-colors duration-300'
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a 
                                href="https://www.instagram.com/becomingmartine/" 
                                title='Reach me out via Instagram' 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-white hover:text-[#8065BE] transition-colors duration-300'
                            >
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Header;