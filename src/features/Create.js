// import { useState } from "react";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { TextField } from "../components/TextField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { addReview } from './UserSlice';

export default function Create({reviewsDetails,onSubmit}) {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title: "",
        description: "",
      });
    
      const handleAddUser = ()=>{
        setValues({title:'', description:''})
        dispatch(addReview({
          _id: '4',
          title: values.title,
          description: values.description
        }))
        navigate('/')
      }
    
  return (
    <div>
        <h2>Create a Review</h2>
        <TextField
        label="Title"
        value={values.title}
        onChange={(e)=>setValues({...values, title: e.target.value})}
        inputProps={
            {type:"text", placeholder:"Title"}
        }/>
        <br/>
        <TextField
        label="Description"
        value={values.description}
        onChange={(e)=>setValues({...values, description: e.target.value})}
        inputProps={
            {type:"text", placeholder:"Content"}
        }/>
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}
