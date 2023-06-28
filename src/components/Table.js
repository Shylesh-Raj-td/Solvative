import React, { useEffect, useState } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Edit from './Edit'
export default function Table() {
    const [data, setData] = useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:3000/reviews')
        .then((res)=> setData(res.data))
        .catch(err=> console.log(err))
    },[])

  return (
    <div className='container'>
        <Link to="/reviews/:id">{Edit}</Link>
        <Routes>
            <Route path="/reviews/:id" element={<Edit data={data}/>}></Route>
        </Routes>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                     data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Id}</td>
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                     ))
                }
            </tbody>
        </table>
    </div>
  )
}
