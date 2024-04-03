import React from 'react';
import CustomButton from '../MyComponents/CustomButton';
import CustomOutlineBtn from '../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';

function MyTable({searchQuery}) {
    return (
        <table className="w-full relative lg:static inline-block lg:inline-table top-0  h-full overflow-scroll" style={{
            
        }} >
            <thead className="border-b border-gray-300">
                <tr>
                    <th className="lg:px-8 w-[30%] lg:w-auto py-4 text-start font-normal text-lg text-gray-500">Division ID</th>
                    <th className="px-3  w-[30%] lg:w-auto lg:px-8 py-4 text-start font-normal text-lg text-gray-500">Division Name</th>
                    <th className="px-3  w-[30%] lg:w-auto lg:px-8 py-4 text-start font-normal text-lg text-gray-500 inline-block w-[230px]">Listed On Date & Time</th>
                    <th className="px-3  w-[30%] lg:w-auto lg:px-8 py-4 text-start font-normal text-lg text-gray-500">No. of Warehouse</th>
                    <th className="px-3  w-[30%] lg:w-auto lg:px-8 py-4 text-start font-normal text-lg text-gray-500">Action</th>
                </tr>
            </thead>
            <tbody>
                {[...Array(11
                )].map((_, index) => (
                    searchQuery ? (index + 1).toString().startsWith(searchQuery) ? (
                        <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                        <td className="lg:px-8 py-4">{index + 1}</td>
                        <td className="px-3 lg:px-8 py-4">Division {index + 1}</td>
                        <td className="px-3 lg:px-8 py-4">10-10-2023, 10:30 AM</td>
                        <td className="px-3 lg:px-8 py-4">4</td>
                        <td className="px-3 lg:px-8 py-4">
                            <div className='flex gap-2'>
                               <NavLink to={'associate-client'}><CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                               <NavLink to={'update'} ><CustomOutlineBtn buttonText={'Update'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                               <NavLink to={'delete'} ><CustomOutlineBtn buttonText={'Delete'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink>
                            </div>
                        </td>
                    </tr>
                    ) : null : <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                 <td className="lg:px-8 py-4">{index + 1}</td>
                        <td className="px-3 lg:px-8 py-4">Division {index + 1}</td>
                        <td className="px-3 lg:px-8 inline-block w-[230px]  py-4">10-10-2023, 10:30 AM</td>
                        <td className="px-3 lg:px-8 py-4">4</td>
                        <td className="px-3 lg:px-8 py-4">
                            <div className='flex gap-2'>
                               <NavLink to={'associate-client'}><CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                               <NavLink to={'update'} ><CustomOutlineBtn buttonText={'Update'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                               <NavLink to={'delete'} ><CustomOutlineBtn buttonText={'Delete'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink>
                            </div>
                        </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MyTable;
