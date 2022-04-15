function movieRatings(input) {

    let i = 0;
    let num = Number(input[i]);
    i++;
    let nameFilm = input[i];
    i++;
    let rating = Number(input[i]);
    i++;
    let bestFilm;
    let bestRating = Number.MIN_SAFE_INTEGER;
    let badFilm;
    let badRating = Number.MAX_SAFE_INTEGER;
    let ratingSum = 0;
    let counter = 0;

    while (i <= 2 * num +1) {
      
        if(rating > bestRating){
            bestRating = rating;
            bestFilm = nameFilm;
        }
        if(rating < badRating){
            badRating = rating;
            badFilm = nameFilm;   
        }
    
        ratingSum+=rating;
            counter++;
           
            nameFilm = input[i];
            i++
            rating = Number(input[i]);
            i++
    }
    console.log(`${bestFilm} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${badFilm} is with lowest rating: ${badRating.toFixed(1)}`);
    console.log(`Average rating: ${(ratingSum / num).toFixed(1)}`)
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
"7.1"])


