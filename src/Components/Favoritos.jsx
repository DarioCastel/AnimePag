import { Link } from 'react-router-dom'
import '../css/favoritos.scss'
import Head from "./Head"
import { TbArrowBigLeftLinesFilled } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import Item from './Item'

const Favoritos = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    const favAnime=localStorage.getItem("listFav")
    var temporalArray
    if (favAnime !== null){
      temporalArray = JSON.parse(favAnime)
    }
    setList(temporalArray)
  }, [])

  return (
    <>
      <div className="containerFavite">
        <Head />
        <div className="contentDetail">
          <div className="btnSection">
            <Link to="/home" className="link">
              <button className="btn back">
                <TbArrowBigLeftLinesFilled /> back to list
              </button>
            </Link>
          </div>
          <div className="titleRela">
            <span>Favorites</span>
          </div>
          <div className="itemsFav">
          {list.map((animeOne, idx)=>{
          return(
            <Item animeId={animeOne.id} key={idx} title={animeOne.title} img={animeOne.img} genres={animeOne.genre}/>
          )
        })}
      </div>
        </div>
      </div>
    </>
  )
}

export default Favoritos