import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Home/auth.jsx'


function Days() {
    const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  
    const getRegistrationCountByPeriod = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/admin/userinterface", {
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


useEffect(() => {
    getRegistrationCountByPeriod();
  }, []); // Added authorizationToken to the dependencies array

  return (
    <>
   <div className='font-bold text-4xl text-slate-700 text-center text underline '>Admin User Data</div>
  
  <div className="overflow-x-auto">
  <table className="w-full bg-blue-50 border-collapse mt-10">
    <thead>
      <tr>
        <th className="border border-blue-300 py-2">StudentId</th>
        <th className="border border-blue-300 py-2">RegistrationDate</th>
        <th className="border border-blue-300 py-2">Weeks</th>
        <th className="border border-blue-300 py-2">Months</th>
        <th className="border border-blue-300 py-2">Days</th>
       
      </tr>
    </thead>
    <tbody>
      {users.map((curUser, index) => (
        <tr key={index} className="text-center">
        
          <td className="border border-blue-300 py-2">{curUser.studentId}</td>
          <td className="border border-blue-300 py-2">{curUser.registrationDate}</td>
          <td className="border border-blue-300 py-2">{curUser.week}</td>
          <td className="border border-blue-300 py-2">{curUser.month}</td>
          <td className="border border-blue-300 py-2">{curUser.days}</td>
               
            
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>
  )
}

export default Days