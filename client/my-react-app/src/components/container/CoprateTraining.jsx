import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button, Textarea } from 'flowbite-react';
import { Card } from 'flowbite-react';
import {Checkbox, Label, TextInput } from 'flowbite-react';
import LogoImage1 from '../Asset/img/globalpartnership.png';
import LogoImage2 from '../Asset/img/laptop.png';
import LogoImage4 from '../Asset/img/partnership2.png';
import LogoImage0 from '../Asset/img/corporate-desktop-sec-one.webp';
import LogoImage from '../Asset/img/corporate-desktop-sec-second (1).webp'
import LogoImg from '../Asset/img/corporate_page-clients_desktop.webp'


export default function CoprateTraining() {
  return (
    < div>
      <div className='flex items-center min-h-0 justify-center bg-teal-800'>
       <div className='text-center'>
         <h1 className='text-neutral-50 mt-24 text-xs md:text-[50px] md:p-[24px]'>
          Transform Your Workforce
         </h1>
         <p className='md:text-xl text-white text-xs md:p-[24px] underline'>
          Learning emerging skills quickly with custom curriculum designed as per your needs.
         </p>
      <Button className='text-white mt-3 mb-10 font-bold w-40 h-12 text-lg ml-80'> 
         <NavLink to='/contact'>Know more</NavLink>
      </Button>
  </div>
</div>
       {/* Top compniese*/}
           <div className="container ml-24 mt-10 mb-8 ">
            <div className="column text-column">
                <div className='font-bold text-lg text-slate-600 ml-12 mt-6'>
                    <h2>Top companies use Piyush_Academy<br/> for their enterprise learning</h2>
                </div>
                <div className="column image-column -mt-14 ml-96 -mr-32">
                <img
                    src={LogoImage0}
                    alt="logo"
                    className=""
                />
            </div>
            </div>
        </div>
        <hr style={{ margin: '140px 10' }} />

        {/* why top companiese choose Piyush_Academy*/}

        <div className='font-bold text-2xl mt-14 text-slate-500 ml-32'>Why top companies prefer Intellipaat</div>
        <div className=' text-lg mt-4 ml-36 mb-10'>
        <h1>&#10003; High engagement and outcome-centric learning</h1>
        <h1>&#10003; Customized curriculum built with industry leaders, for industry leaders</h1>
        <h1>&#10003; Hands-on exercises and industry use cases</h1>
        <h1>&#10003; Assignments and project work review and feedback from industry SMEs</h1>
        <h1>&#10003; Strong reporting to track learning and calculate training ROI for managers</h1>
        <h1>&#10003; Pre-configured Cloud Labs for practice</h1>
        <h1>&#10003; Day 1 production ready on the completion of the training</h1>
        </div>
        {/* Program delivered */}
        <div className=' w-full bg-slate-50 '>
    <div className="container  text-center">
      <h1 className="md:text-2xl text-center ml-24 mb-8 font-bold md:p-6">Programs delivered as per your training needs</h1>
      <div className="flex flex-wrap -mx-4 gap-10 ml-96 ">
        {/* Box 1 */}
        <div className="md:w-60 px-4 mb-8 bg-white border-2 text-center ">
        <img
            src={LogoImage1}
            alt="logo"
            className="inline w-24 md:w-30 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
          />
          <p>On Premises</p>
        </div>

        {/* Box 2 */}
        <div className="md:w-60 px-4 mb-8 bg-white border-2 text-center">
        <img
            src={LogoImage2}
            alt="logo"
            className="inline w-24 md:w-30 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
          />
          <p>Online Instructor-led</p>
        </div>

        {/* Box 4 */}
        <div className="md:w-60 px-4 mb-8 bg-white border-2 text-center">
        <img
            src={LogoImage4}
            alt="logo"
            className="inline w-24 md:w-30 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
          />
          <p className='ml-4'>Blended</p>
        </div>
      </div>
    </div>
    </div>
     {/* Top compniese*/}
     <div className="container ml-24 mt-10 mb-8 ">
            <div className="column text-column">
                <div className='font-bold text-xl text-slate-600 ml-12 mt-6'>
                    <h2>Programs delivered in<br/> collaboration with top companies</h2>
                </div>
                <div className="column image-column -mt-14 ml-96 -mr-32">
                <img
                    src={LogoImage}
                    alt="logo"
                    className=""
                />
            </div>
            </div>
        </div>
        <div className=' bg-slate-100'>
      <h1 className=' md:text-3xl ml-40  md:p-[24px]'>Program Library</h1>
      <div className="flex flex-wrap gap-0 justify-between">
      {/* Card 1 */}
      <Card href="#" className="max-w-sm mb-4 ml-36 ">
        <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

      {/* Card 2 */}
      <Card href="#" className="max-w-sm mb-4 mr-3">
      <h5 className="text-sm  tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 3 */}
        <Card href="#" className="max-w-sm mb-4 mr-24">
      <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 4 */}
        <Card href="#" className="max-w-sm mb-4 ml-72">
      <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 5 */}
        <Card href="#" className="max-w-sm mb-4 mr-96">
      <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      

    </div>
    </div>
{/* Testimonials*/}
      <div className='font-bold text-3xl text-center text-white bg-slate-500'>
        <h1>Testimonials</h1>
         
        
      </div>

      {/*Client */}
      <div className=' text-4xl text-slate-700 mt-6 bg-slate-50 '>
        <h1 className=' ml-48'>Clients</h1>
        <div className="column image-column ml-52 mt-7 ">
                <img
                    src={LogoImg}
                    alt="logo"
                    className=""
                />
            </div>
            <div className=' text-lg text-center mt-6 text-black'>
            <p>200+ companies trust Piyush_Academy in upskilling their employees</p>
            </div>
      </div>
    <form className='flex flex-col max-w-2xl gap-5 mx-auto bg-white mt-6'>

  <div className=' text-center text-2xl mt-3'>Transform Your Workforce</div>
  <p className='text-center -mt-3'>Write to us for your upskilling needs</p>

  <div className='flex flex-col md:flex-row md:gap-4 w-full'>
    <div className='w-full md:w-1/2'>
      <div className='mb-2 block'>
        <Label htmlFor='fullname' value='Full Name' />
      </div>
      <TextInput id='fullname' type='fullname' placeholder='Full Name' required shadow />
    </div>
    <div className='w-full md:w-1/2'>
      <div className='mb-2 block'>
        <Label htmlFor='email2' value='Your email' />
      </div>
      <TextInput id='email2' type='email' placeholder='name@gmail.com' required shadow />
    </div>
  </div>
  <div className='flex flex-col md:flex-row md:gap-4 w-full'>
    <div className='w-full md:w-1/2'>
      <div className='mb-2 block'>
        <Label htmlFor='Title' value='Title' />
      </div>
      <TextInput id='Title' type='Title' placeholder='Title' required shadow />
    </div>
    <div className='w-full md:w-1/2'>
      <div className='mb-2 block'>
        <Label htmlFor='Mobile Number' value='Mobile Number' />
      </div>
      <TextInput id='Mobile Number' type='Mobile Number' placeholder='Mobile Number' required shadow />
    </div>
  </div>

    <div className='w-full'>
      <div className='mb-2 block'>
        <Label htmlFor='Company Name' value='Company Name' />
      </div>
      <TextInput id='Company Name' type='Company Name' placeholder='Company Name' required shadow />
    </div>
    <div className='w-full'>
      <div className='mb-2 block'>
        <Label htmlFor='Request Message' value='Request Message' />
      </div>
      <Textarea id='Request Message' type='Request Message' placeholder='Request Message' required shadow />
    </div>
  

  {/* Repeat similar blocks for other form fields */}

  <div className='text-center w-full'>
    <Label htmlFor='accept' className='flex'>
      <Checkbox id='accept' defaultChecked />
      I agree with the&nbsp;
      <a href='#' className='text-cyan-600 hover:underline dark:text-cyan-500'>
        terms and conditions
      </a>
    </Label>
    <div style={{ marginBottom: '20px' }}>
       <Button className='text-lg mt-4 w-2/4 mx-auto md-2' type='submit'>
          Register
       </Button>
</div>
  </div>
</form>



      <NavLink to='/copratetraining'></NavLink>
    </div>

  )
}
