
import React from "react";

import "./App.css";
import NameLogo from "./components/NameLogo";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Services from "./components/Services";
import PricingCard from "./components/PricingCard";
import UsingVerifier from "./components/UsingVerifier";
import Questions from "./components/Questions";
import TrySeeSection from "./components/TrySeeSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <div className="bg-custom min-h-screen">
     <NameLogo/> 
     <HeroSection/>
     <SocialProof/>
    </div>
    {/* <div className="bg-custom2">
     <HowItWorks/>
    </div>
    <div className="bg-custom3 min-h-screen">
     <Features/>
    </div>
    <div><Services/></div>

    <PricingCard/>
    <UsingVerifier/>
    <Questions/>
    <TrySeeSection/>
    <div className="footerBgImg"><Footer/></div> */}
    </>
  );
}

export default App;

