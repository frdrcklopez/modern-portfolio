import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'
import { PageInfo } from '../../typing'

type Props = {
    pageinfo : PageInfo
};

const About = ({ pageinfo } : Props) => {
    return (
        <SectionFlexBox title="About">
            <div className='section-container max-w-7xl'>
                <div className='p-5 w-full md:w-1/2 2xl:w-full md:h-full flex items-center justify-center'>
                    <motion.img 
                        initial={{
                            x: -200,
                        }}
                        whileInView={{
                            opacity : 1,
                            x: 0
                        }}
                        viewport={{ 
                            once : true 
                        }}
                        className='h-32 w-32 sm:h-44 sm:w-44 rounded-full object-cover md:rounded-lg md:w-64 lg:w-full md:h-auto aspect-[3/3.5]'
                        src="https://avatars.githubusercontent.com/u/24982705?v=4"
                    />
                </div>
                <div className='p-5 w-full flex flex-col justify-center items-center sm:items-start space-y-5 md:space-y-10'>
                    <h4 className='text-2xl sm:text-4xl font-semibold'>
                        Here is a <span className='underline decoration-amber-500'>little</span> background
                    </h4>
                    <p className='text-sm sm:text-base lg:text-lg'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </p>
                </div>
            </div>
        </SectionFlexBox>
    );
}
 
export default About;