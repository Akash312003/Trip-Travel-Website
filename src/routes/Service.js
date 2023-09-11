import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";



function Service() {
    return (
        <>

            <Navbar />
            <Hero cName="hero-mid" heroImg={AboutImg} title="Service" btnClass="hide" />
            <Trip />
            <Footer />
        </>
    )


}
export default Service;