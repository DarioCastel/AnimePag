import React from 'react'
import "../css/trailer.scss"
import ReactPlayer from 'react-player'

const Trailer = ({trailer}) => {
  return (
    <div className='containerTrailer'>
      <ReactPlayer 
      url={trailer}
      className='react-player'
      width='100%'
      height='100%'/>
    </div>
  )
}

export default Trailer