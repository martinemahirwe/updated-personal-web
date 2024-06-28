
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";


const LandingPage = () => {

    return(
        <>
        <Header />
        <div className="bg-backgroundColor items-center font-light justify-center text-base leading-relaxed text-white w-full">
        <HomeSection />
        <AboutSection />
        <Services />
        <Projects />
        <ContactMe />
        <Footer />
        </div>
        </>
    )
}

export default LandingPage;