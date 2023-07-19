import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Detalle from "./Components/Detalle";
import SearchResults from "./Components/SearchResults";
import Favoritos from "./Components/Favoritos";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/favorite' element= {<Favoritos/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/detalle' element= {<Detalle/>}/>
        <Route path='/result' element= {<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
