const URLUsuarios = "https://35.160.120.126/app-mensajeria-sere.onrender.com/usuarios/"

document.querySelector(".formulario_registro").addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  
    // Captura los datos del formulario
    let formData = new FormData(this);
    console.log(formData);
    // Convierte los datos del formulario a JSON
    let jsonObject = {};
    for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
    }
  
    // Envía una solicitud POST al servidor de json-server
    try {
      const response = await axios.post(URLUsuarios, jsonObject); // Asegúrate de reemplazar 'http://localhost:3000/users' con la URL de tu servidor de json-server
      console.log("Producto agregado:", response.data);
    } catch (error) {
      console.error("Error al agregar:", error);
    }
  });