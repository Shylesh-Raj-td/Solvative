import { useState } from "react";
import {useDispatch} from 'react-redux'
import { TextField } from "../components/TextField";
import {useSelector} from 'react-redux'
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { editReview } from './UserSlice';

export default function Edit({data}) {
  const dispatch = useDispatch()
  const params = useParams()
  const reviews = useSelector(store=> store.reviews)
  const navigate = useNavigate()
  const existingReview = reviews.filter(review=> review._id === params.id)
  const {title,description} = existingReview[0]
    const [values, setValues] = useState({
        title,
        description
      });
    
      const handleEditUser = ()=>{
        setValues({title:'', description:''})
        dispatch(editReview({
          _id: params.id,
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
        <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}
