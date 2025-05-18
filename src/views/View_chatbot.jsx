import { useEffect } from "react";
import '../styles/myClasses.css'
import '../styles/myCustomClasses.css'
import '../styles/hug_classes.css'
import { sendMessage_ToIA } from "../scripts/sendMessage-ToIA";



function View_chatbot({className}){


    useEffect(()=>{
       
    //---este return es para limpiar los listeners cuando el componente se desmonte
    return () =>{
        sendMessage_ToIA()
    }
    
    }, [])
    



return (
    <div className= {`${className} w100vw h100vh bcFirst gtc_1 gtr_1_auto jcCenter aiCenter`} id="viewChatbot">
        {/* -----------------PARTE DE HEADER------------------------ */}
       <div className="w100 h100 bcSixth dFlex jcCenter aiCenter">
        <label className="fs7 cWhite ff2 fw600">HUG</label>
       </div>
       {/* ----------------------------------------------------------------- */}
       {/* ---------------------PARTE DEL CHATBOT, EL CHAT PRINCIPAL--------------- */}
       <div className="w100 h90vh dFlex jcCenter aiCenter pRelative">
         <div className="w90 h90 br1 bcSecond dGrid gtc_1 gtr_8_auto oHidden">
            {/* ----------CONTENEDOR DE CHARLA (INCLUYE LAS BURBUJAS DE TEXTO Y EL INPUT CON EL BOTON PARA ENVIAR)-------------- */}
            <div className="w100 h100  dFlex  oyAuto pRelative fdColumn bsBorderBox p20 gap20" id="containerChat">
                {/* ------CONTENEDORES DE BURBUJAS DE CONVERSACION------ */}
               
                    
                {/* ------------------------------ */}
            </div>
            {/* -------------PARTE DE CAJA DE TEXTO Y BOTON DE ENVIO----------------- */}
            <div className="w100 h10vh dFlex bsBorderBox pl20 pr20 jcSpaceAround aiCenter gap30">
                <textarea className="ff2 fs4 outlineNone bNone br1 w90 h70 bsBorderBox p10 pt15 oyAuto dFlex aiCenter resizeNone"
                 id="inMessageSend"></textarea>
                

                 <button className="trans0-5 hoverLightBlack bcBlack br1 h70 bNone w70px cPointer cWhite fs4 dFlex aiCenter jcCenter" id="btSendMessage">➤</button>
            </div>
        {/* ----------------- */}
         </div>
       </div>
       {/* ------------------ */}
    </div>
)


}


export default View_chatbot;