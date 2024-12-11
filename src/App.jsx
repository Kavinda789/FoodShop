import React from "react";
import Navbar from "./assets/compornent/Navbar/Navbar";
import Hero from "./assets/compornent/Hero/Hero";
import Services from "./assets/compornent/Services/Services";
import Banner from "./assets/compornent/Banner/Banner";
import AppStore from "./assets/compornent/AppStore/AppStore";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
    </div>
  );
}

export default App;
