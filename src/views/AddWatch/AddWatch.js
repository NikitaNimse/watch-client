import axios from 'axios'
import './AddWatch.css'
import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'


function Addwatch() {

  const [name,setName] = useState("")
  const [company,setcompany] = useState("")
  const [price,setPrice] = useState(0)
  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")


  

  const addwatch = async()=>{

    toast.loading("Adding watch...")
    if(!name ||  !company ||  !price  ||  !image || !description ){
      toast.error("please Enter all detail")
      return
    }
    

    const response =  await axios.post(`${process.env.React_APP_API_URL}/watch`,{
      name: name,
      company: company,
      price: price,
      image: image,
      description: description

    })
    toast.dismiss()
   toast.success(response.data.message)
   setName("")
   setcompany("")
   setPrice("")
   setImage("")
   setDescription("")
  }

  return (
    <div>
      <h1>Add watch</h1>
      <form className='addplant-form'>
          <input 
          className='plant-input' 
          type= "text" 
          placeholder='Enter watch name'
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
          placeholder='Enter watch description'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />

        </form>
        <button type='button' onClick={addwatch} className='form-btn'>Add product</button>
                        
          <Link to="/"> 
          <button type='button'  className='form-btn'>Show all product</button>
         </Link>              

        <Toaster/>
        
        
        </div>
  )
}

export default Addwatch
