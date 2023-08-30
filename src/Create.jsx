import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        phone:''
    })

    const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shawdow px-5 pt-3 pb-5 rounded'>
            <h4>Add User</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id='name' name='name' className='form-control' placeholder='Enter Your Name...' 
                    onChange={e=> setValues({...values,name:e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="email">E-mail :</label>
                    <input type="email" id='email' name='email' className='form-control' placeholder='Enter Your E-mail...' 
                    onChange={e=> setValues({...values,email:e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="phone">Phone no :</label>
                    <input type="text" id='phone' name='phone' className='form-control' placeholder='Enter Your Phone Number...' 
                    onChange={e=> setValues({...values,phone:e.target.value})}/>
                </div>
                <button className='btn btn-success'>Sumbit</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Create