function getMoviesByGender() {

  var selectElement = document.getElementById("gender-select");
  var selectedValue = selectElement.value;
  // Enviar la consulta al servidor PHP
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      // console.log(this.responseText);
      // Convertir la respuesta en un objeto JSON
      //var response = JSON.parse(this.responseText);
      //createCard(response.results);
      var responseJSON = convertResponseToJSON(this.responseText);

      console.log(responseJSON);
      //convertResponseToJSON(response.results);
      createCard(responseJSON);

    }
  };
  //xhttp.open("GET", "program.php?consulta=" + consulta, true);
  xhttp.open("GET", "data.php?selectedValue=" + selectedValue, true);
  xhttp.send();
}

//crear todas las cards
function createCard(movies) {
  var movielist = document.getElementById("page");

  movies.forEach(function (movies) {
    movielist.innerHTML += `
   <div class="movie-list">
     <div class="movie">
       <figure class="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"></figure>
       <div class="movie-title"><a href="single.html">${movies.title}</a></div>
       <p>${movies.description}</p>
     </div>
   </div> 
 `;
  });
}


















function convertResponseToJSON(responseText) {
  var lines = responseText.split("\n");
  var movie = {
    genre: lines[0],
    title: lines[1],
    cast: lines[2],
    description: lines[3],
    duration: lines[4],
    language: lines[5],
    year: lines[6],
    website: lines[7],
    image: lines[8]
  };

  return JSON.stringify(movie);
}

// Ejemplo de uso:
/* var responseText = `Animación
El Rey León
Matthew Broderick, Jeremy Irons, James Earl Jones
El Rey León cuenta la historia de Simba, un joven león que sufre la pérdida de su padre y se exilia del reino. Sin embargo, años después, Simba regresa para enfrentarse a su tío Scar y reclamar su lugar como rey de la selva.
1h 28min
Inglés
1994
https://www.disneyplus.com/movies/el-rey-leon/10fGkjU4vjH3
https://www.themoviedb.org/t/p/original/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg`;

var json = convertResponseToJSON(responseText);
console.log(json); */








