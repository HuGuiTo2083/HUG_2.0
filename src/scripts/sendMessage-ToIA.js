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
            if (data.choices) {
              console.log("Respuesta IA:", data.choices);

              const myDiv = document.createElement("div")
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