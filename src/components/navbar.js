import React from 'react'
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.png';
import leetcode from '../assets/leetcode.png';
import github from '../assets/github.png';
import hamburger from '../assets/hamburger.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className='navbar sticky flex justify-between flex-wrap p-1 mobile:hidden'>
                <img src={logo} alt='logo' className='w-[50px] h-[50px]' />
                <div className='desktopMenu flex justify-center items-center gap-5 text-white'>
                    <Link className='desktopMenuItem'>Home</Link>
                    <Link className='desktopMenuItem'>About</Link>
                    <Link className='desktopMenuItem'>Resume</Link>
                    <Link className='desktopMenuItem'>Achievements</Link>
                </div>
                <div className='profiles flex justify-center gap-1'>
                    <a href='https://www.linkedin.com/in/ykv749/' rel='noreferrer' target="_blank"><img src={linkedin} className='w-[50px]' alt='linkedin'/></a>
                    <a href='https://leetcode.com/ykv749/' rel='noreferrer' target="_blank"><img src={leetcode} className='w-[50px]' alt='leetcode'/></a>
                    <a href='https://github.com/ykv749/' rel='noreferrer' target="_blank"><img src={github} className='w-[50px]' alt='github'/></a>
                </div>
            </nav>

            <nav className='navbar flex items-center justify-between flex-wrap p-1 desktop:hidden'>
                <button><img className='max-w-[3rem]' src={hamburger} alt='hamburger' /></button>
            </nav>
        </>
    )
}

export default Navbar;
