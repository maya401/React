import Everything from "../everthing";
import Features from "../features";
import Footer from "../footer";
import Header from "../header";
import HeroSection from "../hero-section";
import Management from "../management";
import News from "../News";
import Partenaires from "../partenaires";
import Personnel from "../personnel";
import PremierSection from "../PremierSection";
import Private from "../private";
import What from "../SectionImage";
import Testimony from "../testimony";
import Tools from "../Tools";
import Voyage from "../voyage";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Partenaires />
      <PremierSection />
      <What />
      <Everything />
      <Personnel />
      <Tools />
      <Voyage />
      <Management />
      <Private />
      <Features />
      <Testimony />
      <News/>
      <Footer />
    </div>
  );
}
