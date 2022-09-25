import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'
import ExperienceCard from '../components/ExperienceCard'

type Props = {};

const WorkExperience = ({} : Props) => {
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
                className='w-full h-full'
            >
                <div className='h-full w-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory'>
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
