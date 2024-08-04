import axios from 'axios'
import "./WatchCard.css"
import React from 'react'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Watchcard({_id,name,company,image,price,description,Loadwatches}) {


  const deletewatch =async(watchid) =>{

    const response =  await axios.delete(`${process.env.React_APP_API_URL}/watch/${watchid}`)

    toast.success(response.data.message)
    Loadwatches()
}


  return (
    <div className="plant-card">
        <h1 className="plant-title">{name} </h1>
        <img src={image} className="plant-img" alt="watch-img"/>
        <p className="plant-price">price:{price}</p>
         <p>{description}</p>
         <p> company:  {company}</p>
         <div>

         <Link to={`/update/${_id}`}>
         <button 
         type="button" 
         className="action-button"
         > Update</button>
          </Link>

         <button 
         type="button" 
         className="action-button"
         onClick={()=>{
         deletewatch((_id))
         }}> 
         delete</button>
         </div> 
         <Toaster />
    </div>
  )
}

export default Watchcard