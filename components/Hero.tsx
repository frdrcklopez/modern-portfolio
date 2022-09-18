import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCircle from './BackgroundCircles'

type Props = {};

const Hero = ({} : Props) => {
    const [text, count] = useTypewriter({
        words : [
            "Hi, my Name's Frederick Lopez", 
            "guy-who-loves-Coffee.tsx", 
            "<ButLovestoCodeMore/>"
        ],
        loop : true,
        delaySpeed : 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle/>
            <img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://avatars.githubusercontent.com/u/24982705?v=4"
            />
            <div>
                <h2>Software Engineer</h2>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>
            </div>
        </div>
    );
}
 
export default Hero;
