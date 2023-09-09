    document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
  
    let currentUser = 'Usuario 1';
  
    // Respuestas predefinidas para el Usuario 2
    const respuestasUsuario2 = [
        '¡Hola! ¿Como estas?',
        '¡Muy bien y tu?',
        'Me alegra',

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
  
        // Simular una respuesta del Usuario 2 después de un breve retraso
        setTimeout(() => {
        const respuestaAleatoria =
        respuestasUsuario2[Math.floor(Math.random() * respuestasUsuario2.length)];
        const user2MessageElement = document.createElement('div');
        user2MessageElement.classList.add('message');
        user2MessageElement.textContent = 'Usuario 2: ' + respuestaAleatoria;
        messagesContainer.appendChild(user2MessageElement);
          // Desplazarse hacia abajo para ver el nuevo mensaje
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
  
        // Cambiar al Usuario 2 para el siguiente mensaje
        currentUser = 'Usuario 1';
      }
    });
  
    // Manejar el evento Enter para enviar un mensaje
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendButton.click();
      }
    });
  });
 