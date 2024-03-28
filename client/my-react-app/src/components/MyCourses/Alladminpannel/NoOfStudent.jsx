// NoOfStudent.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Home/auth';
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';


const NoOfStudent = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  
    const getAllUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/admin/users", {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        const data = await response.json();
        console.log(`user ${data}`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

     //  delete the user on delete button
const deleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/admin/users/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: authorizationToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`User deleted successfully. Response: ${data}`);

    if(response.ok){
      getAllUsers();
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

useEffect(() => {
    getAllUsers();
  }, []); // Added authorizationToken to the dependencies array

  return <>
  <div className='font-bold text-4xl text-slate-700 text-center text underline '>Admin User Data</div>
  
  <div className="overflow-x-auto">
  <table className="w-full bg-blue-50 border-collapse mt-10">
    <thead>
      <tr>
        <th className="border border-blue-300 py-2">FirstName</th>
        <th className="border border-blue-300 py-2">LastName</th>
        <th className="border border-blue-300 py-2">Email</th>
        <th className="border border-blue-300 py-2">Phone</th>
        <th className="border border-blue-300 py-2">Update</th>
        <th className="border border-blue-300 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      {users.map((curUser, index) => (
        <tr key={index} className="text-center">
        
          <td className="border border-blue-300 py-2">{curUser.fname}</td>
          <td className="border border-blue-300 py-2">{curUser.lname}</td>
          <td className="border border-blue-300 py-2">{curUser.email}</td>
          <td className="border border-blue-300 py-2">{curUser.phone}</td>
          <td className="border border-blue-300 py-2">
          <Button className='bg-red-500  text-white px-1 py-1 rounded'>
                <NavLink to= {`/alladmin/allstudentdetails/${curUser._id}/update`}>Update </NavLink>
         </Button>
          </td>
          <td className="border border-blue-300 py-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteUser(curUser._id)}>
              Delete
            </button>
            
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    
   </>;
};

export default NoOfStudent; // Export NoOfStudent as default
