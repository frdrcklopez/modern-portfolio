import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'

type Props = {};

const About = ({} : Props) => {
    return (
        <SectionFlexBox title="About">
            <div className='border border-sky-500 flex flex-col md:flex-row items-center justify-between h-full w-full'>
                <div className='p-5 border w-full md:w-1/2 md:h-full flex items-center justify-center'>
                    <motion.img 
                        className='h-44 w-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-auto lg:h-full'
                        src="https://avatars.githubusercontent.com/u/24982705?v=4"
                    />
                </div>
                <div className='p-5 border w-full'>
                    <h4 className='text-4xl font-semibold border'>
                        Here is a <span className='underline decoration-orange-500/80'>little</span> background
                    </h4>

                    <p className='text-base'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </p>
                </div>
            </div>
        </SectionFlexBox>
    );
}
 
export default About;