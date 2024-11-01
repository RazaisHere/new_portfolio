import React from 'react'
import { ButtonPrimary } from './Button';
import Logo from '../assets/images/logo.svg'
const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/RazaisHere'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ali-raza-9970412bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },

    {
      label: 'Instagram',
      href: 'https://www.instagram.com/alinotraza/'
    }
  ];
function Footer() {
  return (
    <section className='section'>
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>

                    <ButtonPrimary href={"mailto:info213243@gmail.com"}
                    label='Start project'
                    icon={"chevron_right"}
                    />
                </div>

                <div className='grid grid-cols-2 gap-4  lg:pl-20'>
                    <div>
                        <p className='mb-2'> 
                            Sitemap
                        </p>
                        <ul>
                            {sitemap.map(({label,href},index)=>(
                                <li key={index}>
                                    <a href={href}
                                    className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className=''> 
                            Socials
                        </p>
                        <ul>
                            {socials.map(({label,href},index)=>(
                                <li key={index}>
                                    <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8 ">
                <a href="" className=""
                
                >
                    <img src={Logo} alt="" width={40} height={40} />
                </a>
                <p className='text-zinc-500 text-sm'>
                    &copy; 2024 <span className='text-zinc-200'>Ali Raza</span>
                </p>
            </div>

        </div>
    </section>
  )
}

export default Footer