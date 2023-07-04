import React, { useEffect, useState } from "react";
import "../css/capitulos.scss";
import axios from "axios";
import Swal from "sweetalert2";

const Capitulos = ({id}) => {
  const [list, setList] = useState([])

  const endPoint=`https://api.jikan.moe/v4/anime/${id}/episodes`

  useEffect(() => {
    axios.get(endPoint)
  .then(Response=>{
    const dataListAnime=Response.data.data;
    setList(dataListAnime)
    console.log(list)
        
  })
  .catch(error =>{
    Swal.fire(`Se produjo un error ${error}`)
  })
  }, [setList])


  return (
    <>
      <div className="containerEpisodes">
        {list?.map((cap)=>{
          return(
            <button key={cap.mal_id} className="button btnEpisodes">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">{cap.mal_id}-{cap.title}</span>
          </span>
        </button>
          )
          })}
        
      </div>
    </>
  );
};

export default Capitulos;
