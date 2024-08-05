import'./Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Watchcard from "../../components/WatchCard/WatchCard.js"
import { Link } from 'react-router-dom';
import Imgadd from './Add.png'

function Home() {


    const [watches,setwatches]= useState([])


    const Loadwatches =  async ()=>{
        const response = await axios.get(`https://watch-server49.onrender.com/watches`)
        setwatches(response.data.data) 
      }

    useEffect(()=>{
      Loadwatches()  
    },[])

  return (
    <div>
        <h1>watches</h1>
     {
        watches.map((watch,i)=>{

            const {_id,
                name,
               company,
                image,
                price,
                description} = watch

        return (<Watchcard
          key={i}
          _id={_id}
          name={name}
          company={company}
          image={image}
          price={price}
          description={description}
         Loadwatches ={Loadwatches }
         />
        )
        })
           
     }
     <Link to="/add">
     <img src={Imgadd} className='add-btn' alt="add"/>
     </Link>

    </div>
  )
}


export default Home
