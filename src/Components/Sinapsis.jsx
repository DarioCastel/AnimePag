import React from 'react'
import "../css/sinapsis.scss"
import Genero from './Genero'

const Sinapsis = ({synopsis, score, episodes, status, year, genres}) => {
  return (
    <>
      <div className="contentSynopsis">
        <h2>Introduction</h2>
        <p>{synopsis}</p>
        <hr />
        <div className="detallSynopsis">
          <div className="dataSynopsis">
            <span className="spanDataSynopsis">
              Score: {score} 
              
            </span>
            <span className="spanDataSynopsis">
              Episodes: {episodes}

            </span>
            <span className="spanDataSynopsis">
              Status: {status}

            </span>
          </div>
          <div className="dataSynopsis">
            <span className="spanDataSynopsis">
              Year: {year}
              
            </span>
            <span className="sectionGenSynopsis">
              Genres: {genres?.map((animeOne)=>{
          return(
            <Genero key={animeOne.mal_id} nombre={animeOne.name} />
            
          )
        })}

            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sinapsis