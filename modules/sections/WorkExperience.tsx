import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'

type Props = {};

const WorkExperience = ({} : Props) => {
    return (
        <motion.div 
            initial={{
                opacity : 0
            }}
            whileInView={{
                opacity : 1
            }}
            transition={{
                duration : 1.5
            }}
            className='flex flex-col relative h-screen overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl -mr-[40px]'>Experience</h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                {/* ExperienceCard */}
                <ExperienceCard/>
                {/* ExperienceCard */}
                <ExperienceCard/>
                {/* ExperienceCard */}
                <ExperienceCard/>
                {/* ExperienceCard */}
                <ExperienceCard/>
            </div>
        </motion.div>
    );
}
 
export default WorkExperience;