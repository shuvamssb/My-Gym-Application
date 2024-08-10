import React from 'react'
import SectionWrapper from './SectionWrapper'
import Exercise from './Exercise'

export default function Workout(props) {
    const {workout} = props
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title=
    {['The', 'Danger', 'zone']}>
    <div className='flex flex-col gap-4'>
        {workout.map((exercise,i) =>{
        return(
            <Exercise i={i} exercise={exercise} key={i}/>
         )
        })}
        </div>    
    </SectionWrapper>
  )
}
