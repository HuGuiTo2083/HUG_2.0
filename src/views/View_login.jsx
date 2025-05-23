import { useEffect } from "react";
import '../styles/login_styles.css'
import '../styles/myClasses.css'
import { changeToSignOrLog } from "../scripts/changeToSignOrLog";
import { animatedBackground } from "../scripts/changeToSignOrLog";
import Login_box from "../components/Login_box";
import EmailCode_Box from "../components/EmailCode_Box";
function View_login(){

useEffect(()=>{
const myScriptLogin = changeToSignOrLog();
const viewLogin = document.getElementById('viewLogin')
if(viewLogin){
  animatedBackground(viewLogin.id)
}

//---este return es para limpiar los listeners cuando el componente se desmonte
return () =>{
    myScriptLogin()
}

}, [])

    return(

    <div className="w100vw h100vh bcThird dFlex jcCenter aiCenter oHidden" id="viewLogin">
      {/* -----------------CUADRO DE LOGIN------------ */}
     <Login_box 
     content={{
      title: "Inicia Sesión",
      btMain: "Iniciar",
      message: "¿No tienes cuenta aún?, has click abajo para crear una.",
      btText: "Regístrate"
     }}
     ids={{
      box : "boxLogin",
      inputEmail: "inEmailLogin",
      inputPassword: "inPasswordLogin",
      button: "btLogin",
      button2: "btChangeRegister"
     }}

     />
     {/* ------------------------------------------ */}

{/* ------------- CUADRO DE REGISTRO------------- */}
     <Login_box 
     content={{
      title: "Regístra tu Cuenta",
      btMain: "Registrar",
      message: "¿Ya tienes una cuenta?, has click abajo para iniciar sesión.",
      btText: "Log In"
     }}
     ids={{
      box : "boxRegister",
      inputEmail: "inEmailRegister",
      inputPassword: "inPasswordRegister",
      button: "btRegister",
      button2: "btChangeLogin"
     }}
     className='dNone'
     />

     {/* ---------------- */}

     {/* ----------------CUADRO PARA VALIDAR CODIGO QUE SE ENVIA A EMAIL-------- */}
    <EmailCode_Box className='dNone' id='boxEmailCode'></EmailCode_Box>
     {/* --------------------------------- */}
    </div>
);
}

export default View_login;