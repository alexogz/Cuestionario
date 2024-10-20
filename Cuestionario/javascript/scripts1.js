document.getElementById('saveButton').addEventListener('click', function() {
  // Con esto el nombre que ponga se guarda y consigo que en el siguiente html salga el nombre que he puesto en el texto
  const name = document.getElementById('nameInput').value;

  // Gracias al local storage guardo el nombre
  localStorage.setItem('userName', name);

});




