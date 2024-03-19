'use client';

import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import laptot from '../Asset/img/hirefromus.jpg';

//Fatch the all user data who is hire from us


function HireFromUs() {
  return (
    <div className='max-w-[1240px] p-2 mx-52 my-4 md:grid grid-cols-2'>
      <div className='col-span-1 '>
        <h1 className="font-bold text-2xl font-serif ">Hire Job Hiring Professional at No Cost!</h1>
        <p className='text-lg'>Reduce your hiring time & cost by 80%</p>
      <div className='col-span-1 md:w-[110%] mt-6  text-center' >
            <img src={laptot} alt="" className='inline '/>
        </div>
        <Button className='text-white mt-5 font-bold w-40 h-12 text-lg ml-5'>
          <NavLink to='/contact'>Register here</NavLink>
        </Button>
      </div>
      <form className='flex max-w-md flex-col p-4 rounded gap-4 bg-slate-50 ml-20 mt-6'>
        <div className='text-xl items-center justify-center font-bold'>Hire Pre-Qualified Resources at Zero-cost</div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='fullname' value='Full Name' />
          </div>
          <TextInput id='fullname' type='fullname' placeholder='Full Name' required shadow />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email2' value=' Email' />
          </div>
          <TextInput id='email2' type='email' placeholder='name@flowbite.com' required shadow />
        </div>
        <div>
         <div className='mb-2 block'>
            <Label htmlFor='Mobile Number' value='Mobile Number' />
         </div>
            <TextInput id='Mobile Number' type='Mobile Number' placeholder='Mobile Number' required shadow />
         </div>
         <div>
         <div className='mb-2 block'>
           <Label htmlFor='Company Name' value='Company Name' />
       </div>
           <TextInput id='Company Name' type='Company Name' placeholder='Company Name' required shadow />
       </div>
          
        <div className='max-w-md'>
          <div className='mb-2 block'>
            <Label htmlFor='Technology' value='Select your technologies' />
          </div>
          <Select id='courses' required>
            <option>Data Science</option>
            <option>Data Science</option>
            <option>Data Science</option>
            <option>Data Science</option>
          </Select>
        </div>
        <Label htmlFor='accept' className='flex'>
          <Checkbox id='accept' defaultChecked />
          I agree with the&nbsp;
          <a href='#' className='text-cyan-600 hover:underline dark:text-cyan-500'>
            terms and conditions
          </a>
        </Label>
        <Button className='text-lg' type='submit'>
          Register
        </Button>
      </form>
    </div>
  );
}

export default  HireFromUs;

