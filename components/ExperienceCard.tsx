import React from 'react'
import { motion } from 'framer-motion'

type Props = {};

const ExperienceCard = ({} : Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-neutral-700 p-10 opacity-50 hover:opacity-100 cursor-pointer'>
            <motion.img 
                initial={{
                    y:-100,
                    opacity:0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                viewport={{
                    once: true
                }}
                className='w-28 h-28 rounded-full object-cover object-center'
                src="https://avatars.githubusercontent.com/u/24982705?v=4"
            />
            <div>
                <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
                <p className='font-bold text-2xl mt-1'>PAPAFARM</p>
                <div className='flex space-x-2 my-2'>
                        <img 
                            className='h-10 w-10 rounded-full'
                            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
                        />
                        <img 
                            className='h-10 w-10 rounded-full'
                            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
                        />
                        <img 
                            className='h-10 w-10 rounded-full'
                            src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png"
                        />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

                <ul className='list-disc space-y-4 ml-5 text-base'>
                    <li>Sumary points Sumary points Sumary points Sumary points</li>
                    <li>Sumary points Sumary points Sumary points Sumary points</li>
                    <li>Sumary points Sumary points Sumary points Sumary points</li>
                    <li>Sumary points Sumary points Sumary points Sumary points</li>
                    <li>Sumary points Sumary points Sumary points Sumary points</li>
                </ul>
            </div>
        </article>
    );
}
 
export default ExperienceCard; 