export function sendMessage_ToIA() {

    const myContainerChat = document.getElementById('containerChat')
    const myInputMessage = document.getElementById('inMessageSend')
    const myBtSendMessage = document.getElementById('btSendMessage')

    myBtSendMessage.addEventListener('click', () => {
        const divs = document.querySelectorAll('.divConversation');
        let textos = [""]
        if (divs.length > 0) {

             textos = Array.from(divs).map(div => div.textContent.trim());
            console.log("Encontrados divs con clase 'divConversation':", textos);
        } else {
            console.log("No se encontraron divs con clase 'divConversation'");
        }

        let myMessage = myInputMessage.value
        myInputMessage.value = ""
        const myDivRight = document.createElement("div")
              myDivRight.className = 'divConversation bcWhite w50 hAuto br10px p20  bubbleChatRight fs4 ff2'
              myDivRight.textContent = myMessage
              myContainerChat.appendChild(myDivRight)
              console.log('--antes del fetch')
        fetch('https://hug-ai-backend.vercel.app/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              hilo_conversacion: textos,
              message: myMessage
            })
          })
          .then(response => response.json())
          .then(data => {
            if (data.response) {
              console.log("Respuesta IA:", data.response);
            const myDivLeft = document.createElement("div")
              myDivLeft.className = 'divConversation bcWhite w50 hAuto br10px p20  bubbleChatLeft fs4 ff2'
              myDivLeft.innerHTML = data.response
              myContainerChat.appendChild(myDivLeft)
              
              // Puedes mostrar la respuesta en tu UI aquí
            } else if (data.error) {
              console.error("Error:", data.error);
            }
          })
          .catch(error => {
            console.error("Error en la petición:", error);
          });

    })
}