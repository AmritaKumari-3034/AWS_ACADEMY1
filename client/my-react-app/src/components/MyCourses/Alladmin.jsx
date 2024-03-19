// export default AllAdmin;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Import your components for Calender, MyCourses, Messages, Mysession, Notification, Supports
import Calender from './Calender';
import MyCourses from './MyCourses';
import Messages from './Messages';
import Mysession from './Mysession';
import Notification from './Notification';
import Supports from './Supports';
import  LogoImage1 from '../Asset/img/alarm-clock.png';
import LogoImage2 from '../Asset/img/certificate.png';
import LogoImage3 from '../Asset/img/graduate-hat.png';
import LogoImage4 from '../Asset/img/alarm-clock.png'



const components = {
  calender: Calender,
  mycourses: MyCourses,
  messages: Messages,
  mysession: Mysession,
  notification: Notification,
  supports: Supports,
};

function AllAdmin() {
  const [selectedComponent, setSelectedComponent] = useState('calender');

  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId);
  };

  return (
    <div className='border-t  border-gray-200 mb-4'>
       <div className="flex flex-wrap justify-center mt-16 mb-8 gap-14 ">
          {/* Box 1 */}
         <div className="relative md:w-64 px-4 mb-8  bg-gradient-to-br from-purple-500 to-blue-200 border-2 text-center rounded-lg">
        <img
           src={LogoImage1}
           alt="logo"
           className="absolute top-0 right-0 w-10 md:w-10 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
       />
       <p className=" pt-24 font-bold text-xl text-white ">Courses To Do</p>
    </div>


         {/* Box 2 */}
           <div className="relative md:w-64 md:h-32 px-4 bg-gradient-to-br from-orange-500 to-orange-300 mb-8 border-2 text-center rounded-lg">
             <img
                src={LogoImage2}
                alt="logo"
                className="absolute w-10 top-0 right-0  md:w-10 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
            />
           <p className=" pt-24 font-bold text-xl text-white ">Assignment</p>
         </div>

         {/* Box 3 */}
           <div className="relative md:w-64 px-4 mb-8 bg-gradient-to-r from-blue-400 to-light-blue-400 border-2 text-center rounded-lg">
             <img
                src={LogoImage3}
                alt="logo"
                className="absolute w-10 top-0 right-0 md:w-10 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
             />
           <p className=" pt-24 font-bold text-xl text-white ">Quiz Overdue</p>
         </div>

         {/* Box 4 */}
           <div className="relative md:w-64 px-4 mb-8  bg-gradient-to-br from-green-800 to-green-200 border-2 text-center rounded-lg">
             <img
                src={LogoImage4}
                alt="logo"
                className="absolute w-10 top-0 right-0 md:w-10 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
             />
          <p className=" pt-24 font-bold text-xl text-white ">Completed Course</p>
         </div>
  </div>


      <div className="border-b border-gray-200 mb-4 "></div>
      <div className="hidden md:flex mt-8 items-center ml-80 font-bold font-serif gap-12">
        {Object.keys(components).map((componentId) => (
          <div
            key={componentId}
            className={`text-black hover:text-blue-600 ml-4 ${selectedComponent === componentId && 'active'}`}
          >
            <NavLink to="#" className="navlink" onClick={() => handleComponentClick(componentId)}>
              {componentId.charAt(0).toUpperCase() + componentId.slice(1)}
            </NavLink>
          </div>
        ))}
      </div>

      <div className='w-full mt-10 mb-5'>
        <div className='col-span-1'>
          {/* <div className='ml-64'>
            <a href='/name' className='course-link'></a>
          </div> */}

          {selectedComponent && React.createElement(components[selectedComponent])}
        </div>
      </div>
    </div>

  );
}

export default AllAdmin;
