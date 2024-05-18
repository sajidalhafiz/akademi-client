import React from 'react';
import searchIcon from '../assets/icons/Search.svg'

const SearchBox = () => {
    return (
        <div className='w-[350px] px-9 py-4 rounded-full bg-white flex gap-5 items-center'>
            <img className='w-6' src={searchIcon} alt="" />
            {/* <p className='text-gray3 text-sm'>Search here...</p> */}
            <input type="text" className='text-purple text-sm focus:outline-none placeholder:text-gray3' placeholder='search here...'/>
        </div>
    );
};

export default SearchBox;