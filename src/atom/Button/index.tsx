import React from 'react'
import './Button.scss'

const Button = ({title}) => {
  return (
    <button className='buttonWrapper'>
        {title}
    </button>
  )
}

export default Button