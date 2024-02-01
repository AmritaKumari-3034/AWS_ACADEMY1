
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


function FooterComponet() {
  return (
    <Footer>
  
    <div className="w-full bg-black">
      <div className="grid w-9/12 grid-cols-2 px-6 py-8 md:grid-cols-4 ml-32 ">
        <div className='font-bold text-xl text-white ml-10 '>Piyush_Academy
        <div className="gap-10 px-2 py-6 w-auto">
  <div className="mt-2 mr-20 flex space-x-4 sm:mt-0 sm:justify-center">
    <Footer.Icon href="#" icon={BsFacebook} className="hover:text-white" />
    <Footer.Icon href="#" icon={BsInstagram} className="hover:text-white" />
    <Footer.Icon href="#" icon={BsTwitter} className="hover:text-white" />
    <Footer.Icon href="#" icon={BsGithub} className="hover:text-white" />
    <Footer.Icon href="http://localhost:3000" icon={BsDribbble} className="hover:text-white" />
  </div>
</div>

      </div>
       
      <div className=''>
  <Footer.Title className='text-white text-lg' title="Analytics Courses" />
  <Footer.LinkGroup col className=' -mt-2 text-lg'>
    <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
    <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
    <Footer.Link href="/management" className='hover:text-slate-100'>Management Course</Footer.Link>
    <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
    <Footer.Link href="/automation" className='hover:text-slate-100'>Automation Course</Footer.Link>
  </Footer.LinkGroup>
</div>

          <div>
            <Footer.Title className='text-white text-lg' title="Popular Courses" />
            <Footer.LinkGroup col className='gap-x-px -mt-2 text-lg'>
              <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
              <Footer.Link href="/devops" className='hover:text-slate-100'>Devops Course</Footer.Link>
              <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
              <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course </Footer.Link>
              <Footer.Link href="/itservices" className='hover:text-slate-100'>IT Services Course </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-white text-lg' title="Trending Courses" />
            <Footer.LinkGroup col className='gap-x-px -mt-2 text-lg'>
              <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
              <Footer.Link href="/cybersecurity" className='hover:text-slate-100'>Cyber Security Course</Footer.Link>
              <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
              <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
              <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <hr style={{ marginLeft: '150px', marginRight: '150px'}} />
        <div>
  <div className='ml-40 mt-28' >
    <Footer.Title className='text-white text-lg' title="Browse by domains" />
    <Footer.LinkGroup className='gap-x-px -mt-2 text-lg' style={{ display: 'flex' }}>
      <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
      <Footer.Link href="/cybersecurity" className='hover:text-slate-100'>Cyber Security Course</Footer.Link>
      <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
      <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      {/* Add more links if needed */}
    </Footer.LinkGroup>
  </div>

  {/* Line break */}
  <hr style={{ marginLeft: '150px', marginRight: '150px'}} />

  <div className='ml-40 mt-16'>
    <Footer.Title className='text-white text-lg' title="Popular Tutorials" />
    <Footer.LinkGroup className='gap-x-px -mt-2 text-lg' style={{ display: 'flex' }}>
      <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
      <Footer.Link href="/cybersecurity" className='hover:text-slate-100'>Cyber Security Course</Footer.Link>
      <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
      <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      {/* Add more links if needed */}
    </Footer.LinkGroup>
  </div>

  {/* Line break */}
  <hr style={{ marginLeft: '150px', marginRight: '150px'}}  />

  <div className='ml-40 mt-16 '>
    <Footer.Title className='text-white text-lg' title="Popular Resources" />
    <Footer.LinkGroup className='gap-x-px -mt-2 text-lg' style={{ display: 'flex' }}>
      <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
      <Footer.Link href="/cybersecurity" className='hover:text-slate-100'>Cyber Security Course</Footer.Link>
      <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
      <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      {/* Add more links if needed */}
    </Footer.LinkGroup>
  </div>

  {/* Line break */}
  <hr style={{ marginLeft: '150px', marginRight: '150px'}}  />

  <div className='ml-40 mt-16 '>
    <Footer.Title className='text-white text-lg' title="Degree Program" />
    <Footer.LinkGroup className='gap-x-px -mt-2 text-lg' style={{ display: 'flex' }}>
      <Footer.Link href="/datascience" className='hover:text-slate-100'>Data Science Course</Footer.Link>
      <Footer.Link href="/cybersecurity" className='hover:text-slate-100'>Cyber Security Course</Footer.Link>
      <Footer.Link href="/cloudcomputing" className='hover:text-slate-100'>Cloud Computer Course</Footer.Link>
      <Footer.Link href="/uiuxdev" className='hover:text-slate-100'>UI UX Design Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      <Footer.Link href="/softwaredev" className='hover:text-slate-100'>Software Development Course</Footer.Link>
      {/* Add more links if needed */}
    </Footer.LinkGroup>
  </div>
</div>




        <Footer.Copyright href="http://localhost:3000" by="Piyush_Academy" year={2023} />
      </div>
    </Footer>
  );
}
export default FooterComponet;