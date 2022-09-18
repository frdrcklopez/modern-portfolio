import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
    );
}
 
export default Hero;
