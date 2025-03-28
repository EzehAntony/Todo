"use client"
import React from 'react'
import Task from './Task'
import { todos as data } from '../data/todo'
import Pagnition from './Pagnition'


const Tasks: React.FC = () => {
    /* const [filter, setFilter] = React.useState('all') */
    return (
        <div>
            <Pagnition />
            <div className='bg-[#F1F1F1] mt-[180px] rounded-lg text-black min-h-[50px] w-full flex flex-col justify-center items-center space-y-4 p-4'>
                {data
                    ? data.sort((a, b) => Number(a.completed) - Number(b.completed)).map((todo, i) => <Task key={i} todo={todo} />)
                    : <p>No task available</p>}
            </div>
        </div>
    )
}

export default Tasks