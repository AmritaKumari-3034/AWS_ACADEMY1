import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function SignUpForm() {
  return (
    < div>
      <div className='flex bg-violet-950'>
       <div className='text-center'>
         <h1 className=' text-neutral-100 md-45  ml-32 text-xl md:text-[30px] md:p-[24px]'>
          Sign Up
         </h1>
        </div>
      </div>
    <div>
    </div>
      {/* Registration Form */}
      <form className='flex flex-col max-w-2xl  gap-5 mx-auto bg-slate-50 mt-16'>

        {/* First Name and Last Name Section */}
        <div className='flex flex-col md:flex-row md:gap-4 w-full'>
          <div className='w-full md:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='fullname' value='First Name' />
            </div>
            <TextInput id='fullname' type='fullname' placeholder='Full Name' required shadow />
          </div>
          <div className='w-full md:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='lastName' value='Last Name' />
            </div>
            <TextInput id='lastName' type='text' placeholder='Last Name' required shadow />
          </div>
        </div>

        {/* Email and Password Section */}
        <div className='flex flex-col md:flex-row md:gap-4 w-full'>
          <div className='w-full md:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='email' value='Your Email' />
            </div>
            <TextInput id='email' type='email' placeholder='name@flowbite.com' required shadow />
          </div>
          <div className='w-full md:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your Password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
        </div>

        {/* Mobile Number and Company Name Section */}
        <div className='flex flex-col md:flex-row md:gap-4 w-full'>
          <div className='w-full md:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='mobileNumber' value='Mobile Number' />
            </div>
            <TextInput id='mobileNumber' type='tel' placeholder='Mobile Number' required shadow />
          </div>
          <div className='w-full md:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='companyName' value='Company Name' />
            </div>
            <TextInput id='companyName' type='text' placeholder='Company Name' required shadow />
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className='text-center w-full'>
          <Label htmlFor='accept' className='flex'>
            <Checkbox id='accept' defaultChecked />
               By providing your contact details, you agree to our 
            <a href='#' className='text-cyan-600 hover:underline dark:text-cyan-500'>
              Terms of Use & Privacy Policy
            </a>
          </Label>
          <div style={{ marginBottom: '20px' }}>
            <Button className='text-lg mt-4 w-2/4 md-2' type='submit'>
              Register
            </Button>
          </div>
        </div>

      </form>
    </div>
  );
}
