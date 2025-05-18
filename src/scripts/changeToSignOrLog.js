

export function changeToSignOrLog() {

  const btChangeLogin = document.getElementById('btChangeLogin')
  const btChangeRegister = document.getElementById('btChangeRegister')
const boxLogin = document.getElementById('boxLogin')
const boxRegister = document.getElementById('boxRegister')

  btChangeLogin.addEventListener('click', ()=>{
    boxLogin.style.display='grid'
    boxRegister.style.display = 'none'
  })

  btChangeRegister.addEventListener('click', ()=>{
    boxRegister.style.display = 'grid'

 boxLogin.style.display='none'
  })

  //---para cuando se quiere registrar
 
const boxEmailCode = document.getElementById('boxEmailCode')

  


  //-----PARTE PARA AGREGARLE FUNCIONALIDAD AL INPUT DEL CODIGO DE VERIFICACION

  const myVerificationCodeInput = document.getElementById('myInputValidated')
   
  myVerificationCodeInput.addEventListener('input', () => {



    myVerificationCodeInput.value = myVerificationCodeInput.value.toUpperCase()

    const myCharactersTotal = myVerificationCodeInput.value.length
    
    if (myCharactersTotal === 2) {
      myVerificationCodeInput.value = myVerificationCodeInput.value + ' - '
    }
    if (myCharactersTotal === 9) {
      myVerificationCodeInput.value = myVerificationCodeInput.value + ' - '
    }

    if (myCharactersTotal === 4) {
      myVerificationCodeInput.value = myVerificationCodeInput.value.substring(0, 1)
    }
    if (myCharactersTotal === 11) {
      myVerificationCodeInput.value = myVerificationCodeInput.value.substring(0, 8)
    }


  })




  //----Para cuando se quiera crear una cuenta y te manda el codigo de verificación

  let myDefinitiveVerificationCode

  const handleRegister =  () => {

      
      // const screenWidth = window.innerWidth;


      const myOrderLettersToCode = []
      const myLettersCode = ['H', 'U', 'H', 'M']
      for (let i = 0; i < 4; i++) {
          //console.log(i);  
          let myRandomNumber = Math.floor(Math.random() * 8)
          while (myOrderLettersToCode.includes(myRandomNumber)) {
              myRandomNumber = Math.floor(Math.random() * 8)
          }
          myOrderLettersToCode.push(myRandomNumber)
      }

      myOrderLettersToCode.sort((a, b) => a - b);

      // console.log('Orden de numeros de letras:' + myOrderLettersToCode )

      const myRandomCode = []
      let myIndexLetter = 0
      for (let i = 0; i < 8; i++) {
          const myRandomNumberToCode = Math.floor(Math.random() * 10)
          //  console.log('i: ' +  i  + ', array[i]: ' + myOrderLettersToCode[myIndexLetter])
          if (i === myOrderLettersToCode[myIndexLetter]) {
              //  console.log('se pushea 1 al index')
              myRandomCode.push(myLettersCode[myIndexLetter])
              myIndexLetter++
          }
          else {
              myRandomCode.push(myRandomNumberToCode)
          }
      }
      console.log('Random : ' + myRandomCode)
      //console.log('Orden de numeros de letras:' + myOrderLettersToCode )


      //---se hace la peticion al backend y se le mandan los datos para enviar el código----

      fetch('http://127.0.0.1:5000/sendEmailToValidateVerification', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: document.getElementById('inEmailRegister').value.trim(),
              code: myRandomCode
          })
      })
          .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
          .then(data => {
              console.log('Success:', data);  // Procesamos la respuesta
              myDefinitiveVerificationCode = data.data
          })
          .catch(error => {
              console.error('Error:', error);  // En caso de error, lo mostramos
          });


  };



  //---Para cuando se está comprobando el número de telefono
const myVerificationCodeInput2 = document.getElementById('myInputValidated')

  const handleValidate = () => {
      //myMiniLabelErrorCode.style.display = 'none'
      // myUpLogo.style.removeProperty('visibility');
      // myDownLogo.style.removeProperty('visibility');
      // myUpLogo.style.visibility = 'visible';
      // myDownLogo.style.visibility = 'visible';
      // myDownLogo.style.animation = 'down 1s infinite';
      // myUpLogo.style.animation = 'Up 1s infinite';

      // Usa setTimeout para que se ejecute después de 3 segundos
      setTimeout(() => {
          //fnHiddenLogo();  // Ejecuta la función fnHiddenLogo
          console.log('BACK ' + myDefinitiveVerificationCode + ', input: ' + myVerificationCodeInput2.value)
          if (myDefinitiveVerificationCode === myVerificationCodeInput2.value) {
              console.log('codigo correcto')
              //---aqui se inicia sesion
              fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: document.getElementById('inEmailRegister').value.trim(),
                    password: document.getElementById('inPasswordRegister').value.trim()
                })
            })
                .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
                .then(data => {
                    console.log('Registrado:', data);  // Procesamos la respuesta
                })
                .catch(error => {
                    console.error('Error:', error);  // En caso de error, lo mostramos
                });
          }
          else {
              console.log('else: ' + 'BACK ' + myDefinitiveVerificationCode + ', input: ' + myVerificationCodeInput2.value)
              // myMiniLabelErrorCode.style.display = 'block';

          }
          // Luego, muestra el mini label después de 3 segundos
      }, 3000); // 3000 ms = 3 segundos
  };

   const btLogin = document.getElementById('btLogin')
  const btValidate = document.getElementById('btValidate')
const btRegister = document.getElementById('btRegister')

btRegister.addEventListener('click', ()=>{
  boxRegister.style.display='none'
  boxEmailCode.style.display= 'grid'
  handleRegister();
})


btValidate.addEventListener('click', handleValidate)
  
 
const  StartLogin = ()=>{
  
  fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: document.getElementById('inEmailLogin').value.trim(),
        password: document.getElementById('inPasswordLogin').value.trim(),

    })
})
    .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
    .then(data => {
        console.log('Success:', data);  // Procesamos la respuesta
        let myStatus = data.status
        if (myStatus=="1") {
       //----AQUI ES DONDE YA SE CAMBIA AL MODULO DE PREGUNTAS
          document.getElementById('viewLogin').style.display='none'
                    document.getElementById('viewTest').style.display='grid'

        }
    })
    .catch(error => {
        console.error('Error:', error);  // En caso de error, lo mostramos
    });



}


btLogin.addEventListener('click', StartLogin)




//   myBtLoginStart.addEventListener('click', StartLogin)

  return () => {
     btRegister.removeEventListener('click', handleRegister);
     btValidate.removeEventListener('click', handleValidate);
    btLogin.removeEventListener('click', StartLogin)
    // document.removeEventListener('DOMContentLoaded', animatedBackground);

  };

 


}

export function animatedBackground(view) {
  
    const myWindow_Width = window.innerWidth;
    const myWindow_Height = window.innerHeight;
    console.log(myWindow_Height)
    console.log(myWindow_Width)

    const myView = document.getElementById(view)
    const MY_PARTICLES_NUMBER = 60

    for(let i=0; i<MY_PARTICLES_NUMBER; i++){
       const myParticle = document.createElement('div')
       const MY_RANDOM_SIZE = Math.round(Math.random()*50) + 1
       const MY_RANDOM_NUMBER_PARTICLE = Math.round(Math.random()*2)
       const MY_RANDOM_Y = Math.round(Math.random()* myWindow_Height)
       const MY_RANDOM_X = Math.round(Math.random()* myWindow_Width)

       myParticle.classList.add(`w${MY_RANDOM_SIZE}px`, `h${MY_RANDOM_SIZE}px`, `particle${MY_RANDOM_NUMBER_PARTICLE}`, 'br50per', 'bcFirst', 'pAbsolute')
       myParticle.style.left = `${MY_RANDOM_X}px`
       myParticle.style.top = `${MY_RANDOM_Y}px`
       myView.appendChild(myParticle)

    }
  }

