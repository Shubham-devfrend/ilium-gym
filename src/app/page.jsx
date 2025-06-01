import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
      <div className="w-full bg-[#1a1a1a] text-white overflow-x-hidden">  
        <section>
            <Hero/>
        </section>
        <section id="About">
            <About/>
        </section>
        <section id="Photos">
            <Photos/>
            </section>
        <section id="Services">
            <Service/> 
        </section>
       <section id="About">
          <Testimonials/>
        </section>
        <section id="Contact">
            <Contact/>
        </section>    
          
      </div>
  )
}