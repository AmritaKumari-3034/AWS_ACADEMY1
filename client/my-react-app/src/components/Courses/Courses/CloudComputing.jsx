'use client';

import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../Asset/img/cloudlogo.jpg';

function CloudComputing() {
  return (
    <div className='max-w-[1240px] p-2 mx-52 my-4 md:grid grid-cols-2'>
      <div className='col-span-1 '>
      <img
            src={LogoImage}
            alt="logo"
            className="inline w-36 h-20 ml-9 md:w-30 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
          />
          <p className="ml-8">Cloud Computing complete course on your mood </p>
        <h3 className='md:text-3xl mr-20 text-3xl md:p-[24px] underline'>
          CARRER GROWTH WITH CLOUD COMPUTING.
        </h3>
        <p className='ml-5'>Cloud Computing is a widely adopted tool by numerous businesses for saving
         costs, upgrading productivity, enhancing speed and performance. Cloud
         Computing delivers services through various resources, including tools and
         applications like data storage, servers, databases, software, and networking.
         Cloud's existence has been increased globally as it provides a place to many
         companies for storing their crucial data with a higher level of security..</p>


         <div>
        <Button className='text-white mt-8 font-bold w-40 h-12 text-lg ml-5'>
          <NavLink to='/contact'>Apply Now</NavLink>
        </Button>
        </div>
        <div>
        <Button className='text-white -mt-12 h-12 ml-48 font-bold w-40 text-lg'>
          <NavLink to='/datascience'>Download Brochure</NavLink>
        </Button>
        </div>

      </div>
      <form className='flex max-w-md flex-col gap-4 bg-slate-50 ml-20 mt-6'>
        <div className='text-xl items-center justify-center font-bold'>Register for Courses</div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='fullname' value='Your Full Name' />
          </div>
          <TextInput id='fullname' type='fullname' placeholder='Full Name' required shadow />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email2' value='Your email' />
          </div>
          <TextInput id='email2' type='email' placeholder='name@flowbite.com' required shadow />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password2' value='Your password' />
          </div>
          <TextInput id='password2' type='password' required shadow />
        </div>
        <div className='max-w-md'>
          <div className='mb-2 block'>
            <Label htmlFor='courses' value='Select your courses' />
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

export default  CloudComputing;
