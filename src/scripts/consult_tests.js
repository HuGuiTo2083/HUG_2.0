export function consult_tests() {
  let mainIndex_toVisible = 1
  function to_Visible_Card() {
    document.getElementById(`infoTestCard${mainIndex_toVisible}`).style.display = 'flex'
    const myInfoCards = document.querySelectorAll('.myInfoTestCard')
    myInfoCards.forEach(el => { el.classList.remove('myInfoTestCard') })
    document.getElementById(`infoTestCard${mainIndex_toVisible}`).classList.add('myInfoTestCard')

    document.getElementById('lbNumberItem').textContent = mainIndex_toVisible
  }

  async function consultarPreguntas() {
    try {
      const respuesta = await fetch('https://hug-backend.vercel.app/test_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'   // cambia si tu endpoint espera otro formato
        },
        body: JSON.stringify({})              // agrega aquí los datos que necesites enviar
      });

      // Si tu endpoint responde JSON:
      const datos = await respuesta.json();
      console.log('Respuesta de /test_questions:', datos);
      const myContainer = document.getElementById('QuestionsContainer')
      const myMainItem = datos[0][1]
      let myMainIndex = 0
      datos.forEach((element, index) => {

        if (index > 0 && element[0] != 0) {

          myMainIndex++;
          const myDiv = document.createElement('div')
          myDiv.className = ` trans0-5 hoverLight w100 h100 dNone fdColumn aiCenter jcCenter gap20  bsBorderBox pl20 taCenter pr20`;
          myDiv.id = `infoTestCard${myMainIndex}`

          const myTitle1 = document.createElement('label')
          myTitle1.className = 'fw700 cBlack ff2 fs4'
          myTitle1.innerHTML = myMainItem
          myTitle1.style.gridColumn = 'span 4'

          const myTitle2 = document.createElement('label')
          myTitle2.className = 'fw600 cWhite ff2 fs4'
          myTitle2.innerHTML = element[1]
          myTitle2.style.gridColumn = 'span 4'

          //para crear las opciones a escoger

          // -------------- 1 -----------------

          const myInput1 = document.createElement('input')
          myInput1.type = 'checkbox'
          myInput1.style.opacity = '0'
          const myLabel1 = document.createElement('label')
          myLabel1.classList = `myGroup${myMainIndex} myOption w90 h10 bcSixth br1 taCenter fw600 cWhite ff2 fs4 dFlex jcCenter aiCenter`
          myLabel1.textContent = 'Ningún Día'
          myLabel1.setAttribute('data-item', element[0])
          myLabel1.setAttribute('data-value', 0);
          myLabel1.setAttribute('data-test', element[2]);
          myLabel1.appendChild(myInput1)
          myInput1.addEventListener('change', () => {
            if (myInput1.checked) {
              // Todos los inputs dentro del grupo, incluidos el actual
              const allInputs = document.querySelectorAll(`.myGroup${myMainIndex} input`);

              allInputs.forEach(input => {
                // Si no es el input que activó el evento, lo desmarcamos
                if (input !== myInput1) {
                  input.checked = false;
                  // Quitar clase del label padre de ese input
                  if (input.parentElement) {
                    input.parentElement.classList.remove('selectOption');
                  }
                }
              });

              // Aseguramos que el label actual tenga la clase
              myLabel1.classList.add('selectOption');
            } else {
              // Si se desmarca el mismo input, también quita la clase (opcional)
              myLabel1.classList.remove('selectOption');
            }
          });

          // --------------------- 2 -------------------

          const myInput2 = document.createElement('input')
          myInput2.type = 'checkbox'
          myInput2.style.opacity = '0'
          const myLabel2 = document.createElement('label')
          myLabel2.classList = `myGroup${myMainIndex} myOption w90 h10 bcSixth br1 taCenter fw600 cWhite ff2 fs4 dFlex jcCenter aiCenter`
          myLabel2.textContent = 'Varios Días'
          myLabel2.setAttribute('data-item', element[0])
          myLabel2.setAttribute('data-value', 1);
          myLabel2.setAttribute('data-test', element[2]);
          myLabel2.appendChild(myInput2)
          myInput2.addEventListener('change', () => {
            if (myInput2.checked) {
              // Todos los inputs dentro del grupo, incluidos el actual
              const allInputs = document.querySelectorAll(`.myGroup${myMainIndex} input`);

              allInputs.forEach(input => {
                // Si no es el input que activó el evento, lo desmarcamos
                if (input !== myInput2) {
                  input.checked = false;
                  // Quitar clase del label padre de ese input
                  if (input.parentElement) {
                    input.parentElement.classList.remove('selectOption');
                  }
                }
              });

              // Aseguramos que el label actual tenga la clase
              myLabel2.classList.add('selectOption');
            } else {
              // Si se desmarca el mismo input, también quita la clase (opcional)
              myLabel2.classList.remove('selectOption');
            }
          });

          // --------------------- 3 -------------------

          const myInput3 = document.createElement('input');
          myInput3.type = 'checkbox';
          myInput3.style.opacity = '0';
          const myLabel3 = document.createElement('label');
          myLabel3.classList = `myGroup${myMainIndex} myOption w90 h10 bcSixth br1 taCenter fw600 cWhite ff2 fs4 dFlex jcCenter aiCenter`;
          myLabel3.textContent = 'Más de la mitad de los Días';
          myLabel3.setAttribute('data-item', element[0]);
          myLabel3.setAttribute('data-value', 2);
          myLabel3.setAttribute('data-test', element[2]);
          myLabel3.appendChild(myInput3);
          myInput3.addEventListener('change', () => {
            if (myInput3.checked) {
              // Todos los inputs dentro del grupo, incluidos el actual
              const allInputs = document.querySelectorAll(`.myGroup${myMainIndex} input`);

              allInputs.forEach(input => {
                // Si no es el input que activó el evento, lo desmarcamos
                if (input !== myInput3) {
                  input.checked = false;
                  // Quitar clase del label padre de ese input
                  if (input.parentElement) {
                    input.parentElement.classList.remove('selectOption');
                  }
                }
              });

              // Aseguramos que el label actual tenga la clase
              myLabel3.classList.add('selectOption');
            } else {
              // Si se desmarca el mismo input, también quita la clase (opcional)
              myLabel3.classList.remove('selectOption');
            }
          });

          // --------------------- 4 -------------------

          const myInput4 = document.createElement('input');
          myInput4.type = 'checkbox';
          myInput4.style.opacity = '0';
          const myLabel4 = document.createElement('label');
          myLabel4.classList = `myGroup${myMainIndex} myOption w90 h10 bcSixth br1 taCenter fw600 cWhite ff2 fs4 dFlex jcCenter aiCenter`;
          myLabel4.textContent = 'Casi Todos los Días';
          myLabel4.setAttribute('data-item', element[0]);
          myLabel4.setAttribute('data-value', 3);
          myLabel4.setAttribute('data-test', element[2]);
          myLabel4.appendChild(myInput4);
          myInput4.addEventListener('change', () => {
            if (myInput4.checked) {
              // Todos los inputs dentro del grupo, incluidos el actual
              const allInputs = document.querySelectorAll(`.myGroup${myMainIndex} input`);

              allInputs.forEach(input => {
                // Si no es el input que activó el evento, lo desmarcamos
                if (input !== myInput4) {
                  input.checked = false;
                  // Quitar clase del label padre de ese input
                  if (input.parentElement) {
                    input.parentElement.classList.remove('selectOption');
                  }
                }
              });

              // Aseguramos que el label actual tenga la clase
              myLabel4.classList.add('selectOption');
            } else {
              // Si se desmarca el mismo input, también quita la clase (opcional)
              myLabel4.classList.remove('selectOption');
            }
          });


          myDiv.appendChild(myTitle1)
          myDiv.appendChild(myTitle2)
          myDiv.appendChild(myLabel1)
          myDiv.appendChild(myLabel2)
          myDiv.appendChild(myLabel3)
          myDiv.appendChild(myLabel4)
          myContainer.appendChild(myDiv)
        }
      });
      // Si responde texto plano en vez de JSON, usa:
      // const texto = await respuesta.text();
      // console.log('Respuesta de /test_questions:', texto);
      to_Visible_Card()
    } catch (error) {
      console.error('Error al consultar /test_questions:', error);
    }
  }

  consultarPreguntas()


  const prevTest = document.getElementById('prevTest')
  prevTest.addEventListener('click', () => {
    if (mainIndex_toVisible > 1) {
      document.getElementById(`infoTestCard${mainIndex_toVisible}`).style.display = 'none'
      mainIndex_toVisible--;
      to_Visible_Card()
    }
  })
  const nextTest = document.getElementById('nextTest')
  nextTest.addEventListener('click', () => {
    if(mainIndex_toVisible<16){
    document.getElementById(`infoTestCard${mainIndex_toVisible}`).style.display = 'none'
    mainIndex_toVisible++;
   
      to_Visible_Card()
    }
    else{
      const myView_Test = document.getElementById('viewTest')
      myView_Test.style.display = 'none'

       const myView_Chatbot = document.getElementById('viewChatbot')
       myView_Chatbot.style.display = 'grid'
    }
  })


  return () => {


  }
}