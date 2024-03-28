// NoOfCourses.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Home/auth';

function NoOfCourses() {
   const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

 //get data
 const getCourseUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/admin/courseusers", {
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
const deleteCoursesDetails = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/admin/courseusers/delete/${id}`, {
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
      getCourseUsers();
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

useEffect(() => {
    getCourseUsers();
  }, []); // Added authorizationToken to the dependencies array


  return <>
  <div className='font-bold text-4xl text-slate-700 text-center text underline '>Admin User Data</div>
  
  <div className="overflow-x-auto">
  <table className="w-full bg-blue-50 border-collapse mt-10">
    <thead>
      <tr>
        <th className="border border-blue-300 py-2">FullName</th>
        <th className="border border-blue-300 py-2">Courses</th>
        <th className="border border-blue-300 py-2">Email</th>
        <th className="border border-blue-300 py-2">Phone</th>
        <th className="border border-blue-300 py-2">Update</th>
        <th className="border border-blue-300 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      {users.map((curUser, index) => (
        <tr key={index} className="text-center">
          <td className="border border-blue-300 py-2">{curUser.fullname}</td>
          <td className="border border-blue-300 py-2">{curUser.courses}</td>
          <td className="border border-blue-300 py-2">{curUser.email}</td>
          <td className="border border-blue-300 py-2">{curUser.phone}</td>
          <td className="border border-blue-300 py-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteCoursesDetails(curUser._id)}>
              Delete
            </button></td>
          <td className="border border-blue-300 py-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteCoursesDetails(curUser._id)}>
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

export default NoOfCourses
