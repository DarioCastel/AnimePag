
import axios from "axios";
import Swal from "sweetalert2";

import Head from "./Head"
import Slider from "./Slider"
import Item from "./Item"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const home = () => {

const [list, setList] = useState([])


  const endPoint="https://api.jikan.moe/v4/top/anime"

  useEffect(() => {
    axios.get(endPoint)
  .then(Response=>{
    const dataListAnime=Response.data.data;
    setList(dataListAnime)
  })
  .catch(error =>{
    Swal.fire(`Se produjo un error ${error}`)
  })
  }, [setList])
  
  



  const storageValue = localStorage.getItem("tokenPag")
  return (
    <>
    {storageValue == null && <Navigate to="/"/>}
      <div className="container">
      <Head />
      <Slider />
      <div className="titleRela">
        <span>Lista General</span>
      </div>
      <div className="items">
        {list.map((animeOne, idx)=>{
          return(
            <Item key={idx} title={animeOne.title} img={animeOne.images.jpg.image_url} genres={animeOne.genres}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default home
