class Movie {
  Constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(arr) {
    let filteredArr = arr.filter((val) => val["rating"] === "PG");
    return filteredArr;
  }
}
let film = new Movie("Doctor", "redGiant", "U");
let casino = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(
  film.getPG([
    { title: "jurassic", studio: "uni", rating: "UA" },
    { title: "cars", studio: "disney", rating: "PG" },
    { title: "rio", studio: "disney", rating: "U" },
  ])
);
