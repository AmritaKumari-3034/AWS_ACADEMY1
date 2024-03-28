import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Home/auth';
import { Button,  Label, TextInput } from 'flowbite-react';
import { useParams } from 'react-router-dom';


 export const  Updateuserform = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  


  const params = useParams();
  console.log("params single user: " + params);
  const { authorizationToken } = useAuth
     //  get the single  user from the registered account
const getSingleUserData = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/admin/users/${params._id}`, {
      method: 'GET',
      headers: {
        Authorization: authorizationToken,
      },
    });

    const data = await response.json();
    console.log(`User deleted successfully. Response: ${data}`);
    setData(data);

    // if(response.ok){
    //   getAllUsers();
    // }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};



useEffect(() => {
    getSingleUserData();
  }, []); // Added authorizationToken to the dependencies array

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
        ...data,
        [name]: value,
    });
}

    //to update the data dynamically
    const  handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch(`http://localhost:8000/api/admin/users/update/${params._id}`, {
      method: 'PATCH',
      headers: {
         "Content-Type": "application/json",
        Authorization: authorizationToken,
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    const loginSuccess = true;

    if (loginSuccess) {
      console.log(" Updated Succussfully ") // Navigate to the home page
    }
    
    } catch (error) {
        console.log(error);
    }

  };
  return <>
  <div className='font-bold text-4xl text-slate-700 text-center text underline '>Admin User Data</div>
   <form className='flex flex-col max-w-2xl  gap-5 mx-auto bg-slate-50 mt-16' onSubmit={handleSubmit}>
               <div className='flex flex-col md:flex-row md:gap-4 w-full'>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='firstname'>First Name</Label>
              </div>
              <TextInput id='firstname' name='fname' autoComplete='off' value={data.fname} onChange={handleInput} placeholder='First Name' required shadow />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='lastName'>Last Name</Label>
              </div>
              <TextInput id='lastName' name='lname' autoComplete='off' value={data.lname} onChange={handleInput} placeholder='Last Name' required shadow />
            </div>
          </div>

          {/* Email and Password Section */}
         
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='email'>Email</Label>
              </div>
              <TextInput id='email' name='email' autoComplete='off' value={data.email} onChange={handleInput} type='email' placeholder='name@flowbite.com' required shadow />
            </div>


          {/* Mobile Number and Company Name Section */}
          <div className='flex flex-col md:flex-row md:gap-4 w-full'>
            <div className='w-full md:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='mobileNumber'>Mobile Number</Label>
              </div>
              <TextInput id='mobileNumber' name='phone' autoComplete='off' value={data.phone} onChange={handleInput} type='tel' placeholder='Mobile Number' required shadow />
            </div>
          </div>
      
      <Button type="submit">Update</Button>
    </form>
  
    
   </>;
};
export default Updateuserform
