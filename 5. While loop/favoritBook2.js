function favoritBook(input) {

    let favoritBook = input[0];
    let i = 1;
    let nextBook = input[i];

    let bookIsfound = false;

    while (nextBook !== "No More Books") {

        if (nextBook === favoritBook) {
            bookIsfound = true;
            break;
        }

        i++;
        nextBook = input[i];
    }

    if (bookIsfound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${i - 1} books.`)
    } else {
        console.log(`You checked ${i - 1} books and found it.`)
    }
}

favoritBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
