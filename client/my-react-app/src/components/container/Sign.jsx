import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Home/auth.jsx"


export default function UserSchema() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  //handling the input values
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  //handling the form submission 
  //handling the form submission 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); // using user.email instead of email
    try {
      const response = await fetch(`http://localhost:8000/api/user/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(user), // sending user object
      });

      if(response.ok){
        const res_data = await response.json();
        console.log(" res from server")
       // store the token to localhost
        storeTokenInLS(res_data.token);
        setUser({fname: "", lname: "", email: "", password: "", phone: "",});
        navigate("/login");
      }
      

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  }

  return (
    <div>
      <div className='flex bg-violet-950'>
        <div className='text-center'>
          <h1 className=' text-neutral-100 md-45  ml-32 text-xl md:text-[30px] md:p-[24px]'>
            Sign Up
          </h1>
        </div>
      </div>
      <div>
        {/* Registration Form */}
        <form className='flex flex-col max-w-2xl  gap-5 mx-auto bg-slate-50 mt-16' onSubmit={handleSubmit}>

          {/* First Name and Last Name Section */}
          <div className='flex flex-col md:flex-row md:gap-4 w-full'>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='fullname'>First Name</Label>
              </div>
              <TextInput id='fullname' name='fname' value={user.fname} onChange={handleInput} placeholder='First Name' required shadow />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='lastName'>Last Name</Label>
              </div>
              <TextInput id='lastName' name='lname' value={user.lname} onChange={handleInput} placeholder='Last Name' required shadow />
            </div>
          </div>

          {/* Email and Password Section */}
          <div className='flex flex-col md:flex-row md:gap-4 w-full'>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='email'>Email</Label>
              </div>
              <TextInput id='email' name='email' value={user.email} onChange={handleInput} type='email' placeholder='name@flowbite.com' required shadow />
            </div>
            <div className='w-full md:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="password">Password</Label>
              </div>
              <TextInput id="password" name='password' value={user.password} onChange={handleInput} type="password" required shadow />
            </div>
          </div>

          {/* Mobile Number and Company Name Section */}
          <div className='flex flex-col md:flex-row md:gap-4 w-full'>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='mobileNumber'>Mobile Number</Label>
              </div>
              <TextInput id='mobileNumber' name='phone' value={user.phone} onChange={handleInput} type='tel' placeholder='Mobile Number' required shadow />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='companyName'>Company Name</Label>
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
    </div>
  );
}

