import React from 'react'
import { todos as data } from '../data/todo';

const Pagnition: React.FC = () => {

    return (
        <div className='text-[#757575] mt-[100px] px-4 fixed left-0 top-0 flex items-center bg-[#F1F1F1] w-full h-[80px] '>
            <ul className='flex  space-x-4 text-sm font-medium items-center'>
                <li>
                    <div className='flex items-center space-x-2 '>
                        <h2>All</h2>
                        <span className='bg-[#1FB981] text-white py-1 px-3 rounded-lg'>{data.length}</span>
                    </div>
                </li>
                <li>
                    <div className='flex items-center space-x-2 '>
                        <h2>Open</h2>
                        <span className='bg-[#1FB981] text-white py-1 px-3 rounded-lg'>{0}</span>
                    </div>
                </li>
                <li>
                    <div className='flex items-center space-x-2 '>
                        <h2>Closed</h2>
                        <span className='bg-[#1FB981] text-white py-1 px-3 rounded-lg'>{0}</span>
                    </div>
                </li>

            </ul>
        </div>


    );
};

export default Pagnition