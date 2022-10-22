import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../components/BackgroundCircles'
import { urlFor } from '../../sanity'
import { PageInfo } from '../../typing'

type Props = {
    pageinfo : PageInfo
};

const Hero = ({ pageinfo } : Props) => {
    const [text, count] = useTypewriter({
        words : [
            `Hi, I'm ${pageinfo.name}`, 
            "i-turn-coffee-into-codes.tsx", 
            "<BuildSomethingMore/>"
        ],
        loop : true,
        delaySpeed : 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle/>
            <img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageinfo?.heroImage).url()}
            />
            <div className='z-20'>
                <h2 className='text-sm uppecase text-gray-500 pb-2 tracking[-15px]'>{pageinfo.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>

                <div className='pt-5'>
                    <a href="#about">
                        <button className='heroButton'>About</button>
                    </a>
                    <a href="#experience">
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href="#skills">
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href="#projects">
                        <button className='heroButton'>Projects</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;
