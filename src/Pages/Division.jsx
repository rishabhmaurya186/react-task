import React, { useState } from 'react';
import CustomButton from '../components/MyComponents/CustomButton';
import MyTable from '../components/Division/MyTable';
import { NavLink, Outlet } from 'react-router-dom';




function division() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  
  return (
    <div className='fixed lg:static  h-full  lg:h-auto lg:w-full inline-block w-[100%] lg:w-[20%] overflow-scroll lg:overflow-auto'>
      
     
     <Outlet/>



      
      <div  className="flex justify-between items-center pr-3 lg:px-10 py-5 border-b-[1px] border-gray-300  lg:static">
      <div style={{ position: 'relative', display: 'inline-block' }} className=''>
      <input
            type="text"
            placeholder="Search by index"
            className='w-[13rem] md:w-[400px]'
            style={{
              padding: '8px 50px 8px 10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
             
              height: '50px',
              boxSizing: 'border-box',
              fontSize: '16px',
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}></i>
        </div>
        <NavLink to={'create'} className='hidden md:inline-block mr-3' > <CustomButton buttonText={'Create New Division'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  />
        
        </NavLink>
        <NavLink to={'create'} className='md:hidden mr-3' > <CustomButton buttonText={'Create'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  />
        
        </NavLink>
       
     </div>
      <div className='pt-10 lg:px-8'>
        <MyTable searchQuery={searchQuery} />
      </div>
     
            
          
 
    </div>
  )
}

export default division