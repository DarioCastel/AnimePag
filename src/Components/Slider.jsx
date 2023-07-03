import { useEffect, useState } from "react";
import "../css/slider.scss";
import Genero from "./Genero";
import axios from "axios";
import Swal from "sweetalert2";


const Slider = () => {
  const [list, setList] = useState([])
  const search ="shingeki%20no%20kyojin";

  const endPoint=`https://api.jikan.moe/v4/anime?q=${search}`

  useEffect(() => {
    axios.get(endPoint)
  .then(Response=>{
    const dataListAnime=Response.data.data;
    setList(dataListAnime.slice(0, 1).shift())
    console.log(list)
    
  })
  .catch(error =>{
    Swal.fire(`Se produjo un error ${error}`)
  })
  }, [setList])


  return (
    <div className="containerSlider">
      <div className="contentSlider">
        <div className="title">
          {list.title}<br/>
          {list.title_japanese}
        </div>
        <div className="genero">
        {list?.genres?.map((animeOne)=>{
          return(
            <Genero key={animeOne.mal_id} nombre={animeOne.name} />
          )
        })}
        </div>
        <div className="description">
          {list.synopsis}
        </div>
        <div className="btnSee">
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">see more</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
