import React, { act } from 'react'
import Question from './question'

const Questions = ({question,activeId,toggleQuestion}) => {
    
  return (
    <section className='container'>
        <h1>Questions</h1>
    {question.map((q)=>{
        return <Question key = {q.id} {...q} toggleQuestion={toggleQuestion} activeId={activeId}/>
    })}
    </section>
  )
}

export default Questions
