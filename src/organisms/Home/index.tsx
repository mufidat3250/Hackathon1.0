import React from 'react'
import Button from '../../atom/Button'
import './Home.scss'

const Home = () => {
  return (
    <div className='Home'>  
    <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className='purple-Len'  />
    <img src="/public/images/star.svg" alt="" className='star white-star'/>
    <img src="/public/images/star-gray.svg" className='star star-gray' alt="" />
      <div className='ignite-wrapper'>
      <h1 className='ignite'>
    Igniting a Revolution in HR Innovation
    </h1>
    <img src="/images/ignite.svg" alt=""  className='ignite-img'/>
      </div>
      <div className='getlink-wrapper'>
        <div className='getlink-content'>
          <div className='getlink'>
         <div className='getlinked-tech'>
         <h1 className=''>getlinked Tech</h1>
         <img src="/images/Creative 1.svg" alt=""  className='creative'/>
         </div>
        <div>
        <div className='flex'>
        <h1 className=''>
          Hackathon <span className='getlink-linear-gradient'>1.0</span>
          </h1>
          <img src="/images/chain-9365116-7621444.svg" alt=""  className='w-[80px]'/>
          <img src="/images/1f4a5.svg" alt=""  className='w-[80px]'/>
        </div>
        </div>
          </div>
          <p className='participate'>Participate in getlinked tech Hackathon 2023 stand 
a chance to win a Big prize</p>

<div className='w-[10.75rem] mt-[2.5rem]'>
        <Button title={'Register'} />
        </div>
        <div className='timmer'>
        <h1>00<sub>H</sub></h1>  
        <h1>00<sub>M</sub></h1>
        <h1>00<sub>S</sub></h1>
        </div>
        </div>
        
        <div className='home-img'>
        <img src="/images/oculus.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home