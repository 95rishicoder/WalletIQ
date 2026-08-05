import Navbar from "../components/Navbar";
import Hero from "../components/Landing/Hero";
import WhyWalletIQ from "../components/WhyWalletIQ";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyWalletIQ />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;