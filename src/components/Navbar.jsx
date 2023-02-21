import React from 'react'
import GradientButton from './GradientButton'

export default function Navbar() {
    return (
        <div className='bg-customWhite relative z-40'>
            <div className='container flex items-center justify-between px-12 h-20'>
                <a href='/#'>
                    <img alt='logo' src={require("../images/logo.svg").default} />
                </a>
                <i className="md:hidden material-icons cursor-pointer">menu</i>
                <div className='hidden md:flex items-center gap-x-6 text-grayish '>
                    <a href='/#' className='hover:border-b-4 border-limeGreen h-20 flex items-center' >Home</a>
                    <a href='/#' className='hover:border-b-4 border-limeGreen h-20 flex items-center' >About</a>
                    <a href='/#' className='hover:border-b-4 border-limeGreen h-20 flex items-center' >Contact</a>
                    <a href='/#' className='hover:border-b-4 border-limeGreen h-20 flex items-center' >Blog</a>
                    <a href='/#' className='hover:border-b-4 border-limeGreen h-20 flex items-center' >Careers</a>
                </div>
                <div className='hidden md:block'>
                <GradientButton  />
                </div>
            </div>
        </div>
    )
}
