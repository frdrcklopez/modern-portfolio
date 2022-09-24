import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {};

const ContactMe = ({} : Props) => {
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
            className='flex flex-col relative min-h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl -mr-[40px]'>
                Contact
            </h3>
            
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got what you need. <span className='decoration-amber-500 underline'>Lets talk.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className="text-amber-500 h-7 w-7 animate-pulse"/>
                        <p className='text-2xl'>+123 456 789</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className="text-amber-500 h-7 w-7 animate-pulse"/>
                        <p className='text-2xl'>fredericklopez@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className="text-amber-500 h-7 w-7 animate-pulse"/>
                        <p className='text-2xl'>Niagara Falls, Ontario, Canada</p>
                    </div>
                </div>


                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input type="text" className='contactInput'/>
                        <input type="text" className='contactInput'/>
                    </div>

                    <input className='contactInput' type="text"/>
                    <textarea className="contactInput" />
                    <button className="bg-amber-500 py-5 px-10 rounded-md text-black font-bold">Submit</button>
                </form>
            </div>

        </motion.div>
    );
}
 
export default ContactMe;
