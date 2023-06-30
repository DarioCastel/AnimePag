import "../css/slider.scss";
import Genero from "./Genero";

const Slider = () => {
  return (
    <div className="containerSlider">
      <div className="contentSlider">
        <div className="title">
          Demon Slayer: <br />
          Kimetsu no Yaiba
        </div>
        <div className="genero">
          <Genero genero={"accion"} />
          <Genero genero={"Aventura"} />
          <Genero genero={"Shonen"} />
        </div>
        <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, numquam!
          Doloremque cum officia quos necessitatibus, ullam doloribus assumenda
          consequatur suscipit odio laudantium ducimus amet vel, quas magni ab
          rerum libero.
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
