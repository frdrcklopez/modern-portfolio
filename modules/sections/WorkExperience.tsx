import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'
import ExperienceCard from '../components/ExperienceCard'
import { Experience } from '../../typing'

type Props = {
    experiences : Experience[]
};

const WorkExperience = ({ experiences } : Props) => {
    return (
        <SectionFlexBox title="Experience">
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
                className='section-container'
            >
                <div className='h-full w-full flex space-x-2 sm:space-x-5 overflow-x-scroll px-5 sm:px-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-amber-500 scrollbar-thin'>
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
        </SectionFlexBox>
    );
}
 
export default WorkExperience;
