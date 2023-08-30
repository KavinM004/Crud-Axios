import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import App from './App.css'

function Home() {
    const [data,setData] = useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete=(id)=>{
        const confirm=window.confirm('Would you like to Delete!')
        if(confirm){
            axios.delete('http://localhost:3000/users/' +id)
            .then(res=>{
                    location.reload()
            }).catch(err=> console.log(err)); 
        }
  }
  return (
    <div className='Home'>
    <div className='d-flex flex-column justify-content-center align-items-center bg-white vh-100'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4' id='border'>
            <div className='d-flex justify-content-end'>
                <Link to='/create' className='btn btn-success'>Add+</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i)=>( 
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} id='btn' className='btn btn-sm btn-info me-2'>Read</Link>
                                    <Link to={`/update/${d.id}`} id='btn'className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e=>handleDelete(d.id)}id='btn' className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Home