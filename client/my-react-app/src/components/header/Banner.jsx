import React from 'react';
import BgImage from '../Asset/img/bgimg4.jpeg'; 

import Typed from 'react-typed';
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import LogoImage1 from '../Asset/img/globalpartnership.png';
import LogoImage2 from '../Asset/img/laptop.png';
import LogoImage4 from '../Asset/img/partnership2.png';
import ExploreOurProgram from '../Courses/Courses/PopularCourses/ExploreOurProgram';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

   
  return (
    <div>
    <div className="relative bg-cover min-h-0  bg-center bg-black mt-0">
      <div
        className="absolute inset-0 opacity-40 text-opacity-100 bg-cover"
        style={bannerStyle}
      />
      <div className='max-w-[1240px] font-serif py-[100px]  text-center font-bold bg-black  text-white '>
       
        <div className=' text-neutral-50 text-xs ml-96 md:text-[80px] md:p-[24px]'>
          Grow with us
        </div>
        <h1 className=' md:text-xl text-xl md:p-[24px] ml-96   underline'>
         Accelerate Your Career Growth & Upskill Yourself.
        </h1>
        <div className='text-[20px] md:text-[50px] md:p-[24px] mt-0 ml-96 text-teal-300 text-opacity-100'>
          Learn
          <Typed
            className='pl-3 text-3xl'
            strings={[
              'Cloud Migration and Architecture',
              'Digital Transformation',
              'Technical Content Development',
              'Application and API Development',
              'Cyber Security and Cloud Security',
              'Automation',
              'Digital Brand Building (UI/UX)',
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={100}
          />
        </div>
        <Button className='text-white ml-auto mr-96 font-bold w-40 h-12 text-lg'>
            <NavLink to= '/register'>Register Demo </NavLink>
         </Button>

      </div>
    </div>
    <div className="container mx-auto my-8 ml-48 -mt-2  ">
       <h1 className=" md:text-2xl text-slate-700 text-4xl font-bold md:p-6 ml-80">Programs delivered as per your training needs</h1>
     <div className="flex flex-wrap -mx-4 gap-20 ml-48 mt-5 -mb-3 ">
  {/* Box 1 */}
  <div className="md:w-60 px-4 mb-8  bg-white border-2 text-center ">
  <img
      src={LogoImage1}
      alt="logo"
      className="inline w-24 md:w-24 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
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
    <p>Online live Instructor</p>
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
<ExploreOurProgram/>
</div>
    
  );
};
export default Banner;
