import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/2.jpg";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";



function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" btnClass="hide" />
            <ContactForm />
            <Footer />

        </>

    )


}
export default Contact;