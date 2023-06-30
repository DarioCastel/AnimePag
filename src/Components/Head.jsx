import '../css/head.scss'
import { BiSearchAlt } from "react-icons/bi";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

const Head = () => {
  return (
    <div className="containerHead">
        <div className="logo">
            <span>M</span>otor
        </div>
        <div className="instruction">
        search for information about your favorite anime
        <TbArrowBigRightLineFilled/>
        </div>
        <div className="search">
        <BiSearchAlt className='icon'/>
            <form>
                <input type="text" placeholder='Eg: Naruto' />
                <button className='btn'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Head