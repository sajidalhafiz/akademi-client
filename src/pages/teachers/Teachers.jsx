import React, { useEffect, useState } from 'react';
import bellIcon from '../../assets/icons/bell-2.svg'
import gearIcon from '../../assets/icons/gear-2.svg'
import userIcon from '../../assets/icons/User.svg'
import addIcon from '../../assets/icons/add.svg'
import dropdownIcon from '../../assets/icons/dropdown.svg'
import SearchBox from '../../components/SearchBox';
import TeachersCard from '../../components/TeachersCard';
// import TeacherCard from '../../components/TeacherCard';


const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return (
        <div className='px-12 pb-12 space-y-10'>
            <div className='space-y-10 py-12 bg-background sticky top-0 z-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-purple font-bold text-xl'>Teachers</h1>
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
            <div className='grid grid-cols-4 gap-10'>
                {teachers.map((teacher, index) => <TeachersCard key={index} teacher={teacher}></TeachersCard>)}

            </div>



        </div>
    );
};

export default Teachers;