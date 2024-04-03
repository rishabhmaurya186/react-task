import React from 'react'
import DivisionHeader from '../../../MyComponents/DivisionHeader'

function ViewSite() {
  return (
    <div className='mx-10 mb-14 '>
      <DivisionHeader text={'View Site'} />
      <div className=' bg-[#f4a21f1e] p-3 mt-6 '>
        <table className='w-full justify-between '>
          <tr className='text-lg text-[#0000009c] ' style={{ fontWeight: "300"}}>
            <td className=' w-[25%] pb-4' >Name</td>
            <td className=' w-[25%]'>Phone Number</td>
            <td className=' w-[25%]'>Division</td>
            <td className=' w-[25%]'>Address</td>
          </tr>
          <tr>
            <td className=' w-[25%] pb-6' >Warehouse Name</td>
            <td className=' w-[25%]'>8450983457</td>
            <td className=' w-[25%]'>Division 1</td>
            <td className=' w-[25%]'>169th St

              Bayside, NY 11355 United States</td>
          </tr>
          <tr>
            <td className='pb-6'>Mainwarehouse</td>
            <td>Description</td>
          </tr>
          <tr>
            <td className='pb-6'>No</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</td>
          </tr>
        </table>
      </div>
      </div>
  )
}

export default ViewSite