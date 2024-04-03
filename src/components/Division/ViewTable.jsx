import React from 'react';
import CustomButton from '../MyComponents/CustomButton';
import CustomOutlineBtn from '../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';

function ViewTable() {
  return (
    <table className="w-full relative lg:static inline-block lg:inline-table top-0  h-full overflow-scroll">
    <thead className="border-b border-gray-300 ">
        <tr>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Client ID</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Client Name</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Division</th>
            <th className="px-16 py-4 text-end font-normal text-lg text-gray-500">Action</th>
            
        </tr>
    </thead>
    <tbody>
        {[...Array(10)].map((_, index) => (
            <tr key={index} style={index % 2 ==1 ? {backgroundColor:'#ffa00714'}:null}>
                <td className="px-8 py-4">{index + 1}</td>
            <td className="px-8 py-4">{index%2==0?'Pepsi':'Amazon' }</td>
                <td className="px-8 py-4">Phillips</td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 justify-end'>
                        <NavLink to={'/profile/division/client-details'}>
                        <CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                       </NavLink>
                       

                       <NavLink to={'/profile/division/edit-user'} ><CustomOutlineBtn buttonText={'Edit'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                       
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default ViewTable