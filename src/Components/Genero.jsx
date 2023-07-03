import '../css/genero.scss'

const Genero = ({nombre}) => {
  return (
    <div className="containerGenero">
        <span>{nombre}</span>
    </div>
  )
}

export default Genero