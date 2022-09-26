import React from 'react'
import { motion } from 'framer-motion'

type Props = {};

const ExperienceCard = ({} : Props) => {
    return (
        <article className='items-center flex-shrink-0 w-full sm:w-[500px] 2xl:w-[600px] snap-center flex justify-center'>
            <div className='w-full items-center flex flex-col rounded-lg bg-neutral-700 opacity-50 hover:opacity-100 cursor-pointer py-5 sm:py-8 px-5'>
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
                <div className='py-5'>
                    <h4 className='text-2xl 2xl:text-4xl font-light'>Full Stack Developer</h4>
                    <p className='font-bold text-xl 2xl:text-2xl mt-1'>Your Company</p>
                    <div className='flex space-x-1 my-1'>
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
                    <p className='uppercase py-2 text-gray-300'>Started work... - Ended...</p>
                    <ul className='list-disc space-y-1 sm:space-y-2 ml-5 text-sm sm:text-base'>
                        <li>Sumary points Sumary points Sumary points Sumary points</li>
                        <li>Sumary points Sumary points Sumary points Sumary points</li>
                        <li>Sumary points Sumary points Sumary points Sumary points</li>
                        <li>Sumary points Sumary points Sumary points Sumary points</li>
                        <li>Sumary points Sumary points Sumary points Sumary points</li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
 
export default ExperienceCard; 