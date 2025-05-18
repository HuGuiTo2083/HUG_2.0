import myDown_Logo from '../assets/logo_HUG_abajo.png'
import myUp_Logo from '../assets/logo_HUG_arriba.png'


function EmailCode_Box({className, id}){
return (
<div className={`w40vw h70vh bcTransparent zIndex2 br3 bfBlur8px b5_solid_white ${className} gtc_1 gtr_1_3_2 oHidden emailcode_box`} id={id}>
    {/* --------------------PRIMER APARTADO PARA AGREGAR EL TITULO/LABEL --------------- */}
    <div className="w100 h100  ff2 fw700 fs6 cWhite dFlex jcCenter aiCenter">INGRESA EL CÓDIGO</div>

    {/* -----------------SEGUNDO APARTADO DONDE ESTÁ EL INPUT DEL CODIGO Y EL BOTON DE VALIDARLO----------------- */}
    <div className="w100 h100  dFlex jcCenter aiCenter pRelative fdColumn gap50">
        <input className="bNone br5px w75 h20 taCenter fs6 outlineNone ff2 fw200 ls5" 
        placeholder="XX - XXXX - XX" id="myInputValidated"></input>
       <button className=" cWhite bcFourth cWhite ff2 fs6  bNone br10px w40 h15 pb20 " id="btValidate">Validar</button>
    </div>

    {/* ----------------------------------------------------- */}

    <div className="w100 h100 pRelative  dFlex jcCenter aiCenter">
      <img className='myImg9 pAbsolute dNone' src={myUp_Logo} ></img>
      <img className='myImg9 pAbsolute dNone' src={myDown_Logo} ></img>

    </div>
</div>

)

}

export default EmailCode_Box;