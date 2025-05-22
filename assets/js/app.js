const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameElement = document.getElementById('name');
const blog = document.getElementById('blog');
const location = document.getElementById('location');//cambio los elementos por id para mayor especificidad

function displayUser(username) {
  nameElement.textContent = 'Cargando...';
  blog.textContent = '';
  location.textContent = '';//datos onloading

  fetch(`${usersEndpoint}/${username}`)//solicitud API
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);//validación de respuesta
      return response.json();
    })
    .then(data => {
      console.log(data);//datos recibidos o de que están vacíos
      nameElement.textContent = data.name || 'No name';
      blog.textContent = data.blog || 'No blog';
      location.textContent = data.location || 'No location';
    })
    .catch(err => {
      handleError(err);
    });//eroor
  }
function handleError(err) {
  console.log('¡OH NO!');
  console.log(err);
  nameElement.textContent = `Algo salió mal: ${err.message}`;
}

displayUser('stolinski');//llamado de la función
