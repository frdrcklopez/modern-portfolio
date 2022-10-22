import React from 'react'
import { motion } from 'framer-motion'
import SectionFlexBox from '../components/layout/SectionFlexBox'
import { Project } from '../../typing'

type Props = {
    projects : Project[]
};

const Projects= ({ projects } : Props) => {
    const prod = [1, 2, 3, 4, 5]

    return (
        <SectionFlexBox title="Projects">
            <motion.div className='section-container'>
                <div className='relative h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-amber-500 scrollbar-thin'>
                    {prod.map((project, i) => (
                        <div key={i} className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center w-full'>
                            <motion.img 
                                initial={{
                                    y : -300,
                                    opacity : 0
                                }}
                                transition={{
                                    duration : 1.2
                                }}
                                whileInView={{
                                    opacity : 1,
                                    y : 0
                                }}
                                viewport={{
                                    once : true
                                }}
                                src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" 
                                className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer'
                           />

                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className='text-xl sm:text-2xl 2xl:text-4xl font-semibold text-center'> 
                                    <span className='underline decoration-amber-500'>Case Study { i + 1} of {prod.length}:</span> Ups clone
                                </h4>

                                <p className='text-base lg:text-lg text-center md:text-left px-5'>
                                    Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full absolute top-[30% bg-amber-500/10 left-0 h-[500px] -skew-y-12'/>
            </motion.div>
        </SectionFlexBox>
    );
}
 
export default Projects; 