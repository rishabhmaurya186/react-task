import React from 'react'
import DivisionHeader from '../MyComponents/DivisionHeader'
import DivisionCard from './DivisionCard'

function UpdatePost() {
  return (
    <div>
      
      <div className='px-10 py-5'>
      <DivisionHeader text={'Update Division'} />
      <div className='mt-6'>
       <DivisionCard saveBtn={'Save'} />
      </div>
    
    </div>
    
    </div>
  )
}

export default UpdatePost