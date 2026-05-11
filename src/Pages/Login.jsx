import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate ();

    const [form, setForm] = useState({
        email:'',
        password:''
        
    });

    const handleChange = (e) =>{setForm({...form,[e.target.name]: e.target.value});};
    

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      'http://localhost:3001/user',
      form
    );

    console.log(response.data);

    alert('Login Successful');

    navigate('/Home');

  } catch (error) {

    console.error('Login Failed', error);

    alert('Login Failed');
  }
};
  return (
    <div>
    <form  onSubmit= {handleSubmit} className='p-6 container'>
        <h2 className='text-2xl font-bold text-center '>Login</h2><br /><br />
        <input name="email" type="email" className='w-100 bg-gray-200 rounded-md p-3' value={form.email} onChange={handleChange} placeholder='Email' /><br /><br />
        <input name="password" type="password" className='w-100 bg-gray-200 rounded-md p-3' value={form.password} onChange={handleChange} placeholder='Password' /> <br /><br />
        <button type="submit" className='text-white w-100 bg-blue-400 cursor-pointer rounded-md p-4 rounded-4'>Login</button><br /><br />
        <Link to="/signup">Don't have an account? Signup</Link>
    </form>
    </div>
  )
}

export default Login
