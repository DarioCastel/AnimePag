import "../css/detalle.scss";
import { TbArrowBigLeftLinesFilled, TbHeartFilled, TbTrophyFilled, TbThumbUpFilled} from "react-icons/tb";

import Head from "./Head";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {

  const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idAnime = urlParams.get('id');

    const [list, setList] = useState([])

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
  }, [setList])
  console.log(list)
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
                      <button>
                      <TbThumbUpFilled/>
                      </button>
                      <span> LIKE</span>
                    </div>
                </div>
            </div>
            <div className="infoDetail borderSection">
                <div className="backColor">

                informacion
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
