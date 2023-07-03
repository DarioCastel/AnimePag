import '../css/item.scss'
import Portada from '../assets/prueba2.jpg'

const Item = ({title, img}) => {
  return (
    <div className="containerItem">
        <img src={img} alt="image" />
        <span>{title}</span>
        <button className="button">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">see more</span>
          </span>
        </button>
    </div>
  )
}

export default Item