import Image from "next/image";


import LandingPage from "./landing";
import Footer from "@/components/footerComponent/footer";

export default function Home() {
  return (
    <div className="">
      <LandingPage/>
      <Footer/>
    </div>
  );
}
