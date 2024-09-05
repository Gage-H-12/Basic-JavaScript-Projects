function my_Dictionary() {
    var movie = {
        Title: "The Avengers",
        Genre: "Action",
        Director: "Joss Whedon",
        Rating: "PG-13",
    };
    delete movie.Genre;
    document.getElementById("Dictionary").innerHTML = movie.Genre;
}