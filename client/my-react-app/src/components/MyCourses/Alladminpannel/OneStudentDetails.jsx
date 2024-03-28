// NoOfStudent.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Home/auth';

const NoOfStudent = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const UserDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/user/userdetails?id=${id}`, {
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

  // Assuming ID is coming from req.body
  // useEffect((req, res) => {
  //   const id = req.body._id; // Assuming ID is coming from req.body
  //   if (!id) {
  //     console.error("ID is required in request body");
  //     return;
  //   }
  //   UserDetails(id);
  // }, [authorizationToken, setUsers]);

  // Uncomment and implement the deleteUser function
  // const deleteUser = async (id) => {
  //   try {
  //     // Implement delete logic here
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
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
                <td className="border border-blue-300 py-2">Edit</td>
                <td className="border border-blue-300 py-2">
                  {/* <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => deleteUser(curUser._id)}>
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoOfStudent;
