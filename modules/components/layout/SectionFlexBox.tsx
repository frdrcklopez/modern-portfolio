import React from 'react'

type Props = {
    title : string,
    children: JSX.Element | JSX.Element[]
};

const SectionFlexBox = ({ title, children } : Props) => {
    return (
        <div className='flex flex-col relative h-screen overflow-hidden'>
            <div className='pb-5 pt-14 sm:pt-24'>
                <h3 className='text-center uppercase tracking-[20px] text-gray-500 text-2xl -mr-[40px]'>
                    {title}
                </h3>
            </div>
            <div className='flex flex-1'>
                {children}
            </div>
        </div>
    );
}
 
export default SectionFlexBox;