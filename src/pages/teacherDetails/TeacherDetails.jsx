import React from 'react';
import bellIcon from '../../assets/icons/bell-2.svg'
import gearIcon from '../../assets/icons/gear-2.svg'
import userIcon from '../../assets/icons/User.svg'
import locationIcon from '../../assets/icons/Location-white.svg'
import emailIcon from '../../assets/icons/Email-white.svg'
import callIcon from '../../assets/icons/Call-white.svg'
import teacherCover from '../../assets/images/teacher-cover.png'

const TeacherDetails = () => {
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
                    <img className='w-full' src={teacherCover} alt="" />
                    <div className='w-[192px] h-[192px] mb-6 border-white border-4 rounded-full bg-gray2 flex justify-center items-center absolute top-8 left-8'>
                        <img className='w-12' src={userIcon} alt="" />
                    </div>
                    <div className='py-24 px-8 bg-white rounded-b-[20px]'>
                        <h2 className='text-text font-bold text-xl mb-2'>Teacher Name</h2>
                        <p className='text-gray3 font-bold text-sm mb-10'>Subject Teacher</p>
                        <div className='flex items-center gap-11'>
                            <div className='flex gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={locationIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>Jakarta, Indonesia</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={callIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>+12 345 6789 0</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img className='p-2 rounded-full bg-orange' src={emailIcon} alt="" />
                                <p className='text-text font-semibold text-sm'>Historia@mail.com</p>
                            </div>
                        </div>
                        <div className='text-text pt-10 pb-7'>
                            <h3 className='font-bold text-lg'>About:</h3>
                            <p className='text-sm w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className='text-text pt-2'>
                            <h3 className='font-bold text-lg'>Education:</h3>
                            <ul className='p-6 space-y-2'>
                                <li className='list-disc'>
                                    <p className='text-text font-bold text-sm'>History Major, University Akademi Historia</p>
                                    <small className='text-gray3 text-xs'>2013-2017</small>
                                </li>
                                <li className='list-disc'>
                                    <p className='text-text font-bold text-sm'>Master of History, University Akademi Historia</p>
                                    <small className='text-gray3 text-xs'>2017-2020</small>
                                </li>
                            </ul>
                        </div>
                        <div className='text-text pt-2'>
                            <h3 className='font-bold text-lg'>Expertise:</h3>
                            <p className='text-sm w-2/3'>World History, Philosophy, Prehistoric, Culture, Ancient</p>
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

export default TeacherDetails;