    document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
  
    let currentUser = 'Usuario 1';
  
    // Respuestas predefinidas para el Usuario 2
    const respuestasUsuario2 = [
        '¡Hola! ¿Como estas?',
        '¡Muy bien, gracias por preguntar',
        'No, para donde nos vamosNo, para donde nos vamos',

    ];
  
    sendButton.addEventListener('click', () => {
      const messageText = messageInput.value.trim();

        if (messageText !== '') {
            // Crear un nuevo mensaje del Usuario 1
            const user1MessageElement = document.createElement('div');
            user1MessageElement.classList.add('message');
            user1MessageElement.textContent = `${currentUser}: ${messageText}`;
            messagesContainer.appendChild(user1MessageElement);
          
            // Limpiar el campo de entrada
            messageInput.value = '';
          
            // Verificar si el mensaje es "Hola"
            if (messageText.toLowerCase() === 'hola') {
              // Si es "Hola", responder con "Hola, ¿cómo estás?"
              setTimeout(() => {
                const user2MessageElement = document.createElement('div');
                user2MessageElement.classList.add('message');
                user2MessageElement.textContent = 'Usuario 2: ¡Hola! ¿Cómo estás?';
                messagesContainer.appendChild(user2MessageElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
              }, 1000);
            } else if (messageText.toLowerCase() === 'bien' && respuestaUsuario2.toLowerCase() === 'muy bien y tú?') {
              // Si el mensaje del Usuario 1 es "Bien" y el mensaje del Usuario 2 es "¡Muy bien y tú?",
              // entonces responder con "¡Muy bien gracias!"
              setTimeout(() => {
                const user2MessageElement = document.createElement('div');
                user2MessageElement.classList.add('message');
                user2MessageElement.textContent = 'Usuario 2: ¡Muy bien gracias!';
                messagesContainer.appendChild(user2MessageElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
              }, 1000);
            } 
            else {
              // Si no es ninguna de las condiciones anteriores, responder de manera aleatoria como antes
              setTimeout(() => {
                const respuestaAleatoria =
                  respuestasUsuario2[Math.floor(Math.random() * respuestasUsuario2.length)];
                const user2MessageElement = document.createElement('div');
                user2MessageElement.classList.add('message');
                user2MessageElement.textContent = 'Usuario 2: ' + respuestaAleatoria;
                messagesContainer.appendChild(user2MessageElement);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
              }, 1000);
            }
          
            // Cambiar al Usuario 2 para el siguiente mensaje
            currentUser = 'Usuario 1';
          }
          // ...
        })})