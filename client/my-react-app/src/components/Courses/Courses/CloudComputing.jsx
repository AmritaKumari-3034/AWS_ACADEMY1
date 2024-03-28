import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../Asset/img/cloudlogo.jpg';
import { useNavigate } from 'react-router-dom';

function CoursesDetailSchema() {
   const [user, setUser] = useState({
    fullname: "",
    courses: "",
    email: "",
    password: "",
    phone: "",
    
  });

  const navigate = useNavigate();
 // const { storeTokenInLS } = useAuth();
  //handling the input values
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  //handling the form submission 
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); // using user.email instead of email
    try {
      const response = await fetch(`http://localhost:8000/api/user/courseregister`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // sending user object
      });

      if(response.ok){
        const res_data = await response.json();
        console.log(" res from server", res_data )
       // store the token to localhost
       // storeTokenInLS(res_data.token);
        console.log(response);
        setUser({fullname: "", courses: "", email: "", password: "",  phone: "", });
        navigate("/cloudcomputing");
      }
      console.log(response);
    } catch (error) {
      console.log("courseregister", error);
    }
  };
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
      <form className='flex max-w-md flex-col gap-4 bg-slate-50 ml-20 mt-6' onSubmit={handleSubmit}>
        <div className='text-xl items-center justify-center font-bold'>Register for Courses</div>
        <div >
              <div className="mb-2 block">
                <Label htmlFor='fullname'>Full Name</Label>
              </div>
              <TextInput id='fullname' name='fullname' value={user.fullname} onChange={handleInput} placeholder='Full Name' required shadow />
            </div>
        <div >
              <div className='mb-2 block'>
                <Label htmlFor='email'>Email</Label>
              </div>
              <TextInput id='email' name='email' value={user.email} onChange={handleInput} type='email' placeholder='name@flowbite.com' required shadow />
            </div>
         <div >
              <div className="mb-2 block">
                <Label htmlFor="password">Password</Label>
              </div>
              <TextInput id="password" name='password' value={user.password} onChange={handleInput} type="password" required shadow />
            </div>
       <div >
              <div className='mb-2 block'>
                <Label htmlFor='mobileNumber'>Mobile Number</Label>
              </div>
              <TextInput id='mobileNumber' name='phone' value={user.phone} onChange={handleInput} type='tel' placeholder='Mobile Number' required shadow />
            </div>
        
       <div >
              <div className='mb-2 block'>
                <Label htmlFor='courses'>Courses </Label>
              </div>
              <TextInput id='courses' name='courses' value={user.courses} onChange={handleInput} type='courses' placeholder='Courses' required shadow />
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

export default  CoursesDetailSchema;
