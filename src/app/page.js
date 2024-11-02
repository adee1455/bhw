import Nav from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/hero"
import Features from "@/components/features"

export default function Home() {
  return (
   <div className="">
      <Nav/>
      <Hero/>
      <Features/>
   </div>
  );
}
