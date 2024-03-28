// Import necessary libraries and styles
'use client';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoImage from '../Asset/img/logo.png'; 
import { Button, Dropdown } from 'flowbite-react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import {Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import { HiClock } from 'react-icons/hi';
import { useAuth } from '../Home/auth';


const HeaderNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const { isLoggedIn } = useAuth();
  
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the 'Login' page
  };
  const handleLogoutClick = () => {
    navigate('/logout'); // Navigate to the 'Logout' page
  };

  
  


  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
    
    <nav className="bg-white flex items-center justify-between mt-0">  
      <div className="flex items-center  ">
        <NavLink to="/" className="flex items-center ml-32 mr-5">
          <img
            src={LogoImage}
            alt="logo"
            className="inline w-24 md:w-30 md:mr-2 transition-transform transform-gpu hover:blur-0 mr-0"
          />
          {/*<div className='text-xl font-bold mr-10 -mt-1 -ml-2'>
            PIYUSH_ACADEMY
            <div className='text-sm'>
              CERTIFIED|CONSULTING|CULTURE
            </div>
  </div>*/}
        </NavLink>

        {/* Dropdown Content (conditionally rendered based on state) */}
        <Dropdown label="Courses " className="relative ml-24 w-1/3 font-bold ">
          <Dropdown.Header>
            <span className="block text-lg font-bold  text-gray-900 font-serif text-center ">Browse by Domains</span>

          </Dropdown.Header>

          <div className="origin-top-left left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 font-medium ring-opacity-5 ring-black  ">
           

      <Dropdown.Item
         onMouseEnter={() => handleItemClick('   Data Science and Bussiness Analytics')}
         onMouseLeave={() => handleItemClick(null)}
       className="group hover:bg-cyan-950 relative"
      >
       {/* Dropdown item content */}
      Data Science and Bussiness Analytics

  {/* Cards related to  Data Science and Bussiness Analytics */}
{selectedItem === '   Data Science and Bussiness Analytics' && (
    <div className="flex flex-wrap justify-between w-96  absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/datascience">
          <Card href="#" className="mb-4  ">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#"   className="mb-4  ">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick('Cloud Computing')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  Cloud Computing

  {/* Cards related to Cloud Computing */}
  {selectedItem === 'Cloud Computing' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/cloudcomputing">
      <Card href="#" className=" mb-4 ">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick('Cyber Security')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  Cyber Security

  {/* Cards related to Python Programming */}
  {selectedItem === 'Cyber Security' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/cybersecurity">
      <Card href="#" className="mb-4 ">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className="mb-4 ">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>


<Dropdown.Item
  onMouseEnter={() => handleItemClick('UI/UX Devlopment')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  UI/UX Devlopment

  {/* Cards related to Python Programming */}
  {selectedItem === 'UI/UX Devlopment' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/ui/uxdev">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4 ">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick(' Software Devlopment')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  Software Devlopment

  {/* Cards related to Python Programming */}
  {selectedItem === ' Software Devlopment' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/softwaredev">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>
<Dropdown.Item
  onMouseEnter={() => handleItemClick(' DI and Database')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
   DI and Database

  {/* Cards related to Python Programming */}
  {selectedItem === ' DI and Database' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/dianddatabase">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick(' Devops')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
   Devops

  {/* Cards related to Python Programming */}
  {selectedItem === ' Devops' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/devops">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick('Management')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  Management

  {/* Cards related to Python Programming */}
  {selectedItem === ' Management' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/management">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick(' IT Services and Mangement ')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  IT Services and Mangement

  {/* Cards related to Python Programming */}
  {selectedItem === ' IT Services and Mangement' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/itservices">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

<Dropdown.Item
  onMouseEnter={() => handleItemClick(' Automation ')}
  onMouseLeave={() => handleItemClick(null)}
  className="group hover:bg-cyan-950 relative"
>
  {/* Dropdown item content */}
  Automation

  {/* Cards related to Python Programming */}
  {selectedItem === ' Automation' && (
    <div className="flex flex-wrap gap-2 w-96  justify-between absolute top-0 left-full bg-white rounded-md shadow-lg p-4">
       <NavLink className="navlink" to="/automation">
      <Card href="#" className=" mb-4">
               <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
               Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
               </Card>
              <Card href="#" className=" mb-4">
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Carrer start with Software Devlopment
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                   Learning more about software devlopment
                  </p>
                  <Badge color="gray" icon={HiClock}>
                  6 month
                 </Badge>
            </Card>
            </NavLink>
    </div>
  )}
</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </div>
        </Dropdown>
      </div>

      {/* Search Bar */}
      <div className=" ml-4">
        <input
          type="text"
          placeholder="Search Courses..."
          className="border p-2 w-60  rounded-md focus:selection:"
        />
      </div>
      {toggle ? (
        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-3sm md:hidden block' />
      ) : (
        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-black text-3sm md:hidden block' />
      )}
      <div className="hidden md:flex items-center ml-14 font-bold font-serif gap-2">
        <div className="text-black hover:text-blue-600 ml-4">
          <NavLink className="navlink" to="/copratetraining">Corporate Training</NavLink>
        </div>
        <div className="text-black hover:text-blue-600 ml-4">
          <NavLink className="navlink" to="/hirefromus">Hire From Us</NavLink>
        </div>
        <div className="text-black hover:text-blue-600 ml-4">
          <NavLink className="navlink" to="/explorecourses">Explore Courses</NavLink>
        </div>      
      </div>
      <>

    <div>
        {isLoggedIn ? (
         <div>  
        {/* <div className="text-black hover:text-blue-600 ml-4">
          <NavLink className="navlink" to="/alladmin">My Courses</NavLink>
        </div>     */}
          <Button className='hover:text-gray-900 mr-32 font-bold font-serif' onClick={handleLogoutClick}>
            Logout
          </Button>
          </div>
        ) : (
          <>
          <Button className='hover:text-gray-900 mr-32 font-bold font-serif' onClick={handleLoginClick}>
            Login
          </Button>
          </>
        )
          
        }
      </div>


        {/* <Button onClick={() => setOpenModal(true)} className='hover:text-gray-900 mr-32 font-bold font-serif'>Login</Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 dark:text-white font-bold">Login </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="amrita@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button onClick={() => setOpenModal(true)} >Log in</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a href="register" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                  <NavLink className="navlink" to="/register"></NavLink>
                </a>
                
              </div>
            </div>
          </Modal.Body>
        </Modal> */}
      </>
      {/* Responsive Menu */}
      
      <div className={` duration-300 md:hidden w-full h-screen text-white fixed bg-blue-400 top-[90px]
              ${toggle ? 'left-[0]' : 'left-[-100%]'}
      `}>
        <div className="text-white hover:text-blue-600 ml-3 p-3">
          <NavLink className="navlink" to="/copratetraining">Corporate Training</NavLink>
        </div>
        <div className="text-white hover:text-blue-600 ml-3 p-3">
          <NavLink className="navlink" to="/hirefromus">Hire From Us</NavLink>
        </div>
        <div className="text-white hover:text-blue-600 ml-3 p-3">
          <NavLink className="navlink" to="/explorecourses">Explore Courses</NavLink>
        </div>  
      </div>
       
    </nav>
  );
};

export default HeaderNavbar;
