import React, { useState } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../Home/auth';


 export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      console.log("login form",response);

      if(response.ok){
        const res_data = await response.json();
        console.log(" res from server", res_data)
       // store the token to localhost
        storeTokenInLS(res_data.token);
        alert("Login Successful");
        setUser({email: "", password: ""})
      }else{
        alert("Login failed");
        console.log("invalid credencial");
      }
    } catch (error) {
      
    }
    console.log(user);
    const loginSuccess = true;

    if (loginSuccess) {
      navigate('/'); // Navigate to the home page
    }
  }

  return (
  <div>
    <div className='flex bg-violet-950'>
        <div className='text-center '>
          <h1 className=' text-neutral-100 md-45  ml-32 text-xl md:text-[30px] md:p-[24px]'>
            Login
          </h1>
        </div>
      </div>
    <form className="flex max-w-md flex-col gap-4 mx-auto mt-4 mb-4" onSubmit={handleSubmit}>
      <div >
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" name="email" type="email" placeholder="amrita@gmail.com" required onChange={handleInput} value={user.email} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" name="password" type="password" required onChange={handleInput} value={user.password} />
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
      <Button  type="submit">Login</Button>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a href="register" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                  <NavLink className="navlink" to="/register"></NavLink>
                </a>
                
          </div>
      </form>
    </div>
  );
}

export default Login;
