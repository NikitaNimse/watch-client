import React, { useEffect } from 'react'
import "./Updatewatch.css"
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios';

function Updatewatch() {
    const {id} = useParams();

    const [name,setName] = useState("")
    const [company,setcompany] = useState("")
    const [price,setPrice] = useState(0)
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")


  const updatewatch = async() => {
    const response =await axios.put(`${process.env.React_APP_API_URL}/watch/${id}`,{
      name: name,
      company: company,
      price: price,
      image: image,
      description: description
    })

    toast.success(response.data.message)

  }

const loadwatch=async (id) =>{

    if(!id){
      return
    }
    const response =await axios.get(`${process.env.React_APP_API_URL}/watch/${id}`)
    const{name,image,company,price,description}= response.data.data

    setName(name)
    setcompany(company)
    setPrice(price)
    setImage(image)
    setDescription(description)
  }


useEffect(()=>{
  
   loadwatch(id)
    
    
   },[id])

  return (
    <div>

        <h1> Update watch: {id} </h1>

        <form className='addplant-form'>
          <input 
          className='plant-input' 
          type= "text" 
          placeholder='Enter product name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

           <input 
          className='plant-input'
          type= "text" 
          placeholder='Enter  company'
          value={company}
          onChange={(e)=>setcompany(e.target.value)}
          />

         <input  
          className='plant-input'
          type= "number" 
          placeholder='Enter price'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          />
          <img src={image} className='img-pre' alt="img-preview" />

          <input 
          className='plant-input' 
          type= "text" 
          placeholder='Enter Image'
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          />

         <input  
         className='plant-input'
          type= "text" 
          placeholder='Enter Plant description'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />

        </form>
        <button type='button' onClick={updatewatch} className='form-btn'>Update product</button>
                        
                        <Link to="/"> 
                        <button type='button'  className='form-btn'>Show all product</button>
                       </Link> 


                       <Toaster/>            

   
    </div>
  )
}




export default Updatewatch