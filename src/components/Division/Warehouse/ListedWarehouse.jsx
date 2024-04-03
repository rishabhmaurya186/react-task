import React,{ useState }  from 'react';
import DivisionHeader from '../../MyComponents/DivisionHeader';
import CustomButton from '../../MyComponents/CustomButton';
import CustomOutlineBtn from '../../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';

function ListedWarehouse() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='lg:mx-10'>
      <DivisionHeader text={'Sites'} />
      <div className="flex justify-between py-5 border-b-[1px] border-gray-300">
        <div style={{ position: 'relative', display: 'inline-block' }}>
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
        <NavLink to="addSite"><CustomButton buttonText={'Add New Site'} /></NavLink>
      </div>
      <table className="w-full relative lg:static inline-block lg:inline-table top-0  h-full overflow-scroll">
        <thead className="border-b border-gray-300 ">
          <tr>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Warehouse ID</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Site</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Main Warehouse</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Listed On Date & Time</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(15)].map((_, index) => (
            searchQuery ? (index +1).toString().startsWith(searchQuery) ? (
              <tr key={index} style={index % 2 === 1 ? { backgroundColor: '#ffa00714' } : null}>
                <td className="px-8 py-4">{index + 1}</td>
                <td className="px-8 py-4">169th St, Bayside, NY</td>
                <td className="px-8 py-4">No</td>
                <td className='px-8 py-4'>10-10-2023, 10:30 AM</td>
                <td className="px-10 py-4">
                  <div className='flex gap-2 '>
                    <NavLink to={'/profile/warehouse/viewSite'}>
                      <CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                    </NavLink>
                    <NavLink to={'/profile/warehouse/updatesite'}>
                      <CustomOutlineBtn buttonText={'Update'} />
                    </NavLink>
                  </div>
                </td>
              </tr>
            ) : null :<tr key={index} style={index % 2 === 1 ? { backgroundColor: '#ffa00714' } : null}>
            <td className="px-8 py-4">{index + 1}</td>
            <td className="px-8 py-4">169th St, Bayside, NY</td>
            <td className="px-8 py-4">No</td>
            <td className='px-8 py-4'>10-10-2023, 10:30 AM</td>
            <td className="px-10 py-4">
              <div className='flex gap-2 '>
                <NavLink to={'/profile/warehouse/viewSite'}>
                  <CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                </NavLink>
                <NavLink to={'/profile/warehouse/updatesite'}>
                  <CustomOutlineBtn buttonText={'Update'} />
                </NavLink>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListedWarehouse;
