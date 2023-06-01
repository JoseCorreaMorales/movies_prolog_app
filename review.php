<!DOCTYPE html>
<html lang="en">
<?php include 'php/head.php'; ?>

<body>


	<div id="site-content">
		<?php include 'php/header.php'; ?>
		<main class="main-content">
			<div class="container">
				<div class="page">
					<div class="breadcrumbs">
						<a href="index.html">Home</a>
						<span>Movie Review</span>
					</div>

					<div class="filters">
						<!-- <select name="gender-list" id="gender-list" placeholder="Choose Category">
							<option value="#">Action</option>
							<option value="#">Drama</option>
							<option value="#">Fantasy</option>
							<option value="#">Horror</option>
							<option value="animacion">Animation</option>
						</select>
						<select name="#" id="#">
							<option value="#">2012</option>
							<option value="#">2013</option>
							<option value="#">2014</option>
						</select> -->

						<!-- ------------------------------------ANIMACION---------------------------------------------- -->
						<div class="movie-container">
							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('animacion')">Animation</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('thriller')">Thriller</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('ficcion')">Ciencia ficcion</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('terror')">Terror</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('romance')">Romance</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('comedia')">Comedia</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('accion')">Accion</button>

							<button class="movie-btn gender-btn" id="gender-select"
							 onclick="getMoviesByGender('familiar')">Familiar</button>
						</div>

					</div>

					<!-- <div class="movie-list"> -->
					<div id="movie-list">

					</div>
					<!-- <div class="movie-list">
							<div class="movie">
								<figure class="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"></figure>
								<div class="movie-title"><a href="single.html">Maleficient</a></div>
								<p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
							</div>
						</div>  -->

				</div>
			</div> <!-- .container -->
		</main>
		<?php include 'php/footer.php'; ?>
	</div>
	<!-- Default snippet for navigation -->
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/app.js"></script>
	<!-- <script src="js/data.js"></script> -->
	<script src="js/mydata.js"></script>

</body>

</html>