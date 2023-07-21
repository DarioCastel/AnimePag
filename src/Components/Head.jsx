import { useEffect, useState } from 'react';
import '../css/head.scss'
import { BiSearchAlt } from "react-icons/bi";
import { TbArrowBigRightLineFilled, TbHeart } from "react-icons/tb";
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Head = () => {
const [search, setSearch] = useState("")

  const handlerSubmit =(e)=>{
    e.preventDefault()
    setSearch(e.target.search.value.trim())
    if (search.length === 0){
      return(
        Swal.fire('need a Anime/Manga name')
      )
    }
  }

  useEffect(() => {
    
  }, [search])
  
  
  
    
      

  return (
    <>
    {search !=""&& <Navigate to={`/result?var1=${search}`}/>}
    <div className="containerHead">
        <div className="logo">
            <span>M</span>o<span>T</span>o<span>R</span>
        </div>
        <div className="instruction">
        Search for information about your favorite anime
        <TbArrowBigRightLineFilled/>
        </div>
        <Link to="/favorite" className="link">
      <div className="favorite">
        Favorites
        <TbHeart/>
      </div>
      </Link>
        <div className="search">
        <BiSearchAlt className='icon'/>
            <form onSubmit={handlerSubmit}>
                <input name="search" type="text" placeholder='Ej: Naruto' />
                <button className='btn'>Search</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Head