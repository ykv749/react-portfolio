import React, { useState } from 'react'
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.png';
import leetcode from '../assets/leetcode.png';
import github from '../assets/github.png';
import hamburger from '../assets/hamburger.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isHamburger, setHamburgerActive] = useState(false);

    return (
        <>
            <nav className='navbar relative flex justify-between flex-wrap p-1 mobile:hidden'>
                <img src={logo} alt='logo' className='w-[50px] h-[50px]' />
                <div className='desktopMenu flex justify-center items-center gap-5 text-white'>
                    <Link className='desktopMenuItem'>Home</Link>
                    <Link className='desktopMenuItem'>About</Link>
                    <Link className='desktopMenuItem'>Resume</Link>
                    <Link className='desktopMenuItem'>Achievements</Link>
                </div>
                <div className='profiles flex justify-center gap-1'>
                    <a href='https://www.linkedin.com/in/ykv749/' rel='noreferrer' target="_blank"><img src={linkedin} className='w-[50px]' alt='linkedin' /></a>
                    <a href='https://leetcode.com/ykv749/' rel='noreferrer' target="_blank"><img src={leetcode} className='w-[50px]' alt='leetcode' /></a>
                    <a href='https://github.com/ykv749/' rel='noreferrer' target="_blank"><img src={github} className='w-[50px]' alt='github' /></a>
                </div>
            </nav>

            <nav className='navbar relative flex flex-col justify-between flex-wrap z-[99] p-1 desktop:hidden'>
                <button className='w-[fit-content]' onClick={()=>setHamburgerActive(!isHamburger)}><img className='max-w-[3rem]' src={hamburger} alt='hamburger' /></button>
                <div id='hamburger' className={`hamburger desktop:hidden flex flex-col gap-3 mt-8 top-0 w-[100%%] h-[auto] ${isHamburger?'':'hidden'}`}>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Resume</Link>
                    <Link>Achievements</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
