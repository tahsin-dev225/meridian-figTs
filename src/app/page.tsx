import Banner from "@/components/shared/Landing/Banner";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div className="font-inter min-h-screen w-[95%] md:w-[90%] mx-auto">
      <Navbar/>
      <Banner/>
    </div>
  );
}
