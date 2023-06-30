
import Head from "./Head"
import Slider from "./Slider"
import Item from "./Item"
import { Navigate } from "react-router-dom";

const home = () => {
  const storageValue = localStorage.getItem("tokenPag")
  console.log(storageValue)
  return (
    <>
    {storageValue == null && <Navigate to="/"/>}
      <div className="container">
      <Head />
      <Slider />
      <div className="titleRela">
        <span>Lista General</span>
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
    </>
  )
}

export default home
