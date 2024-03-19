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
      <div className=' ml-60 mt-10 '>
        <Button.Group>
          <Button color="gray" >Open 0</Button>
          <Button color="gray" >Close 0</Button>
          <Button color="gray" >All</Button>
        </Button.Group>
</div>

    </div>
    
       
  )
}

export default Supports