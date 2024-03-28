import React from 'react'
import { Button } from 'flowbite-react';

function Supports() {
  return (
    <div>
      <div className='flex bg-violet-950 gap-96'>
        <div className='text-center ml-14'>
          <h1 className=' text-neutral-100 md-40 mt-4  ml-32 text-xl md:text-[30px] md:p-[24px]'>
            Student Supports
          </h1>
        </div>
        <div className='text-right items-end ml-64 '>
          <div className='text-neutral-100 text-xs items-end md:text-[20px] md:p-[20px]'>
           IND: +95-95-13252311     
        </div>
         <div className='text-neutral-100 text-xs items-end md:text-[20px] md:p-[20px]'>
                +91-80-44637861
        </div>      
   </div>
    </div>
  <div className="flex justify-between items-center">
  <div className="ml-60 mt-10">
    <Button.Group>
      <Button color="gray" className="text-lg font-bold border border-gray-600">Open 0</Button>
      <Button color="gray" className="text-lg font-bold border border-gray-600">Close 0</Button>
      <Button color="gray" className="text-lg font-bold border border-gray-600">All</Button>
    </Button.Group>
  </div>
  <div className="mr-60">
    <Button gradientMonochrome="purple">Purple</Button>
  </div>
</div>

      




    </div>
    
       
  )
}

export default Supports