import React from 'react'
import './introduction.scss'

const Introduction = () => {
  return (
    <div className='introduction-wrapper'>
      <div className='big-idea-img'>
        <img src="/images/sata gra.svg" alt="" className='star star-sata' />
        <img src="/images/the big idea 1.png" alt=""  className=''/>
        <img src="/images/arrow.png" alt="" className='arrow' />
      </div>
      <div className='intro-content'>
        <h1>
        Introduction to getlinked <br/>
      <span className='tech
      '>tech Hackathon 1.0</span>
        </h1>
        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
       clear as day: to shape the future. Whether you're a coding genius, a 
       design maverick, or a concept wizard, you'll have the chance to transform 
       your ideas into reality. Solving real-world problems, pushing the boundaries
       of technology, and creating solutions that can change the world,
       that's what we're all about!</p>
<img src="/images/star pu.svg" alt=""  className='star star-pu'/>
      </div>
    </div>
  )
}

export default Introduction