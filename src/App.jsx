import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Detalle from "./Components/Detalle";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/detalle' element= {<Detalle/>}/>
      </Routes>
      
    </>
  );
}

export default App;
