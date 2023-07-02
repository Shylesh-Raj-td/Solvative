// import reviews from "../db.json";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import Button from "./Button";
import { deleteReview } from "../features/UserSlice";

export default function Table() {
  
  const reviews = useSelector(store=> store.reviews)
  const dispatch = useDispatch()
  const handleRemove = (_id)=>{
       dispatch(deleteReview({
        _id
       }))
  }
  return (
    <div className="table-container" >
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>{review._id}</td>
              <td>{review.title}</td>
              <td>{review.description}</td>
              <td>
                <nav>
                  <Link to={`/${review._id}`} style={{color:"white"}}>Edit</Link>
                </nav>
              </td>
              <td>
              <button onClick={()=>handleRemove(review._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/new'><Button>Create Review</Button></Link>
    </div>
  );
}
