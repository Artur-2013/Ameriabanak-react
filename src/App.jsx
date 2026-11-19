import TopNav from "./componnents/Header/TopNav";
import MainHeader from "./componnents/Header/MainHeader";
import Hero from "./componnents/Hero/Hero";
import PromoCards from "./componnents/PromoCards/PromoCards";
import FeedbackTab from "./componnents/Hero/FeedbackTab";
import ChatButton from "./componnents/Hero/ChatButton";
import UsefullLinks from "./componnents/UsefulLinks/UsefulLinks";
import OffersSlider from "./componnents/OffersSlider/OffersSlider";
import AmeriaEcosystem from "./componnents/AmeriaEcosystem/AmeriaEcosystem";
import SpecialOffers from "./componnents/SpecialOffers/SpecialOffers";
import CurrencySection from "./componnents/CurrencySection/CurrencySection";
import "./componnents/Header/Header.css";

function App() {
  return (
    <>
      <TopNav />
      <MainHeader />
      <Hero />
      <PromoCards />
      <FeedbackTab />
      <ChatButton />
      <UsefullLinks />
      <OffersSlider />
      <AmeriaEcosystem />
      <SpecialOffers />
      <CurrencySection />
    </>
  );
}

export default App;