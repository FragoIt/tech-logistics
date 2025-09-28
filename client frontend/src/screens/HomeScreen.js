import React from "react";
import ModernHeader from "./../components/ModernHeader";
import ModernHero from "./../components/homeComponents/ModernHero";
import ModernProductsSection from "./../components/homeComponents/ModernProductsSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  
  return (
    <div className="modern-layout">
      <ModernHeader />
      <main>
        <ModernHero />
        <ModernProductsSection keyword={keyword} pagenumber={pagenumber} />
        <CalltoActionSection />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
