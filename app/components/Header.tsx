import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='p-4 fixed w-full left-0 top-0 min-h-[100px] bg-[#F1F1F1]  flex flex-col justify-between '>
            <div className='flex justify-between items-center '>
                <div className='space-y-2 '>
                    <h1 className='text-3xl text-black font-medium'>Today&apos;s Task</h1>
                    <p className='text-[#757575] font-medium'>Monday, 4 Dec</p>
                </div>
                <div className='bg-[#1FB981] py-2 px-2 rounded-lg flex space-x-4' >
                    <button className=' text-xl '>Add Task</button>
                    <i className='bi bi-plus-lg text-lg text-white'></i>
                </div>

            </div>

        </div>
    )
}

export default Header