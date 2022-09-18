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
        <div>
            <BackgroundCircle/>
            <div>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>
            </div>
        </div>
    );
}
 
export default Hero;
