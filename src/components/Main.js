import React from 'react'
import '../App.css'
import pho from './unsplash_xvPPaYBJEZs.png'


const Main = () => {
  return (
    <div className='hero'>
    <div className='container'>
            <div className='hero_image'>
            <img src={pho} alt='abc'/>
            </div>
            <div className='hero_content'>
            <h1>
                <span className='hi_text'>Hi</span> , I am 
                <span className='name_text'> Vivek Kumar </span>
            </h1>
            <h2>Front End Developer</h2>
            </div>
        </div>
        </div>
        
    
  )
}

export default Main