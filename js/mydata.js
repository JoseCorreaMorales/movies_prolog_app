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
        /* console.log(this.responseText); */
        var responseJSON = convertResponseToJSON(this.responseText);
  
        //console.log(responseJSON);
        
        //convertResponseToJSON(response.results);
        createCard(responseJSON);
      
  
      }
    };
    //xhttp.open("GET", "program.php?consulta=" + consulta, true);
    xhttp.open("GET", "js/data.php?selectedValue=" + selectedValue, true);
    xhttp.send();
  }
  
  //crear todas las cards
  function createCard(movies) {
    //var movielist = document.getElementsById("movie-list");
    var m;

    for (var i = 0; i < movies.length; i++) {
     // console.log(movies[i]);
      m += `
      <div class="movie">
        <figure class="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"></figure>
        <div class="movie-title"><a href="single.html">${movies[i]['title']}</a></div>
        <p>${movies[i]['description']}</p>
      </div>
  `;
  //console.log(movielist.innerHTML);
  
}
document.getElementById('movie-list').innerHTML = m;
    //console.log(movies);
    /* movies.forEach(function (movies) {
      movielist.innerHTML += `
       <div class="movie">
         <figure class="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"></figure>
         <div class="movie-title"><a href="single.html">${movies.title}</a></div>
         <p>${movies.description}</p>
       </div>
   `;
    console.log(movielist.innerHTML);
    }) */
    //;
  }

  function convertResponseToJSON(responseText) {
    var lines = responseText.split("\n");
    var movies = [];
   for (var i = 0; i < lines.length-9; i+=9) {
    var movie = {
      genre: lines[i + 0],
      title: lines[i + 1],
      cast: lines[i + 2],
      description: lines[i + 3],
      duration: lines[i + 4],
      language: lines[i + 5],
      year: lines[i + 6],
      website: lines[i + 7],
      image: lines[i + 8]
    };
    movies.push(movie);
   }

    //var movies = [movie];

    return movies;
  }