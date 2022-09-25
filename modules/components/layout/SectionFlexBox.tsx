import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    title : string,
    children: JSX.Element | JSX.Element[]
};

const SectionFlexBox = ({ title, children } : Props) => {
    return (
        <div className='border flex flex-col relative h-screen'>
            <div className='border'>
                <h3 className='py-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl -mr-[40px]'>
                    {title}
                </h3>
            </div>
            <div className='border flex-flex-1'>
                {children}
            </div>
        </div>
    );
}
 
export default SectionFlexBox;