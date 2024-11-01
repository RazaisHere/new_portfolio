
import {ReactLenis} from 'lenis/react';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skill from './Components/Skill'
import Work from './Components/Work'
function App() {
  useGSAP(()=>{
    const elements=gsap.utils.toArray(".reveal-up");
    elements.forEach((element)=>{
      gsap.to(element,{
        
        ScrollTrigger:{
          trigger:element,
          scrub:true,
          start:'-200 bottom',
          end:"'bottom 80%"
        },
        y:0,
        opacity:1,
        duration:1,
        ease:"power2.Out",
      }
      )
    })
    
  })

  return (
    <ReactLenis root>
    <Header />
    <main>
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    </ReactLenis>
  )
}

export default App
