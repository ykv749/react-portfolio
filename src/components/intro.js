import React from 'react';
import image from '../assets/Image.jpg';
import Desktopimage from '../assets/DesktopImage.jpg';

const Intro = () => {
  return (
    <section id='intro' className='relative flex items-center justify-between h-[100dvh] gap-5 mobile:justify-center mobile:h-[auto]'>
        <div className='introContent z-10 mobile:absolute mobile:bottom-[30%]'>
            <span className='text-[25px] mobile:text-[20px]'>Hello,</span><br/>
            <span className='text-[3.5rem] font-semibold mobile:text-[30px]'>I'm <span className='text-[red]'> Yash</span><br/>Software Developer</span>
            <p className="text-[14px] max-w-[50%] mobile:max-w-[100%]  mobile:text-[10px]">
              Experienced backend engineer with a passion for complex problem-solving and a solid foundation in Data Structures and Algorithms (DSA). 
              Skilled in designing and implementing scalable backend systems, microservices, and clean APIs. 
              Proficient in Golang Backend Frameworks. Passionate about engineering high-performance applications that leave a positive impact on users' lives. 
              Always eager to learn and explore new technologies.
            </p>
            {/* <button><img src={} /></button> */}
        </div>
        <div className='absolute right-0 z-[-1] mobile:relative'>
            <img className='mobile:h-[fit-content] desktop:hidden' src={image} alt='myPhoto' />    
            <img className='h-[65rem] mobile:hidden' src={Desktopimage} alt='myPhoto' />    
        </div>
    </section>
  )
}

export default Intro
