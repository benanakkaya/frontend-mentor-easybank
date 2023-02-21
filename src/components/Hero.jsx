import React from 'react'
import GradientButton from './GradientButton'

export default function Hero() {
    return (
        <div className='container md:h-120 md:items-center justify-between flex-col md:flex-row md:px-12 grid md:grid-cols-3 '>
            <div className=' overflow-hidden md:hidden flex items-center  relative -top-32'>
                <img className='md:hidden overflow-hidden ' src={require("../images/image-mockups.png")} alt="mockups" />
            </div>
            <div className='flex flex-col gap-6 relative -top-32 md:top-auto p-8 md:p-2 justify-center items-center md:justify-start md:items-start'>
                <h1 className='text-darkBlue text-4xl md:text-5xl text-center md:text-start'>Next generation digital banking</h1>
                <p className='text-grayish text-base text-center md:text-start '>
                    Take your financial life online. Your Easybank account 
                    will be a one-stop-shop for spending, saving,
                    budgeting, investing, and much more.
                </p>
                <GradientButton />
            </div>
            <div className='hidden col-span-2 overflow-hidden md:flex items-center justify-end relative -top-4 -right-72'>
                <img className='hidden md:block overflow-hidden scale-75 ' src={require("../images/image-mockups.png")} alt="mockups" />
            </div>
        </div>
    )
}
