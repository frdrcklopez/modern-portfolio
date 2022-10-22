import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'
import Skill from '../components/Skill'
import { Skill as Skills } from '../../typing'

type Props = {
    skills : Skills[]
};

const Skills = ({ skills } : Props) => {
    return (
        <SectionFlexBox title="Skills">
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
                className='w-full h-full flex items-center justify-center'
            >
                <div className='grid grid-cols-4 gap-5'>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </motion.div>
        </SectionFlexBox>
    );
}
 
export default Skills;
