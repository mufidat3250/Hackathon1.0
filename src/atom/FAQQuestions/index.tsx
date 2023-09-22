import React from 'react'
import { useState } from 'react'
import './FAQuestion.scss'

const SingleFAQ = ({question, answer}:{question?:string, answer?:string} ) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='question'>
       <div className='question-wrapper' onClick={()=> setOpen(!open)}>
       <p className='q'>{question}</p> <p className='plus'>+</p>
        </div>  
        {open && <div className='answer'>{answer}</div>}
    </div>
  )
}

export default SingleFAQ