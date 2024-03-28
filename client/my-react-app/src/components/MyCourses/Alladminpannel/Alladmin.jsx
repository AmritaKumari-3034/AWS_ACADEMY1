// export default AllAdmin;
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { FaUserCircle, FaHouseUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi2";


function AllAdmin() {
   return (
  <div className="flex">
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Data Range">
            <Sidebar.Item href="/alladmin/days">Days</Sidebar.Item>
            <Sidebar.Item href="/alladmin/months">Months</Sidebar.Item>
            <Sidebar.Item href="/alladmin/weeeks">Weeks</Sidebar.Item>
          </Sidebar.Collapse>

      <Sidebar.Collapse icon={HiUser} label="Interface Layer">
        <Sidebar.Collapse icon={HiShoppingBag} label="Student Wise">
          <Sidebar.Item href="#">Report & Block User</Sidebar.Item>
        </Sidebar.Collapse>
      <Sidebar.Collapse icon={HiShoppingBag} label="Courses Wise ">
        <Sidebar.Item href="#">Add New Course</Sidebar.Item>
        <Sidebar.Item href="#">Update Course</Sidebar.Item>
      </Sidebar.Collapse>
     </Sidebar.Collapse>
      <Sidebar.Collapse icon={HiUser} label="Reporting Layer">
        <Sidebar.Collapse icon={HiShoppingBag} label="Student Wise">
          <Sidebar.Item href="#">Student Registration</Sidebar.Item>
          <Sidebar.Item href="#">Student Enrollment</Sidebar.Item>
          <Sidebar.Item href="#">Specific Student Details</Sidebar.Item>
        </Sidebar.Collapse>
      <Sidebar.Collapse icon={HiShoppingBag} label="Courses Wise ">
        <Sidebar.Item href="#">Course Registration</Sidebar.Item>
        <Sidebar.Item href="#">Course Enrollment</Sidebar.Item>
        <Sidebar.Item href="#">Course Duration</Sidebar.Item>
      </Sidebar.Collapse>
     </Sidebar.Collapse>

          <Sidebar.Item href="/register" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="logout" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    <div className=" ml-20">
    <input
      type="text"
      placeholder="Search Courses..."
      className="border p-2 w-60 rounded-md focus:selection:"
    />
  </div>

<div >
   <div className="hidden md:flex items-center ml-14 font-bold font-serif gap-10">
       <div className="text-black hover:text-blue-600 flex items-center ml-2">
        <FaUserCircle  className="inline-block mr-1" />
       <NavLink className="navlink" to="/alladmin/allstudentdetails">users</NavLink>
    </div>
        <div className="text-black hover:text-blue-600 flex items-center ml-2">
          <BiSolidContact  className="inline-block mr-1"/>
          <NavLink className="navlink" to="/contact">Contact</NavLink>
        </div>
        <div className="text-black hover:text-blue-600 flex items-center ml-2">
          <FaHouseUser className="inline-block mr-1"/>
          <NavLink className="navlink" to="/">Home</NavLink>
        </div>  
        <div className="text-black hover:text-blue-600 flex items-center ml-2">
          <HiAcademicCap className="inline-block mr-1" />
          <NavLink className="navlink" to="/itservices">services</NavLink>
        </div>     
      </div>
</div>
<Outlet/>
  </div>
  
    );

}

export default AllAdmin;
