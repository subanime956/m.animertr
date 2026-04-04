const params = new URLSearchParams(window.location.search);
const query = params.get("search");

const titulo = document.getElementById("titulo");
const resultados = document.getElementById("resultados");

if(query){
  titulo.innerText = "Resultados para: " + query;

  fetch('/data.json')
  .then(res => res.json())
  .then(data => {

    const filtrados = data.filter(item =>
      item.titulo.toLowerCase().includes(query.toLowerCase())
    );

    filtrados.forEach(item => {
      resultados.innerHTML += `
      <div class="card">
        <a href="${item.url}" style="color:white;text-decoration:none;">
          <img src="${item.imagen}">
          <p>${item.titulo}</p>
        </a>
      </div>
      `;
    });

  });
}
