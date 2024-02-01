import React from 'react'
import laptot from '../Asset/img/OUR FOUNDER.png';
import Azure from '../Asset/img/Azure.png';
import Azure1 from '../Asset/img/Azure1.png';
import DesktopAdministrator from '../Asset/img/DesktopAdministrator.png';
import Micro from '../Asset/img/Micro.png';
import MSCA from '../Asset/img/MSCA.png';


export default function Experts() {
  return (
    <div> 
      <h1 className='font-bold font-serif text-6xl text-center text-blue-950 underline' >OUR FOUNDER</h1>
    <div className='max-w-[1240px] p-2 mx-52 my-4  md:grid grid-cols-2 '>
        <div className='col-span-1 md:w-[60%]  text-center' >
            <img src={laptot} alt="" className='inline '/>
        </div>
        <div className='col-span-1 flex flex-col mt-20 justify-center'>
            <h1 className='text-[#1e1a4b] font-bold text-3xl text-center my-2 font-serif'>PIYUSH RAJ KATYAYAN</h1>
            <p className='my-2 text-justify font-serif '>He is Microsoft Certified Trainer and spend 18+ Years in IT Industry in multiple roles. He is a serial
              Entrepreneur. He has mentored MSMEs of Jharkhand, Employees of multiple IT and non-IT companies. TCS, Capgemini, Deloitte, HCL, PWC and many more.
              Trained 10000+ IT Professionals through out world in the area of Microsoft Azure Administration, Azure Architect, Azure Data Science, Azure DevOps etc.
            </p>
        </div>
      
    </div>
    <div className='text-[#1e1a4b] font-bold text-5xl text-center my-4 font-serif'>Award & Recognizations</div>
    <div className='max-w-[1240px] p-4 mx-40 my-4 md:grid flex flex-col grid-cols-2'>
      {/* Top Row */}
      <div className='col-span-1 md:w-[40%] text-center'>
        <img src={Azure} alt="" className='inline'/>
      </div>
      <div className='col-span-1 md:w-[40%] text-center'>
        <img src={Azure1} alt="" className='inline'/>
      </div>
      <div className='col-span-1 md:w-[40%] text-center'>
        <img src={DesktopAdministrator} alt="" className='inline'/>
      </div>

      {/* Bottom Row */}
      <div className='col-span-1 md:w-[40%]  text-center'>
        <img src={Micro} alt="" className='inline'/>
      </div>
      <div className='col-span-1 md:w-[40%] text-center'>
        <img src={MSCA} alt="" className='inline'/>
      </div>
    </div>
      
    </div>
  )
}