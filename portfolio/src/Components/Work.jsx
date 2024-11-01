import React from 'react'
import ProjectCard from './ProjectCard';
import Image1 from "../assets/images/head.png"
import Image2 from "../assets/images/ecomm.png"
import Image3 from "../assets/images/TODO.png"
import Image4 from "../assets/images/QUIZ.png"
import Image5 from "../assets/images/QR.png"
import Image6 from "../assets/images/CURR.png"
import Image7 from "../assets/images/Weather.png"
import Image8 from "../assets/images/RPG.png"
function Work() {
    const works = [
        {
          imgSrc: Image1,
          title: 'Ecommerce app',
          tags: ['Development',"Ecommerce"],
          projectLink: 'https://razaishere.github.io/Headphones-ecommerce/'
        },
        {
          imgSrc: Image2,
          title: 'MERN Stack Ecommerce Website',
          tags: ['API',"Ecommerce"],
          projectLink: 'https://fullstacked-ecommerce-1-2.vercel.app/'
        },
        {
          imgSrc: Image3,
          title: 'Todo List app',
          tags: ['Development'],
          projectLink: 'https://razaishere.github.io/TodoList/'
        },
        {
          imgSrc: Image4,
          title: 'Quiz App',
          tags: ['Development'],
          projectLink: 'https://razaishere.github.io/QuizApp/'
        },
        {
          imgSrc: Image5,
          title: 'QR Code App',
          tags: [, 'Development'],
          projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
        },
        {
          imgSrc: Image6,
          title: 'Currency Converter',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://razaishere.github.io/CurrencyConverter/'
        },
        {
          imgSrc: Image7,
          title: 'Weather App',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://razaishere.github.io/weather-app/'
        },{
          imgSrc: Image8,
          title: 'Password Generator',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://razaishere.github.io/RandomPasswordGenerator/'
        }
      ];
  return (
    <section id='work' className='section'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{works.map(({imgSrc,title,tags,projectLink},key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}  />
            ))}</div>
        </div>
    </section>
  )
}

export default Work