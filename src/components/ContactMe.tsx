
const ContactMe = () => {
  return (
    <div id="contact" className="pb-36 w-full flex flex-col items-center justify-center py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-8 md:px-0 w-[83%]">
        
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-3">Let's Talk</h2>
          <div className="border-b-8 border-[#9c2ef5] w-[16%] rounded-full mb-8"></div>
          <p className="text-white">
            Say Hi at <a href="mailto:martinemahirwe@gmail.com" className="text-purple-300">martinemahirwe@gmail.com</a>
          </p>
          <p className="text-white">
          For more info download <a href="https://drive.google.com/file/d/1wT10EMgT2JNJxhNaQ5L9nSNc8oR8_P-J/view" download className="text-purple-300">my resume</a>
          </p>
        </div>

        <div className="flex flex-col justify-center items-start">
          <form className="w-[75%]">
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-lg bg-[#231930] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-lg bg-[#231930] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="janedoe@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 rounded-lg bg-[#231930] focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="work"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 pb-8 rounded-lg bg-[#231930]  focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-[#8065be] rounded-[1.5625rem] pt-[0.6rem] pb-[0.6rem] pl-7 pr-7 w-[40%] font-medium hover:bg-[#1c0849] hover:text-purple-400 mt-7"
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
