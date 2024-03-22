import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import PFurneture from "./components/PFurneture";
import AFurnetire from "./components/AFurnetire";
import Custumers from "./components/Custumers";
import Follow from "./components/Follow";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="md:max-w-[1200px] mx-auto">
        <Header />
        <Hero />
        <Companies />
        <About />
        <PFurneture />
        <AFurnetire />
        <Custumers />
        <Follow />
      </div>
      <Footer />
    </>
  );
}
