import HeroSection from "./HeroSection";
import LoanCardsGrid from "./LoanCardsGrid";
import LoanListSection from "./LoanListSection";
import ExtraCardsSection from "./ExtraCardsSection";

export default function MainContent({ activeNav }) {
  return (
    <main className="loans-page">
      {activeNav === "Վարկեր" ? (
        <>
          <HeroSection />
          <LoanCardsGrid />
          <LoanListSection />
          <ExtraCardsSection />
        </>
      ) : (
        <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
          <h2>{activeNav}</h2>
          <p>Այս բաժինը դեռ պատրաստման փուլում է:</p>
        </div>
      )}
    </main>
  );
}