import TopNav from "./componnents/Header/TopNav";
import MainHeader from "./componnents/Header/MainHeader";
import Hero from "./componnents/Hero/Hero";
import PromoCards from "./componnents/PromoCards/PromoCards";
import FeedbackTab from "./componnents/Hero/FeedbackTab";
import ChatButton from "./componnents/Hero/ChatButton";
import UsefulLinks from "./componnents/UsefulLinks/UsefulLinks";
import OffersSlider from "./componnents/OffersSlider/OffersSlider";
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
      <UsefulLinks />
      <OffersSlider/>
    </>
  );
}

export default App;