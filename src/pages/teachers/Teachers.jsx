import React from 'react';
import bellIcon from '../../assets/icons/bell-2.svg'
import gearIcon from '../../assets/icons/gear-2.svg'
import userIcon from '../../assets/icons/User.svg'
import addIcon from '../../assets/icons/add.svg'
import dropdownIcon from '../../assets/icons/dropdown.svg'
import SearchBox from '../../components/SearchBox';

const Teachers = () => {
    return (
        <div className='p-12 space-y-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-purple font-bold text-xl'>Teachers</h1>
                <div className='flex gap-6'>
                    <div className='w-16 h-16 rounded-full bg-white relative flex justify-center items-center'>
                        <img className='w-8 ' src={bellIcon} alt="" />
                        <div className='w-2 h-2 bg-purple rounded-full absolute top-3 right-3'></div>
                    </div>
                    <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center'>
                        <img className='w-8 ' src={gearIcon} alt="" />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-end'>
                            <h6 className='text-purple font-bold text-xs'>Sajid A.</h6>
                            <small className='text-gray3'>Status</small>
                        </div>
                        <div className='w-16 h-16 rounded-full bg-gray2 flex justify-center items-center'>
                            <img className='w-8 ' src={userIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <SearchBox></SearchBox>
                <div className='flex gap-4'>
                    <button className='px-8 py-4 rounded-full bg-background border-2 border-purple flex gap-4 items-center'>
                        <p className='text-purple text-sm'>Newest</p>
                        <img className='w-6' src={dropdownIcon} alt="" />
                    </button>
                    <button className='px-8 py-4 rounded-full bg-purple flex gap-4 items-center'>
                        <img className='w-4' src={addIcon} alt="" />
                        <p className='text-white text-sm'>New Student</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Teachers;