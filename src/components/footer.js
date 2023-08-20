import React from 'react';
import linkedin from '../assets/linkedin.png';
import leetcode from '../assets/leetcode.png';
import github from '../assets/github.png';

const Footer = () => {
  return (
    <div className='flex items-center mobile:flex-col-reverse mobile:justify-center justify-between desktop:mt-[10rem] mobile:mt-[2rem]'>
      <p className='mobile:text-[14px]'>Made with ❤️ by Yash Kumar Verma (ykv749)</p>
      <ul className='flex gap-1'>
        <li><a href='https://www.linkedin.com/in/ykv749/' rel='noreferrer' target="_blank"><img src={linkedin} className='w-[50px]' alt='linkedin'/></a></li>
        <li><a href='https://leetcode.com/ykv749/' rel='noreferrer' target="_blank"><img src={leetcode} className='w-[50px]' alt='leetcode'/></a></li>
        <li><a href='https://github.com/ykv749/' rel='noreferrer' target="_blank"><img src={github} className='w-[50px]' alt='github'/></a></li>
      </ul>
    </div>
  )
}

export default Footer;
