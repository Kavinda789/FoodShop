import React, { useEffect } from "react";
import Navbar from "./assets/compornent/Navbar/Navbar";
import Hero from "./assets/compornent/Hero/Hero";
import Services from "./assets/compornent/Services/Services";
import Banner from "./assets/compornent/Banner/Banner";
import AppStore from "./assets/compornent/AppStore/AppStore";
import Testimonial from "./assets/compornent/Testimonial/Testimonial";
import Footer from "./assets/compornent/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
