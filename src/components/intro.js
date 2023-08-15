import React from 'react';
import image from '../assets/Image.png'

const Intro = () => {
  return (
    <section id='intro' className='relative flex items-center justify-between h-[100dvh] gap-5'>
        <div className='introContent z-10'>
            <span className='text-[25px]'>Hello,</span><br/>
            <span className='text-[3.5rem] font-semibold'>I'm <span className='text-[red]'> Yash</span><br/>Frontend Developer</span>
            <p className="text-[14px] max-w-[50%]">Experienced frontend developer with a keen interest in problem-solving and a solid foundation in Data Structures and Algorithms (DSA). Skilled in developing responsive and intuitive user interfaces using HTML, CSS, JavaScript, and ReactJS. Passionate about building applications that leave a positive impact on users' lives. Always eager to learn and explore new technologies.</p>
            {/* <button><img src={} /></button> */}
        </div>
        <div className='absolute right-0 z-[-1]'>
            <img className='h-[65rem]' src={image} alt='myPhoto' />    
        </div>
    </section>
  )
}

export default Intro
