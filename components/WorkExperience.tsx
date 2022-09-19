import React from 'react'
import { motion } from 'framer-motion'

type Props = {};

const WorkExperience = ({} : Props) => {
    return (
        <div className='flex flex-col relative h-screen overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center border'>
            <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl -mr-[40px]'>Experience</h3>
            <div></div>
        </div>
    );
}
 
export default WorkExperience;