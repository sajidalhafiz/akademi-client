import React from 'react';
import dotIcon from '../assets/icons/Dots-2.svg'
import callIcon from '../assets/icons/Call-white.svg'
import emailIcon from '../assets/icons/Email-white.svg'
import userIcon from '../assets/icons/User.svg'
import { Link } from 'react-router-dom';

const TeachersCard = ({ teacher }) => {
    const { name, subject, phone, email } = teacher;

    // console.log(teacher)
    return (
        <div className='bg-white rounded-[20px] hover:shadow-md p-8 relative flex flex-col justify-center items-center'>
            <Link to='/teacherDetails'><img className='w-4 absolute top-4 right-5' src={dotIcon} alt="" /></Link>
            <div className='w-[120px] h-[120px] mb-6 rounded-full bg-gray2 flex justify-center items-center'>
                <img className='w-12' src={userIcon} alt="" />
            </div>
            <h2 className='text-lg font-bold text-text mb-2 text-center'>{name}</h2>
            <small className='text-xs text-gray3 text-center'>{subject}</small>
            <div className='flex gap-4 mt-8'>
                <div className='relative p-2 rounded-full bg-purple flex justify-center items-center hover:shadow-md'>
                    <img className='w-6' src={callIcon} alt="" />
                    <p className='hidden'>{phone}</p>
                </div>
                <div className='relative p-2 rounded-full bg-purple flex justify-center items-center hover:shadow-md'>
                    <img className='w-6' src={emailIcon} alt="" />
                    <p className='hidden'>mailto:{email}</p>
                </div>
            </div>
        </div>
    );
};

export default TeachersCard;