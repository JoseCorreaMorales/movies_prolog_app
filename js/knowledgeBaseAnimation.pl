%---------------------------------------------JOSE - ANIMACION-----------------------------------------------------%
pelicula(
  % Genero
  "Animación",
  % Nombre
  "Coco",
  % Actores
  "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
  % Sinopsis
  "Coco cuenta la historia de Miguel, un niño que sueña con convertirse en músico, a pesar de que la música ha sido prohibida en su familia durante generaciones. Desesperado por demostrar su talento, Miguel se mete en problemas y termina en la Tierra de los Muertos, donde se encuentra con sus antepasados y descubre la verdadera historia detrás de su familia.",
  % Duracion   
  "1h 45min", 
  % Idioma
  "Español",
  % Año
  2017,
  % Enlace (donde puedo verla)
  "https://www.disneyplus.com/movies/coco/2aZVwz2GXoDk",
  % imagen (url de la portada)
  "https://www.themoviedb.org/t/p/original/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
).


pelicula(
   % Genero
   "Animación",
   % Nombre
   "El Rey León",
   % Actores
   "Matthew Broderick, Jeremy Irons, James Earl Jones",
   % Sinopsis
   "El Rey León cuenta la historia de Simba, un joven león que sufre la pérdida de su padre y se exilia del reino. Sin embargo, años después, Simba regresa para enfrentarse a su tío Scar y reclamar su lugar como rey de la selva.",
   % Duracion
   "1h 28min",
   % Idioma
   "Inglés",
   % Año
   1994,
   % Enlace (donde puedo verla)
   "https://www.disneyplus.com/movies/el-rey-leon/10fGkjU4vjH3",
   % imagen (url de la portada)
   "https://www.themoviedb.org/t/p/original/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg"
).

pelicula(
   % Genero
   "Animación",
   % Nombre
   "Toy Story",
   % Actores
   "Tom Hanks, Tim Allen, Don Rickles",
   % Sinopsis
   "Toy Story sigue la vida secreta de los juguetes de Andy, que cobran vida cuando él no está mirando. Cuando un nuevo juguete llamado Buzz Lightyear llega a la habitación, Woody, el juguete favorito de Andy, se siente amenazado y comienza una aventura para recuperar su posición como el juguete preferido.",
   % Duracion
   "1h 21min",
   % Idioma
   "Inglés",
   % Año
   1995,
   % Enlace (donde puedo verla)
   "https://www.disneyplus.com/movies/toy-story/dLRNtDc9dcJ6",
   % imagen (url de la portada)
   "https://www.themoviedb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg").


pelicula(
   % Genero
   "Animación",
   % Nombre
   "Mulan",
   % Actores
   "Ming-Na Wen, Eddie Murphy, BD Wong",
   % Sinopsis
   "Mulan es una joven china que se hace pasar por su padre para unirse al ejército imperial y proteger a su país de la invasión de los hunos. A lo largo de su viaje, Mulan descubre su verdadero potencial y se convierte en una heroína para su pueblo.",
   % Duracion
   "1h 28min",
   % Idioma
   "Inglés",
   % Año
   1998,
   % Enlace (donde puedo verla)
   "https://www.disneyplus.com/movies/mulan/17AHtUUwVvO5",
   % imagen (url de la portada)
   "https://www.themoviedb.org/t/p/original/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
).

%------------------------------------------------------------RULES-----------------------------------------------------%


animacion() :- pelicula(Genero, Nombre, Actores, Sinopsis, Duracion, Idioma, Fecha, Enlace, Imagen),
               write(Genero), nl,
               write(Nombre), nl,
               write(Actores), nl,
               write(Sinopsis), nl,
               write(Duracion), nl,
               write(Idioma), nl,
               write(Fecha), nl,
               write(Enlace), nl,
               write(Imagen), nl, fail.









