import './App.css'
import {
  AccountBenefits,
  AccountsOverview,
  ChatWidget,
  FeedbackTab,
  FeatureSplit,
  Footer,
  Header,
  Hero,
  PackageGrid,
  PromoBanner,
  Section,
  Container,
  SectionHeading,
  ServiceSection,
  Testimonials,
} from './components'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section className="packages-section">
          <Container>
            <SectionHeading eyebrow="Քո ընտրությունը" title="Բանկային փաթեթներ" text="Մեկ փաթեթում՝ այն ամենը, ինչ պետք է ֆինանսական առօրյայիդ։" />
            <PackageGrid />
          </Container>
        </Section>
        <AccountsOverview />
        <FeatureSplit
          title="Հաշիվների տեսակներ"
          text="Բանկային ամենօրյա գործարքները կատարելն ավելի պարզ ու հարմար է, երբ Ամերիաբանկում դու ունես ճիշտ հաշիվ։"
          items={['Ընթացիկ հաշիվ','Խնայողական հաշիվ','Արտարժույթով ներբանկային հաշիվ','Էքսպրես հաշիվներ','Հաշիվ՝ բիզնեսի համար']}
          button="Դիտել հաշիվները"
          image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85"
        />
        <FeatureSplit
          reverse
          tint
          title="Հաշիվների կառավարում"
          text="Մեզ հետ առօրյա բանկինգը հեշտ է, հարմար և արագ։"
          items={['MyAmeria օնլայն/մոբայլ բանկինգ','Հեռախոսային բանկինգ','Հաշվի վերահսկում իրական ժամանակում']}
          button="Ներբեռնել MyAmeria-ն"
          image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85"
        />
        <FeatureSplit
          title="Վճարումներ և փոխանցումներ"
          text="Արագ ու հարմար վճարումներ՝ տնից, գրասենյակից կամ ճանապարհին։"
          items={['Կոմունալ վճարումներ','Փոխանցում հաշիվներին','MoneyGram','Հիմնականն առանց թղթաբանության']}
          button="Դիտել ծառայությունները"
          image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85"
        />
        <ServiceSection />
        <AccountBenefits />
        <Testimonials />
        <PromoBanner />
      </main>
      <Footer />
      <FeedbackTab />
      <ChatWidget />
    </>
  )
}
