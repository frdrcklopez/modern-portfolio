import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import SectionFlexBox from '../components/layout/SectionFlexBox'

type Inputs = {
    name : string,
    email : string,
    subject : string,
    message : string,
}

type Props = {};

const ContactMe = ({} : Props) => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm<Inputs>();

    const onSubmit : SubmitHandler<Inputs> = (formData) => {
        // console.log(formData)
    }

    return (
        <SectionFlexBox title="contact">
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
                className='h-full w-full'
            >
                <div className='flex flex-col py-10'>
                    <h4 className='text-4xl font-semibold text-center mb-10'>
                        I have got what you need. <span className='decoration-amber-500 underline'>Lets talk.</span>
                    </h4>

                    <div className='space-y-5'>
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


                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto py-10'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} type="text" className='contactInput'/>
                            <input {...register('email')} type="text" className='contactInput'/>
                        </div>

                        <input {...register('subject')} className='contactInput' type="text"/>
                        <textarea {...register('message')} className="contactInput" />
                        <button className="bg-amber-500 py-5 px-10 rounded-md text-black font-bold">Submit</button>
                    </form>
                </div>
            </motion.div>
        </SectionFlexBox>
    );
}
 
export default ContactMe;
