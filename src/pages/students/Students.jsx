import React, { useEffect, useState } from 'react';
import bellIcon from '../../assets/icons/bell-2.svg'
import gearIcon from '../../assets/icons/gear-2.svg'
import userIcon from '../../assets/icons/User.svg'
import addIcon from '../../assets/icons/add.svg'
import dropdownIcon from '../../assets/icons/dropdown.svg'
import callIcon from '../../assets/icons/Call.svg'
import emailIcon from '../../assets/icons/Email.svg'
import SearchBox from '../../components/SearchBox';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'Name',
        selector: row => <div className='flex gap-2 items-center'>
            <div className='bg-gray2 w-12 h-12 rounded-full '></div>
            <p className='font-bold text-[16px] text-start text-wrap text-text'>{row.name}</p>
        </div>,
    },
    {
        name: 'ID',
        selector: row => row.unique_id,
        sortable: true,
        conditionalCellStyles: [
			{
				when: row => row.unique_id,
				style: {
					fontSize: '16px',
                    fontWeight: '600'
				},
			},
        ],
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
        conditionalCellStyles: [
			{
				when: row => row.unique_id,
				style: {
					fontSize: '14px',
                    color: '#A098AE'
				},
			},
        ],
    },
    {
        name: 'Parent Name',
        selector: row => <p className='text-text'>{row.parent_name}</p>,
    },
    {
        name: 'City',
        selector: row => <p className='text-text'>{row.city}</p>,
    },
    {
        name: 'Contact',
        selector: row => <div className='flex gap-2'>
            <div className='relative p-2 rounded-full bg-purple-10 flex justify-center items-center'>
                <img className='w-6' src={callIcon} alt="" />
                <p className='hidden'>{row.phone}</p>
            </div>
            <div className='relative p-2 rounded-full bg-purple-10 flex justify-center items-center'>
                <img className='w-6' src={emailIcon} alt="" />
                {/* <p>mailto:{row.email}</p> */}
            </div>
        </div>,
    },
    {
        name: 'Grade',
        selector: row => row.grade == 'A' ? <p className='px-6 py-2 rounded-full text-white font-semibold bg-purple'>{row.grade}</p>
        : row.grade == 'B' ? <p className='px-6 py-2 rounded-full text-white font-semibold bg-yellow'>{row.grade}</p>
        :row.grade == 'C' ? <p className='px-6 py-2 rounded-full text-white font-semibold bg-orange'>{row.grade}</p>
        : <p className='px-6 py-2 rounded-full text-white font-semibold bg-red'>{row.grade}</p>,
        
    },
    {
        name: 'Action',
        selector: row => <Link to='/studentDetails'>View Details</Link>,
        
    },
];


const style = {
    rows: {
        style: {
            minHeight: '112px', // override the row height
        },
        highlightOnHoverStyle: {
            color: '#4D44B5',
            backgroundColor: '#F3F4FF',
            transitionDuration: '0.15s',
            transitionProperty: 'background-color',
            // borderLeftColor: '#4D44B5',
            // borderStyle: 'solid',
            // borderWidth: '0px 0px 0px 4px',
            // borderColor: '#4D44B5',
        },
        selectedHighlightStyle: {
            // use nth-of-type(n) to override other nth selectors
            '&:nth-of-type(n)': {
                // color: '#ffffff',
                backgroundColor: '#F3F4FF',
                // borderBottomColor: theme.background.default,
                borderStyle: 'solid',
                borderWidth: '0px 0px 0px 4px',
                borderColor: '#4D44B5',
            },
        },
    },
    headCells: {
        style: {
            paddingTop: '8px', // override the cell padding for head cells
            paddingBottom: '8px',
            color: '#303972',
            fontWeight: '700',
            fontSize: '14px',
            borderRadius: '40px'
        },
    },
    cells: {
        style: {
            // paddingLeft: '8px', // override the cell padding for data cells
            // paddingRight: '8px',
            textAlign: 'center' 
        },
    },

};

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('students.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);

    return (
        <div className='p-12 space-y-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-text font-bold text-xl'>Students</h1>
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
                            <h6 className='text-text font-bold text-xs'>Sajid A.</h6>
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

            <div>
                <DataTable
                    columns={columns}
                    data={students}
                    selectableRows
                    selectableRowsHighlight
                    pagination
                    // paginationTotalRows={5}
                    responsive
                    highlightOnHover
                    fixedHeader
                    customStyles={style}
                />
            </div>
        </div>
    );
};

export default Students;