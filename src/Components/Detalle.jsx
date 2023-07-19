import "../css/detalle.scss";
import { TbArrowBigLeftLinesFilled, TbHeartFilled, TbTrophyFilled, TbThumbUpFilled} from "react-icons/tb";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import Head from "./Head";
import Sinapsis from "./Sinapsis";
import Trailer from "./Trailer";
import Capitulos from "./Capitulos";

const Details = () => {

  const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idAnime = urlParams.get('id');

    const [like, setLike] = useState("like")
    const [list, setList] = useState([])
    const [menu, setMenu] = useState("sinapsis")

  const endPoint=`https://api.jikan.moe/v4/anime/${idAnime}/full`


  useEffect(() => {
    axios.get(endPoint)
  .then(Response=>{
    const dataListAnime=Response.data.data;
    setList(dataListAnime)
    
  })
  .catch(error =>{
    Swal.fire(`Se produjo un error ${error}`)
  })
  let listaAnimeFavoritos = localStorage.getItem("listFav")
  handleValidation(listaAnimeFavoritos)
  var temporalArray

    if (listaAnimeFavoritos === null){
      temporalArray =  []
    }else{
      temporalArray = JSON.parse(listaAnimeFavoritos)
    }
    handleValidation(temporalArray)
  }, [])

  const handleValidation=(data)=>{
    data.map((temp)=>{
      if (temp.id == list.mal_id){
        setLike("dislike")
      }else{
        setLike("like")
      }
    })
  }

  const handleLike=()=>{
    const dataAnime={
      id:list.mal_id,
      img:list.images.jpg.large_image_url,
      title:list.title,
      genre:list.genres
    }
    
    let listaAnimeFavoritos = localStorage.getItem("listFav")
    
    var temporalArray

    if (listaAnimeFavoritos === null){
      temporalArray =  []
    }else{
      temporalArray = JSON.parse(listaAnimeFavoritos)
    }
    handleValidation(temporalArray)
    temporalArray.push(dataAnime)
    localStorage.setItem("listFav",JSON.stringify(temporalArray))
    console.log(temporalArray)
  }
  

  return (
    <>
      <div className="container">
        <Head />
        <div className="contentDetail">
          <div className="btnSection">
            <Link to="/home" className="link">
              <button className="btn back">
                <TbArrowBigLeftLinesFilled /> back to list
              </button>
            </Link>
          </div>

          <div className="detailSection">
            <div className="imgDetail borderSection">
                <div className="backColor">
                    <img src={list?.images?.jpg?.large_image_url} alt="portada" />
                    <h2>{list.title}</h2>
                    <h2>{list.title_japanese}</h2>
                    <div className="infoFav">
                      <span> <TbHeartFilled/> {list.favorites}</span>
                      <span> <TbTrophyFilled/> {list.rank}</span>
                    </div>
                    <div className="infoFav">
                    <button className="button btnlike" onClick={handleLike}>
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text"> {like === "like"? "like":"dislike"}</span>
                    </span>
                  </button>
                    </div>
                </div>
            </div>
            <div className="infoDetail borderSection">
                <div className="backColor">
                  <div className="btncontainer">
                    <button className={`btn back ${menu=== "sinapsis"?"active":""}`} onClick={()=>{setMenu("sinapsis")}}>Synopsis</button>
                    <button className={`btn back ${menu=== "trailer"?"active":""}`} onClick={()=>{setMenu("trailer")}}>Trailer</button>
                    <button className={`btn back ${menu=== "capitulos"?"active":""}`} onClick={()=>{setMenu("capitulos")}}>Episodes</button>
                  </div>
                {menu === "sinapsis" && <Sinapsis 
                synopsis={list.synopsis} 
                score={list.score}
                episodes={list.episodes}
                status={list.status}
                year={list.year}
                genres={list.genres}
                />}
                {menu === "trailer" && <Trailer trailer={list.trailer.url}/>}
                {menu === "capitulos" && <Capitulos id={list.mal_id}/>}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
