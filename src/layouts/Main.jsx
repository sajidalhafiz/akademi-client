import homeIcon from '../assets/icons/home.svg';
import studentIcon from '../assets/icons/student.svg';
import teacherIcon from '../assets/icons/teacher.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import financeIcon from '../assets/icons/finance.svg';
import foodIcon from '../assets/icons/food.svg';
import userIcon from '../assets/icons/User.svg';
import chatIcon from '../assets/icons/chat.svg';
import activityIcon from '../assets/icons/Activity.svg';
import homeIcon2 from '../assets/icons/home-2.svg';
import studentIcon2 from '../assets/icons/student-2.svg';
import teacherIcon2 from '../assets/icons/teacher-2.svg';
import calendarIcon2 from '../assets/icons/calendar-2.svg';
import financeIcon2 from '../assets/icons/finance-2.svg';
import foodIcon2 from '../assets/icons/food-2.svg';
import userIcon2 from '../assets/icons/User-2.svg';
import chatIcon2 from '../assets/icons/chat-2.svg';
import activityIcon2 from '../assets/icons/Activity-2.svg';
import logo from '../assets/images/logo.png';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const navItems = (
    <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={homeIcon2} alt="" /> Dashboard
        </NavLink>
        <NavLink to='/students' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={studentIcon2} alt="" /> Students
        </NavLink>
        <NavLink to='/teachers' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={teacherIcon2} alt="" /> Teachers
        </NavLink>
        <NavLink to='/events' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={calendarIcon2} alt="" /> Events
        </NavLink>
        <NavLink to='/finance' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={financeIcon2} alt="" /> Finance
        </NavLink>
        <NavLink to='/food' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={foodIcon2} alt="" /> Food
        </NavLink>
        <NavLink to='/users' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={userIcon2} alt="" /> Users
        </NavLink>
        <NavLink to='/chat' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={chatIcon2} alt="" /> Chats
        </NavLink>
        <NavLink to='/activity' className={({ isActive }) => isActive ? 'active-link' : 'default-link hover-link'}>
            <img className='w-8' src={activityIcon2} alt="" /> Latest Activity
        </NavLink>
    </>
)

const Main = () => {

    return (
        <div className='flex min-h-dvh'>
            {/* left navigation menu */}
            < div className='bg-purple pl-11 py-12 min-w-[345px] h-full fixed start-0 left-0' >
                
                <div className='flex items-center gap-4'>
                    <img className='' src={logo} alt="" />
                    <h2 className="text-xl font-bold text-white ">Akademi</h2>
                </div>

                <div className='py-12'>
                    {navItems}
                </div>
            </div >
            {/* right outlet */}
            <div className='bg-background flex-grow ml-[345px] sticky start-0 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;