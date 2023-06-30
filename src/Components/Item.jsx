import '../css/item.scss'
import Portada from '../assets/prueba2.jpg'

const Item = () => {
  return (
    <div className="containerItem">
        <img src={Portada} alt="image" />
        <span>Demon Slayer Sesson 1</span>
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