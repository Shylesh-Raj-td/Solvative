import {createContext, useState, useCallback} from 'react'
import axios from 'axios'

const ReviewContext = createContext()

function Provider({children}){

    const [reviews, setReviews] = useState([])

    const fetchReviews = useCallback(async ()=> {                                 
        const response = await axios.get('http://localhost:3000/reviews')
        setReviews(response.data)
    },[])                                                                       

    const deleteReviewById = async (_id)=>{
        await axios.delete(`http://localhost:3000/reviews/${_id}`);
        
        const updatedReviews = reviews.filter((review)=>{
            return review._id !== _id
        })

        setReviews(updatedReviews)
    }
    const createReview = async (title,description)=>{
        const response = await axios.post('http://localhost:3000/reviews',{
            title,
            description
        })

        const updatedReviews = [
            ...reviews,
            response.data
        ]
        setReviews(updatedReviews)
    }

    const editBookById = async(_id, newTitle, newDescription)=> {

        const response = await axios.put(`http://localhost:3000/reviews/${_id}`,{
              title: newTitle,
              description: newDescription
        })
        const updatedReviews = reviews.map((review)=>{
            if(reviews._id===_id){
                return {...review, ...response.data}
            }
            return review
        })
        setReviews(updatedReviews)
    }
    const valueToShare = {
        reviews,
        fetchReviews,
        createReview,
        deleteReviewById,
        editBookById
    }
    return(
<ReviewContext.Provider value={valueToShare}>
    {children}
</ReviewContext.Provider>
    )
}

export {Provider}
export default ReviewContext