function getMoviesByGender(selectedValue) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseJSON = convertResponseToJSON(this.responseText);
      createCard(responseJSON);
    }
  };
  xhttp.open("GET", "js/data.php?selectedValue=" + selectedValue, true);
  xhttp.send();
}

var buttons = document.querySelectorAll(".gender-btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var selectedValue = this.getAttribute("value");
    getMoviesByGender(selectedValue);
  });
});

  
  //crear todas las cards
  function createCard(movies) {
    //var movielist = document.getElementsById("movie-list");
    var m;

   

    for (var i = 0; i < movies.length; i++) {
     // console.log(movies[i]);
     //
      m += `
      <div class="movie">
        <figure class="movie-poster"><img height="250px" width="250px" src="${movies[i]['image']}" alt="#"></figure>
        <div class="movie-title"><a href="single.php">${movies[i]['title']}</a></div>
        <p>${movies[i]['description']}</p>
        <a class="sell-rent-btn" href="single.php">Comprar</a>
        <a class="sell-rent-btn" href="single.php">Rentar</a>
      </div>
  `;
  //console.log(movielist.innerHTML);
  console.log(movies[i]['image']);
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
   for (var i = 0; i < lines.length-10; i+=10) {
    var movie = {
      id: lines[i + 0],
      genre: lines[i + 1],
      title: lines[i + 2],
      cast: lines[i + 3],
      description: lines[i + 4],
      duration: lines[i + 5],
      language: lines[i + 6],
      year: lines[i + 7],
      website: lines[i + 8],
      image: lines[i + 9]
    };
    movies.push(movie);
   }

    //var movies = [movie];
   console.log(movies);
    return movies;
  }