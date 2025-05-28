import '../styles/myClasses.css'
import '../styles/myCustomClasses.css'
import '../styles/hug_classes.css'
import { consult_tests } from "../scripts/consult_tests";
import { useEffect } from 'react';
import { useRef } from 'react';
function View_Test({ className }) {

  const containerRef = useRef(null);
  const prevBtnRef   = useRef(null);
  const nextBtnRef   = useRef(null);

    useEffect(()=>{
    if (containerRef.current && prevBtnRef.current && nextBtnRef.current) {
                  //consult_tests()

    }


  

//---este return es para limpiar los listeners cuando el componente se desmonte
return () =>{
    
}

}, [])


  return (
    <div className={` ${className} bcSecondThird_anim gtc_1 gtr_1_3_1 gap15 w100vw h100vh pRelative`} id="viewTest">
        {/* ----------------------AQUI SOLO VIENE EL NUMERO DE PREGUNTA EN EL QUE TE ENCUENTRAS------------- */}
        <div className='w100 h100  ff1 fw300 cWhite bcThird fs5 dFlex jcCenter aiCenter ls4 '>
            Pregunta &nbsp; <span id='lbNumberItem'></span> &nbsp; - 16
        </div>
        {/* ---------------PARTE DE PREGUNTA Y OPCIONES-------- */}
        <div className='w100 h100 dFlex jcCenter aiCenter  fdColumn' id='QuestionsContainer' ref={containerRef}>
           
        </div>
        {/* ----------PARTE DONDE SE AVANZA A LA SIGIENTE Y SE RETROCEDE PARA CAMBIAR RESPUESTA----- */}
        <div className='w100 h100 dFlex jcCenter aiCenter gap20'>
            <button className='trans0-5 hoverLight myBt w30 h40 bNone brTopLeft1 brBottomLeft1 bcSecond cThird ff2 fw400 fs5 cPointer'
            id='prevTest' ref={prevBtnRef}> 
                &lt; </button>
            <button className='trans0-5 hoverLight myBt w30 h40 bNone brTopRight1 brBottomRight1 bcSecond cThird ff2 fw400 fs5 cPointer'
            id='nextTest'  ref={nextBtnRef}>
                 &gt; </button>

        </div>


    </div>
  );
}

export default View_Test;
