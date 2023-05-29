function getMoviesByGender() {
  // Obtener el elemento select
/// var selectElement = document.getElementById("gender-list");


// Obtener el valor seleccionado
//var selectedValue = selectElement.value;


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
     //console.log(response.results);
     console.log(selectedValue +   "  valorxd");


     console.log(this.responseText);
   }
 };
 //xhttp.open("GET", "program.php?consulta=" + consulta, true);
 xhttp.open("GET", "js/data.php?selectedValue=" + selectedValue, true);
 xhttp.send();
}

//crear muchas card con javascript
function createCard(movie){
 let movielist = document.getElementById("page");

 movie.forEach(movie => {
   movielist.innerHTML += /*html*/`
   <div class="movie-list">
           <div class="movie">
             <figure class="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"></figure>
             <div class="movie-title"><a href="single.html">Maleficient</a></div>
             <p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
           </div>
         </div> 
   `;
 });
} 