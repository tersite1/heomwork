import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapPromo from "@/components/MapPromo";
import HostCTA from "@/components/HostCTA";
import Guide from "@/components/Guide";
import Reviews from "@/components/Reviews";
import Events from "@/components/Events";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <MapPromo />
        <HostCTA />
        <Guide />
        <Reviews />
        <Events />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
