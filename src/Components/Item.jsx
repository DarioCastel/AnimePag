import { Link } from 'react-router-dom'
import '../css/item.scss'
import Genero from './Genero'

const Item = ({title, img, genres,animeId}) => {
  const limgenres= genres.slice(0, 2)
  return (
    <div className="containerItem">
        <img src={img} alt="image" />
        <span className='titleCard'>{title.slice(0,20)}...</span>
        <span className='itemGen'>{limgenres.map((animeOne)=>{
          return(
            <Genero key={animeOne.mal_id} nombre={animeOne.name} />
            
          )
        })}
        </span>
        <Link to={`/detalle?id=${animeId}`}>
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">see more</span>
            </span>
          </button>
        </Link>
    </div>
  )
}

export default Item