import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import './Navbar.scss'

const NavBar = () => {
    let tabs = ['Timeline', 'Overview', 'FAQs', 'Contact']
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbarWrapper' > 
    <div className='logo-wrapper'>
        <img src="/images/getlinked (1).png" alt="" />
    </div>
    <div className='btn-tab-wrapper'>
    <div className='tabs'>
            {tabs.map((tab)=> <div className='tab'>{tab}</div>)}
    </div>   
      <div className='btn'>
      <Button title={'Register'}/>
      </div>
      <div className='menu' onClick={()=>setShowMenu(true)}>
        <img src="/images/menu.svg" alt="" />
      </div>
        {showMenu  &&  <div className='tabs-mobile-wrapper'>
        <img src="/images/Group 2 (1).svg" alt="" className='closeIcon' onClick={()=> setShowMenu(false)} />
        <div className='tabs-wrapper'>
        {tabs.map((tab)=> <div className='tab'>{tab}</div>)}
        </div>
      <div className='btn-mobile'>
        <Button title={'Register'}/>
      </div>
    </div>}
    </div>
    </div>
  )
}

export default NavBar