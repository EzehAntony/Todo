import React from 'react'
import { Todo } from '../types/todos'

interface TaskProps {
    todo: Todo;
}


const Task: React.FC<TaskProps> = ({ todo }) => {
    return (
        <div className='bg-white w-full min-h-[150px] p-4 rounded-lg flex justify-between relative'>
            <div className='space-y-2'>
                <h1 className={` ${todo.completed ? "line-through" : ""} font-medium text-xl`}>{todo.task}</h1>
                <p className='text-sm text-[#757575]'>       <i className='bi bi-clock text-[#1FB981] pr-2'></i> 10:00 AM - 10:30 AM </p>
                <div className='flex space-x-2  absolute bottom-2 left-2'>
                    <i className='bi bi-trash text-[red] text-2xl'></i>
                </div>
            </div>

            <div className={` ${todo.completed ? "bg-[#1FB981]  " : ""} w-6 h-6 rounded-full self-center flex justify-center items-center text-white text-xl`}>
                {todo.completed ? <i className='bi bi-check text-2xl text-white '></i> : <></>}
            </div>


        </div>
    )
}

export default Task