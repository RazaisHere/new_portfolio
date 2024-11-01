import React from 'react'
import Avatar from '../assets/images/avatar-1.jpg'
import hero from '../assets/images/profile.jpg'
import { ButtonPrimary, ButtonOutline } from './Button'
import CV from '../assets/C__V.pdf'
function Hero() {
    return (
        <section
            id='home'
            className='pt-28 lg:pt-36'
        >
            <div className='container items-center  lg:grid lg:grid-cols-2 lg:gap-10'>

                <div>

                    <div className='flex items-center gap-3'>

                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img
                                src={Avatar}
                                alt=""
                                width={40}
                                height={40}
                                className='img-cover'
                            />
                        </figure>
                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative h-2 w-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'>

                                </span>
                            </span>
                            Avaiable for work
                        </div>
                    </div>
                    <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>

                        Building Scalable Modern Websites for the Future
                    </h2>
                    <div className='flex items-center gap-3 '>
                        <ButtonPrimary
                            label={"Download CV"}
                            icon={"download"}
                            href={CV}  // Replace with actual file path
                            target="_blank"
                            classes="download-cv-button"
                        />

                        <ButtonOutline href="#about" label={"Scroll down"} icon="arrow_downward" />
                    </div>
                </div>

                <div>
                    <figure className='w-full max-w-[400px] ml-auto bg-gradient-to-t from-gray-400 via-25% via-gray-800/40 to-65% rounded-[60px] overflow-hidden'>
                        <img src={hero}
                            alt=""
                            className='hidden lg:block'
                            width={656}
                            height={800}

                        />
                    </figure>
                </div>

            </div>

        </section>
    )
}

export default Hero