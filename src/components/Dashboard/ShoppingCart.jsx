import React from 'react';
import './Sidenav.css'

const ShoppingCart = ({  brandName, subscriberCount,bg,icon }) => {
    return (
        <div className="w-[48%] lg:w-[32%]  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          
            <div className= { `flex items-center justify-between p-4  text-white h-[100px] lg:h-[150px] ${bg}`} >
                <div className="flex items-center">
                  <div className='mt-3 lg:w-auto w-8'><img src={ icon} /></div>  
                
                    <div className='flex flex-col  justify-start ' style={{color:'black'}} >
                        <p className=" ml-4 lg:ml-7 text-[20px]  text-sm lg:text-xl  " style={{fontWeight:'400'}}>{brandName}</p>
                        <h1 className="text-3xl font-semibold ml-7 mt-4 text-lg lg:text-xl" style={{fontWeight:'300'}}>{ subscriberCount }</h1>
                    </div>
                   
                </div>
                
            </div> 
        </div>
    );
};

export default ShoppingCart;
