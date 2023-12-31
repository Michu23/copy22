import React from 'react'
import { ReactComponent as MySvgg } from '../assets/FlairMain.svg';


const Flair = () => {
  return (
    <div className='display__desktop' style={{ width: '80rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className='flair' width="1918" height="1520" viewBox="0 0 1918 1520" fill="none" style={{
  height: '1728px',
  top: '-250',
  right: '0px',
  fill: 'var(--linear, linear-gradient(199deg, #203567 0%, rgba(10, 25, 61, 0.00) 100%))',
  filter: 'blur(58px)',
  position: 'absolute',
  zIndex: '-1',
  }}>
  <g filter="url(#filter0_f_1_1039)">
    <path d="M116 116H330.338H1801.25V1403.31H1563.69H145.385L116 116Z" fill="url(#paint0_linear_1_1039)"/>
  </g>
  <defs>
    <filter id="filter0_f_1_1039" x="0" y="0" width="1917.25" height="1519.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="58" result="effect1_foregroundBlur_1_1039"/>
    </filter>
    <linearGradient id="paint0_linear_1_1039" x1="1000.9" y1="554.242" x2="737.805" y2="1076.73" gradientUnits="userSpaceOnUse">
      <stop stopColor="#203567"/>
      <stop offset="1" stopColor="#0A193D" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>
    </div>
  )
}

export default Flair