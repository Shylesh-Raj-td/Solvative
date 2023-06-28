import React, { useState } from 'react'
import axios from 'axios'

export default function Edit({data}) {
    const [title, setTitle] =useState("")
    const [descp, setDescp] =useState("")
    const handleSubmit = (event)=>{
        event.preventdefault();
        const Id = data[data.length-1].Id + 1
        axios.post('http://localhost:3000/reviews',{
         Id,
         title,
         descp
        })
        .then((res)=> {
          res.location.reload()
        })
        .catch(err=> console.log(err))
     }
  return (
    <div>
        <div className='form-div'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Title' onChange={e=> setTitle(e.target.value)}/>
                <input type='text' placeholder='Enter Description' onChange={e=> setDescp(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    </div>
  )
}
