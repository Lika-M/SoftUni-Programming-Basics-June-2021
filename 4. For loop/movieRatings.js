function movieRatings(input) {

    let num = Number(input[0]);
    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let bestFilm = '';
    let worstFilm = '';
    let sumRating = 0;

    for (let i = 1; i <= 2 * num; i++) {
        let film = input[i];
        i++;
        let rating = Number(input[i]);

        if (rating > maxRating) {
            maxRating = rating;
            bestFilm = film;
        }
        if (rating < minRating) {
            minRating = rating;
            worstFilm = film;
        }
        sumRating += rating;
    }
    let averageRating = sumRating / num;

    console.log(`${bestFilm} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${worstFilm} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
movieRatings(["5",
    "A Star is Born",
   "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
    ])