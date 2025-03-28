import React from 'react';
import Header from '../components/Header';
import Tasks from '../components/Tasks';

const Page: React.FC = () => {
    return (
        <div className='bg-[#F1F1F1] relative min-h-screen top-0'>
            <Header />
            <Tasks />
        </div>
    );
};

export default Page;