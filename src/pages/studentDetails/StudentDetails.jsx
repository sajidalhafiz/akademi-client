import React from 'react';
import bellIcon from '../../assets/icons/bell-2.svg'
import gearIcon from '../../assets/icons/gear-2.svg'
import userIcon from '../../assets/icons/User-white.svg'
import locationIcon from '../../assets/icons/Location-white.svg'
import emailIcon from '../../assets/icons/Email-white.svg'
import callIcon from '../../assets/icons/Call-white.svg'
import studentCover from '../../assets/images/student-cover.png'

const StudentDetails = () => {
    return (
        <div className='p-12'>
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-text font-bold text-xl'>Teachers Details</h1>
                <div className='flex gap-6'>
                    <div className='w-16 h-16 rounded-full bg-white relative flex justify-center items-center hover:shadow-md'>
                        <img className='w-8 ' src={bellIcon} alt="" />
                        <div className='w-2 h-2 bg-purple rounded-full absolute top-3 right-3'></div>
                    </div>
                    <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center hover:shadow-md'>
                        <img className='w-8' src={gearIcon} alt="" />
                    </div>
                    <div className='w-16 h-16 rounded-full bg-gray2 flex justify-center items-center hover:shadow-md'>
                        <img className='w-8' src={userIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='relative w-2/3'>
                    <img className='w-full' src={studentCover} alt="" />
                    <div className='w-[192px] h-[192px] mb-6 border-white border-4 rounded-full bg-gray2 flex justify-center items-center absolute top-8 left-8'>
                        <img className='w-12' src={userIcon} alt="" />
                    </div>
                    <div className='py-24 px-8 bg-white rounded-b-[20px]'>
                        <h2 className='text-text font-bold text-xl mb-2'>Student Name</h2>
                        <p className='text-gray3 font-bold text-sm mb-10'>Class 8</p>
                        <div className='flex items-center justify-around'>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={userIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>Parent Name</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={locationIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>Jakarta, Indonesia</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={callIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>+12 345 6789 0</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={emailIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>Historia@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-8 rounded-3xl w-[386px]'>
                    <h2 className='text-text text-lg font-bold'>Schedule Details</h2>
                    <small className='text-gray3'>Thursday, 10th April , 2021</small>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;