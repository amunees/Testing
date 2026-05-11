import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import { Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate ();

    const [form, setForm] = useState({
        username:'',
        email:'',
        password:''
        
    });

const handleChange = (e) =>{ setForm({...form,[e.target.name]: e.target.value});};

const handleSubmit = async (e) => { e.preventDefault();

  try {

    const response = await axios.post('http://localhost:3001/user', form);

    console.log(response.data);

    alert('Signup Successful');

    navigate('/');

  } catch (error) {

    console.error('Signup Failed', error);

    alert('Signup Failed');
  }
};
  return (
    <div>
    <form  onSubmit= {handleSubmit} className='p-6 container'>
        <h2 className='text-2xl font-bold text-center'>Register</h2><br /><br />
        <input name="username" value={form.username} className='w-100 bg-gray-200 rounded-md p-3' type="text" onChange={handleChange} placeholder='Username' /><br /><br />
        <input name="email" type="email" className='w-100 bg-gray-200 rounded-md p-3' value={form.email} onChange={handleChange} placeholder='Email' /><br /><br />
        <input name="password" type="password" className='w-100 bg-gray-200 rounded-md p-3' value={form.password} onChange={handleChange} placeholder='Password' /> <br /><br />
        <button type="submit" className='text-white bg-blue-400 cursor-pointer p-4 rounded-4'>Signup</button><br /><br />
        <Link to="/">Already have an account? Login</Link>
    </form>
    </div>
  );
}


export default Signup;
