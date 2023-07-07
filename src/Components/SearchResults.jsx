import React, { useEffect, useState } from 'react'
import Head from './Head'
import axios from 'axios';
import Swal from 'sweetalert2';
import Item from './Item';
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { Navigate, useLocation } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const SearchResults = () => {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idAnime = urlParams.get('var1');

    const [list, setList] = useState([])

  const endPoint=`https://api.jikan.moe/v4/anime?q=${idAnime}`

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

//head falso
  const [search, setSearch] = useState("")
  const location = useLocation()
  const handlerSubmit =(e)=>{
    e.preventDefault()
    setSearch(e.target.search.value.trim())
    if (search == ""){
      return(
        Swal.fire('need a Anime/Manga name')
      )
    }
  }

  useEffect(() => {
    axios.get(endPoint)
  .then(Response=>{
    const dataListAnime=Response.data.data;
    setList(dataListAnime)
    
  })
  .catch(error =>{
    Swal.fire(`Se produjo un error ${error}`)
  })
  }, [location])

  return (
    <div className="container">
         {search !=""&& <Navigate to={`/result?var1=${search}`}/>}
    <div className="containerHead">
        <div className="logo">
            <span>M</span>o<span>T</span>o<span>R</span>
        </div>
        <div className="instruction">
        Search for information about your favorite anime
        <TbArrowBigRightLineFilled/>
        </div>
        <div className="search">
        <BiSearchAlt className='icon'/>
            <form onSubmit={handlerSubmit}>
                <input name="search" type="text" placeholder='Ej: Naruto' />
                <button className='btn'>Search</button>
            </form>
        </div>
    </div>
        <div className="titleRela">
        <span>Search Results</span>
      </div>
      <div className="items">
        {list.map((animeOne, idx)=>{
          return(
            <Item animeId={animeOne.mal_id} key={idx} title={animeOne.title} img={animeOne.images.jpg.image_url} genres={animeOne.genres}/>
          )
        })}
      </div>
    </div>
  )
}

export default SearchResults