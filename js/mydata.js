function getMoviesByGender(selectedValue) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseJSON = convertResponseToJSON(this.responseText);
      createCard(responseJSON);
    }
  };
  xhttp.open("GET", "js/data.php?selectedValue=" + selectedValue, true);
  xhttp.send();
}

let buttons = document.querySelectorAll(".gender-btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let selectedValue = this.getAttribute("value");
    getMoviesByGender(selectedValue);
  });
});

/**
 * Creates a card for each movie in the given array and appends it to the DOM.
 * @param {Array} movies - An array of movie objects.
 */
function createCard(movies) {
  //let movielist = document.getElementsById("movie-list");
  let m;

  for (let i = 0; i < movies.length; i++) {
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
}

function convertResponseToJSON(responseText) {
  let lines = responseText.split("\n");
  let movies = [];
  for (let i = 0; i < lines.length - 10; i += 10) {
    let movie = {
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

  //let movies = [movie];
  console.log(movies);
  return movies;
}