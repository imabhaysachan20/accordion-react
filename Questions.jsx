import React from 'react'
import Question from './question'

const Questions = ({question}) => {
    
  return (
    <section className='container'>
        <h1>Questions</h1>
    {question.map((q)=>{
        return <Question key = {q.id} {...q}/>
    })}
    </section>
  )
}

export default Questions
