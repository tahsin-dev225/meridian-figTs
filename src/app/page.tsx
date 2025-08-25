import Footer from "@/components/shared/Footer";
import Banner from "@/components/shared/Landing/Banner";
import CAT from "@/components/shared/Landing/CAT";
import ChosenBy from "@/components/shared/Landing/ChosenBy";
import Collaborate from "@/components/shared/Landing/Collaborate";
import Contact from "@/components/shared/Landing/Contact";
import Discover from "@/components/shared/Landing/Discover";
import LatestCase from "@/components/shared/Landing/LatestCase";
import Liquidity from "@/components/shared/Landing/Liquidity";
import Team from "@/components/shared/Landing/Team";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div className="font-inter min-h-screen ">
      <Navbar/>
      <Banner/>
      <Collaborate/>
      <ChosenBy/>
      <Discover/>
      <LatestCase/>
      <Liquidity/>
      <Team></Team>
      <CAT></CAT>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
