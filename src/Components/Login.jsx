
import "../css/login.scss"
import Swal from 'sweetalert2'
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [validado, setValidado] = useState(false)

  const handlerSubmit = (e)=>{
    e.preventDefault();
    const mailUsuario= e.target.mailbox.value;
    const passUsuario= e.target.passbox.value;
    const mailregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const token = "asd123asd123asd123asd123asd123asd";

      if (mailUsuario == "" || passUsuario == ""){
        return(
          Swal.fire('Campos en blanco')
        )
      }

      if (!mailregex.test(mailUsuario)){
        return(
          Swal.fire('El formato no corresponde a un Mail')
        )
      }

      if (!(mailUsuario === "motor@gmail.com") || !(passUsuario === "asd")){
        return(
          Swal.fire('usuario inexistente')
        )
      }
      
      localStorage.setItem('tokenPag',token)
      setValidado(true)
  
  }
  return (
    <>
    {validado && <Navigate to="/home"/>}
    <section className="containerLogin">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handlerSubmit}>
            <h2 className="titleLogin">Motor Anime</h2>
            <hr></hr>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" name="mailbox"/>
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" name="passbox"/>
              <label>Contraseña</label>
            </div>
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;
