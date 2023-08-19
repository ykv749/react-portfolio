import React from 'react'
import html5 from '../assets/html5.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import dsa from '../assets/dsa.jpg';
import react from '../assets/react.png';

const Skills = () => {
  return (
    <div className='mobile:mt-1'>
      <p className='text-3xl'>My Skills</p>
      <div className='flex flex-wrap gap-2 items-center'>
        <img src={html5} className='w-[8rem] h-[8rem] mobile:w-[4rem] mobile:h-[4rem]' alt='html5' />
        <img src={css3} className='w-[8rem] h-[8rem] mobile:w-[4rem] mobile:h-[4rem]' alt='css3' />
        <img src={javascript} className='w-[8rem] h-[8rem] mobile:w-[4rem] mobile:h-[4rem]' alt='javascript' />
        <img src={dsa} className='w-[7rem] h-[7rem] mobile:w-[3.5rem] mobile:h-[3.5rem]' alt='dsa' />
        <img src={react} className='w-[8rem] h-[8rem] mobile:w-[4rem] mobile:h-[4rem]' alt='react' />
      </div>
    </div>
  )
}

export default Skills;
