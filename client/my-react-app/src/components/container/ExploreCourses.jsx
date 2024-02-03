import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Import your course components
import Automation from '../Courses/Courses/Automation';
import CloudComputing from '../Courses/Courses/CloudComputing';
import CyberSecurity from '../Courses/Courses/CyberSecurity';
import UxUIDev from '../Courses/Courses/UxUIDev';
import SoftwareDev from '../Courses/Courses/SoftwareDev';
import DIDB from '../Courses/Courses/DIDB';
import Devops from '../Courses/Courses/Devops';
import ITservices from '../Courses/Courses/ITservices';
import Management from '../Courses/Courses/Management';
import DataScience from '../Courses/Courses/DataScience';


const courses = [
  { id: 'automation', name: 'Automation', component: <Automation /> },
  { id: 'cloudcomputing', name: 'Cloud Computing', component: <CloudComputing /> },
  { id: 'cybersecurity', name: 'Cyber Security', component: <CyberSecurity /> },
  { id: 'datascience', name: 'Data Science', component: <DataScience /> },
  { id: 'devops', name: 'DevOps', component: <Devops /> },
  { id: 'dianddatabase', name: 'DIDB', component: <DIDB /> },
  { id: 'itservices', name: 'IT Services', component: <ITservices /> },
  { id: 'management', name: 'Management', component: <Management /> },
  { id: 'softwaredev', name: 'Software Development', component: <SoftwareDev /> },
  { id: 'uiuxdev', name: 'UI/UX Design', component: <UxUIDev /> },
];

function ExploreCourses() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  return ( 
    <div>
       <div className="border-b border-gray-200 mb-4"></div>
      <div className="hidden md:flex mt-8  items-center ml-40 font-bold font-serif gap-2">
        {courses.map((course) => (
          <div
            key={course.id}
      className={`text-black hover:text-blue-600 ml-4 ${selectedCourse === course.id && 'active'}`}
          >
            <NavLink to="#" className="navlink" onClick={() => handleCourseClick(course.id)}>
              {course.name}
            </NavLink>
          </div>
        ))}
      </div>
        
      <div className='w-full mt-10 mb-5'>
       
         <div className='col-span-1 '>
          <div className='ml-64'>
             <a href='/name' className='course-link'> home/</a>
          </div>

           {selectedCourse && courses.find((course) => course.id === selectedCourse)?.component}
     </div>
   </div>

    </div>
  );
}

export default ExploreCourses;
