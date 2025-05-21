import '../styles/myClasses.css'
import '../styles/myCustomClasses.css'
import full_logo_with_letters from '../assets/FullLogo_HUG_with_letters.png'

function Login_box({ content, ids, className }) {
    return (
        <div className={`login_box w40vw h70vh bTransparent pRelative b5_solid_white br2 bfBlur8px zIndex1 dGrid gtc_1 gtr_1_4 oHidden bsBorderBox pt20 ${className}`}
        id={ids.box}>

            <div className='w100 h100  dFlex jcCenter aiCenter'>
                <img src={full_logo_with_letters} className='myImg4'></img>
            </div>

            <div className='w100 h100  dGrid gtc_1 gtr_2_1'>

                {/* ------------CONTIENE LOS INPUTS DE USUARIO Y CONTRA Y EL BOTON---- */}

                <div className='w100 h100  dGrid gtc_1 gtr_1_1_1'>
                    {/* ------------ */}
                    <div className='w100 h100  dFlex aiCenter jcCenter'>
                        <input type='text' className='bcSecond bNone br1 w90 h60 pl20 bsBorderBox cBlack fw700 ff2 fs4 phLightGray3 outlineNone'
                         placeholder='Email' id={ids.inputEmail}></input>
                    </div>
                    {/* ------------ */}
                    <div className='w100 h100 dFlex aiCenter jcCenter'>
                    <input type='text' className='bcSecond bNone br1 w90 h60 pl20 bsBorderBox cBlack fw700 ff2 fs4 phLightGray3 outlineNone' 
                    placeholder='Contraseña' id={ids.inputPassword}></input>

                    </div>
                    {/* ------------ */}
                    <div className='w100 h100 dFlex aiCenter jcCenter'>
                         <button className='bNone br1 bcFourth cWhite ff2 fs6 w50 h50 cPointer dFlex aiCenter jcCenter'
                          id={ids.button}>
                            {content.btMain}
                            </button>
                    </div>
                </div>

                {/* -------------------------CONTIENE EL MENSAJE Y EL BOTON PARA SWITCHEO ENTRE LOGIN Y REGISTRO--------------- */}

                <div className='w100 h100  dFlex fdColumn aiCenter jcCenter taCenter cWhite ff2 fs3 bsBorderBox pr10 pl10 gap10 {className}'>
                    {content.message}
                    <button className='bNone br1 bcFourth cWhite ff2 fs3 w30 h30 cPointer dFlex aiCenter jcCenter'
                          id={ids.button2}>
                            {content.btText}
                            </button>
                </div>

            </div>

        </div>
    )
}

export default Login_box;