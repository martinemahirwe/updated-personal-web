
const ContactMe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for reaching out! I will get back to you soon.');
  };

  return (
    <div id="contact" className="pb-16 md:pb-36 w-full flex flex-col items-center justify-center py-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 w-full lg:w-[83%]">
        
        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Let's Talk</h2>
          <div className="border-b-8 border-[#9c2ef5] w-1/2 md:w-[16%] rounded-full mb-6 md:mb-8"></div>
          <p className="text-white mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
            Say Hi at <a href="mailto:martinemahirwe@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors duration-300">martinemahirwe@gmail.com</a>
          </p>
          <p className="text-white text-xs md:text-sm lg:text-base">
            For more info download <a href="/Martine Nyiramahirwe.pdf" download className="text-purple-300 hover:text-purple-200 transition-colors duration-300">my resume</a>
          </p>
        </div>

        <div className="flex flex-col justify-center items-start">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3 md:mb-4">
              <label className="block text-gray-400 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#231930] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-xs md:text-base"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <label className="block text-gray-400 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#231930] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-xs md:text-base"
                placeholder="janedoe@gmail.com"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <label className="block text-gray-400 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#231930] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-xs md:text-base"
                placeholder="work"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <label className="block text-gray-400 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-3 py-2 pb-8 rounded-lg bg-[#231930] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-xs md:text-base"
                placeholder="write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-[#8065be] rounded-[1.5625rem] pt-2 md:pt-[0.6rem] pb-2 md:pb-[0.6rem] pl-5 md:pl-7 pr-5 md:pr-7 w-full sm:w-auto font-medium hover:bg-[#1c0849] hover:text-purple-400 mt-5 md:mt-7 transition-all duration-300 text-xs md:text-base whitespace-nowrap"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
