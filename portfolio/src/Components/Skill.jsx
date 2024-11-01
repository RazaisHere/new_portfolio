import React from 'react'
import Skillcard from './Skillcard';
import Image1 from "../assets/images/figma.svg"
import Image2 from "../assets/images/css3.svg"
import Image3 from "../assets/images/javascript.svg"
import Image4 from "../assets/images/nodejs.svg"
import Image5 from "../assets/images/react.svg"
import Image6 from "../assets/images/expressjs.svg"
import Image7 from "../assets/images/mongodb.svg"
import Image8 from "../assets/images/tailwindcss.svg"
function Skill() {
    const skillItem = [
        {
          imgSrc: Image1,
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: Image2,
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: Image3,
          label: 'JavaScript'
        },
        {
          imgSrc:Image4,
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: Image6,
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc:Image7,
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc:Image5,
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc:Image8,
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
      ];
  return (
    <section className='section'>
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools i use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3'>
                {
                    skillItem.map(({imgSrc,label,desc,classes},key)=>(
                        
                        <Skillcard key={key} imgSrc={imgSrc} label={label} desc={desc}  classes={"reveal-up"}  />
                    ))
                }
            </div>
        </div>

    </section>
  )
}


export default Skill